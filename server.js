const express = require("express");
const cors = require("cors");
const path = require("path");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Próximo Nível AI", message: "Backend funcionando." });
});

app.post("/api/chat", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "A chave OPENAI_API_KEY não está configurada nas variáveis do servidor."
      });
    }

    const { message, history = [], context = "" } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "Envie uma mensagem no campo message." });
    }

    const messages = [
      {
        role: "system",
        content:
          "Você é Ísis, a assistente de inteligência artificial do Próximo Nível. " +
          "Responda em português brasileiro, com clareza, respeito e praticidade. " +
          "Ajude o usuário a evoluir em estudos, rotina, carreira, finanças e objetivos pessoais. " +
          "Não afirme que realizou ações que não realizou. Em assuntos médicos, jurídicos ou financeiros " +
          "de alto impacto, explique limites e recomende ajuda profissional quando apropriado."
      }
    ];

    if (Array.isArray(history)) {
      for (const item of history.slice(-10)) {
        if (
          item &&
          (item.role === "user" || item.role === "assistant") &&
          typeof item.content === "string"
        ) {
          messages.push({ role: item.role, content: item.content.slice(0, 6000) });
        }
      }
    }

    let userMessage = message.trim();
    if (typeof context === "string" && context.trim()) {
      userMessage += "\n\nContexto adicional do aplicativo: " + context.trim().slice(0, 3000);
    }
    messages.push({ role: "user", content: userMessage });

    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 900
    });

    const reply = completion.choices?.[0]?.message?.content;
    return res.json({ reply: reply || "Não consegui gerar uma resposta agora. Tente novamente." });
  } catch (error) {
    console.error("Erro no endpoint /api/chat:", error?.status || "", error?.message || error);
    return res.status(500).json({
      error: "Não consegui consultar a IA agora. Verifique os logs do servidor."
    });
  }
});

// Serve a página principal existente no repositório.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => {
  console.log(`Próximo Nível AI backend ativo na porta ${port}`);
});

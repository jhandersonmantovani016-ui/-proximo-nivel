
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "Próximo Nível AI",
    message: "Backend funcionando."
  });
});

app.post("/api/chat", async (req, res) => {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Configure OPENROUTER_API_KEY nas variáveis do Railway."
      });
    }

    const { message, history = [], context = "" } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Envie uma mensagem no campo message."
      });
    }

    const messages = [
      {
        role: "system",
        content:
          "Você é Ísis, a assistente do Próximo Nível. " +
          "Responda em português brasileiro, de forma clara, acolhedora e prática. " +
          "Ajude com estudos, rotina, carreira, finanças e objetivos pessoais."
      }
    ];

    if (Array.isArray(history)) {
      for (const item of history.slice(-10)) {
        if (
          item &&
          ["user", "assistant"].includes(item.role) &&
          typeof item.content === "string"
        ) {
          messages.push({
            role: item.role,
            content: item.content.slice(0, 6000)
          });
        }
      }
    }

    let userMessage = message.trim();

    if (typeof context === "string" && context.trim()) {
      userMessage += "\n\nContexto do aplicativo: " + context.trim().slice(0, 3000);
    }

    messages.push({ role: "user", content: userMessage });

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://proximonivell.edgeone.dev",
          "X-OpenRouter-Title": "Próximo Nível AI"
        },
        body: JSON.stringify({
          model: "apodex/apodex-1.1-mini:free",
          messages,
          max_tokens: 900
        })
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error(
        "Erro OpenRouter:",
        response.status,
        data?.error?.message || "Sem detalhes"
      );

      return res.status(502).json({
        error:
          "A IA não respondeu. Confira a chave, o modelo e os logs do Railway."
      });
    }

    const reply = data?.choices?.[0]?.message?.content;

    if (typeof reply !== "string" || !reply.trim()) {
      return res.status(502).json({
        error: "A IA não retornou texto. Tente novamente."
      });
    }

    return res.json({ reply });

  } catch (error) {
    console.error("Erro no chat:", error?.message || error);

    return res.status(500).json({
      error: "Erro ao consultar a IA. Verifique os logs do Railway."
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, "0.0.0.0", () => {
  console.log(`Próximo Nível AI ativo na porta ${port}`);
});
      


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;
const API_KEY = process.env.OPENAI_API_KEY;
const MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

app.use(cors({
  origin: (origin, callback) => callback(null, true)
}));

app.use(express.json({ limit: "20kb" }));

app.get("/", (_req, res) => {
  res.json({
    service: "Próximo Nível — Ísis",
    status: "online"
  });
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {
  try {
    if (!API_KEY) {
      return res.status(503).json({
        error: "A chave da API ainda não foi configurada no servidor."
      });
    }

    const message = typeof req.body?.message === "string"
      ? req.body.message.trim()
      : "";

    if (!message) {
      return res.status(400).json({
        error: "Escreva uma mensagem para a Ísis."
      });
    }

    if (message.length > 4000) {
      return res.status(413).json({
        error: "A mensagem deve ter no máximo 4000 caracteres."
      });
    }

    const history = Array.isArray(req.body?.history)
      ? req.body.history.slice(-8)
      : [];

    const input = [];

    for (const item of history) {
      if (
        item &&
        ["user", "assistant"].includes(item.role) &&
        typeof item.content === "string"
      ) {
        input.push({
          role: item.role,
          content: item.content.slice(0, 4000)
        });
      }
    }

    input.push({ role: "user", content: message });

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: MODEL,
          instructions:
            "Você é Ísis, assistente virtual do Próximo Nível. " +
            "Fale em português brasileiro, com acolhimento, clareza " +
            "e objetividade. Ajude com metas, estudos, carreira, " +
            "hábitos, organização financeira e evolução pessoal. " +
            "Nunca diga que realizou ações externas que não realizou.",
          input
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro da API:", data?.error?.message);
      return res.status(502).json({
        error: "Não consegui responder agora. Verifique a configuração da API."
      });
    }

    const reply = (data.output || [])
      .filter(item => item.type === "message")
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("\n")
      .trim();

    return res.json({
      reply: reply || "Tente novamente, não consegui gerar uma resposta."
    });
  } catch (error) {
    console.error("Erro no chat:", error.message);
    return res.status(500).json({
      error: "Erro ao conversar com a Ísis. Tente novamente."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Ísis ativa na porta ${PORT}`);
});

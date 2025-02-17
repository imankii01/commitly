import fetch from "node-fetch";

async function fetchFromAI(apiKey, model, prompt) {
  let apiUrl = "", bodyData = {};

  if (model === "gemini") {
    apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${apiKey}`;
    bodyData = { prompt: { text: prompt }, temperature: 0.7 };
  } else if (model === "chatgpt") {
    apiUrl = "https://api.openai.com/v1/chat/completions";
    bodyData = { model: "gpt-4", messages: [{ role: "system", content: prompt }] };
  } else if (model === "claude") {
    apiUrl = "https://api.anthropic.com/v1/complete";
    bodyData = { model: "claude-2", prompt, max_tokens: 100 };
  }

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(bodyData),
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content || "No commit message generated!";
}

export async function generateCommitMessage(apiKey, model, gitDiff) {
  const prompt = `Analyze the following code changes and generate a concise commit message:\n\n${gitDiff}`;
  return fetchFromAI(apiKey, model, prompt);
}
``

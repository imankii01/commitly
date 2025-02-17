import fetch from 'node-fetch'

async function fetchFromAI (apiKey, model, prompt) {
  let apiUrl = '',
    bodyData = {},
    headers = {}

  try {
    if (model === 'gemini') {
      apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
      bodyData = { contents: [{ parts: [{ text: prompt }] }] }
    } else if (model === 'chatgpt') {
      apiUrl = 'https://api.openai.com/v1/chat/completions'
      bodyData = {
        model: 'gpt-4',
        messages: [{ role: 'system', content: prompt }]
      }
    } else if (model === 'claude') {
      apiUrl = 'https://api.anthropic.com/v1/messages'
      headers['anthropic-version'] = '2023-06-01'
      bodyData = {
        model: 'claude-2',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 100
      }
    } else {
      throw new Error(
        "❌ Unsupported AI model! Use 'gemini', 'chatgpt', or 'claude'."
      )
    }

    // 🔹 API Call
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${apiKey}`,
        ...headers
      },
      body: JSON.stringify(bodyData)
    })

    // 🔹 Parse Response
    const data = await response.json()

    // 🔹 Extract and Return Message
    if (model === 'gemini') {
      return (
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        '❌ No commit message generated!'
      )
    } else if (model === 'chatgpt') {
      return (
        data?.choices?.[0]?.message?.content ||
        '❌ No commit message generated!'
      )
    } else if (model === 'claude') {
      return data?.content || '❌ No commit message generated!'
    }
  } catch (error) {
    return '❌ AI Error: Unable to generate commit message!'
  }
}

export async function generateCommitMessage (apiKey, model, gitDiff) {
  const prompt = `Analyze the following Git changes and generate a meaningful commit message:\n\n${gitDiff}`

  const commitMessage = await fetchFromAI(apiKey, model, prompt)
  return commitMessage
}

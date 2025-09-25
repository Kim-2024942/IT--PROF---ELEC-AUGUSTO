import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyDwyTuti5nUm5yFNoBCM3InZoJjde4mlwk"});

 export async function askAi(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
        systemInstruction: "You are a ai. Your name is chatgpt.",

    }
  });
 return response.text
}


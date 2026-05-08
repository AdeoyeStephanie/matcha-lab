//server action to generate recipe feedback using Gemini API
'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateRecipeFeedback(prompt) { //function that takes in a prompt and returns the AI's response as text. 
    try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oopsy! The AI is having a coffee break. Try again later.";
  }
}


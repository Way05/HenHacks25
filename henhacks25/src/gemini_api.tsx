const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCWpbk1sPa-BlZ_1faY4Oyvr8SpxT6govg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function fetchResponse(prompt: string) {
    const result = await model.generateContent(prompt);
    return result;
}

export { fetchResponse };
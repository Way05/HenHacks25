const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCWpbk1sPa-BlZ_1faY4Oyvr8SpxT6govg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

async function fetchResponse() {
    const result = await model.generateContent(prompt);
    return result;
}

const response = fetchResponse()
console.log(response);

export {};
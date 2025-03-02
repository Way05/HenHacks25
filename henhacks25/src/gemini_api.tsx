import { construct_prompt } from "./pages/chat";
import { l_responses } from "./pages/chat";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export const l_inputs: string[] = [];
const genAI = new GoogleGenerativeAI("AIzaSyCWpbk1sPa-BlZ_1faY4Oyvr8SpxT6govg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function fetchResponse(prompt: string) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

function handleSubmit(e: any) {
  
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson.myInput);

    //UNCOMMENT THIS TO RECEIVE RESPONSES FROM GEMINI AI
    l_inputs.push(formJson.myInput.toString())
    const response = fetchResponse(construct_prompt(formJson.myInput.toString(),l_inputs.join('\n\n\n'),l_responses.join('\n\n\n')));

    // console.log(response);
    return response
  }

export { handleSubmit };
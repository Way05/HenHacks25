const { GoogleGenerativeAI } = require("@google/generative-ai");

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
    console.log(formJson.myInput);

    //UNCOMMENT THIS TO RECEIVE RESPONSES FROM GEMINI AI
    // const response = fetchResponse(formJson.myInput.toString());
    // console.log(response);
  }

export { handleSubmit };
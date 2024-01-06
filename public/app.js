const input = document.querySelector("#input");
const chatbox = document.querySelector(".chatbox");


const geminiResponse = async () => {
    try {
        // Get the value from the input field
        const inputValue = input.value;
        const customInstructions="Your name is MedEzy bot, you are healthcare and medical related bot, only give answers to those questions which are related to medical field also give answer in html format if needed and neetky formated text, remember that you have to give output such that it looks well so use html if needed your question is: "
        // Include the inputValue in the contentObject
        const contentObject = {
            msg: customInstructions+inputValue, // Use the inputValue here
        };
        chatbox.innerHTML=`<div style="display:flex; justify-content:flex-start; align-elements:baseline;"><div style="font-size: 25px;">👨</div><div>${inputValue}</div></div><br></br>`
        const response = await axios.post('/api/v1/response/gemini', contentObject);
        
        // Update the inner HTML of the chatbox element with the response
        const old=chatbox.innerHTML;
        chatbox.innerHTML =old+`<div style="display:flex; justify-content:flex-start; align-elements:baseline;"><div style="font-size: 25px;">🤖</div><div>${response.data}</div></div><br></br><br></br>`;
    } catch (error) {
        console.error("Error:", error);
    }
}

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", geminiResponse);




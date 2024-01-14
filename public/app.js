const input = document.querySelector("#input");
const chatbox = document.querySelector(".chatbox");
const container = document.querySelector(".scrollable-div");


const geminiResponse = async () => {
    try {
        var old=chatbox.innerHTML;
        // Get the value from the input field
        const inputValue = input.value
        const customInstructions="Your name is MedEzy bot, you are healthcare and medical related bot, only give answers to those questions which are related to medical field remember that you have to give output such that it looks well so use html if needed your question is: "
        // Include the inputValue in the contentObject
        const contentObject = {
            msg: customInstructions+inputValue, // Use the inputValue here
        };
        chatbox.innerHTML=old+`<div style="display:flex; justify-content:flex-start; align-elements:baseline;"><div style="font-size: 25px;">👨</div><div>${inputValue}</div></div><br></br>`
        input.value='';
        container.scrollTop = container.scrollHeight;
        const response = await axios.post('/api/v1/response/gemini', contentObject);
        
        // Update the inner HTML of the chatbox element with the response
        old=chatbox.innerHTML;
        chatbox.innerHTML =old+`<div style="display:flex; justify-content:flex-start; align-elements:baseline;"><div style="font-size: 25px;">🤖</div><div>${response.data}</div></div><br></br><br></br>`;
    } catch (error) {
        console.error("Error:", error);
    }
}

//submit-by-button
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", geminiResponse);


//submit-by -enter
input.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        geminiResponse();
    }
})

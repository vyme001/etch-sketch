
//action form logic in IIFE; privateky scopes properties of the action form
(()=>{
document.querySelector("#action-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    });

document.querySelector("#exit-btn").addEventListener("click",(e)=>{
            console.log('exit clicked', e);
        });
})();
//IIFE End

//slider input logic in IIFE form
(()=>{
document.querySelector("#slide-input").addEventListener("input", (e)=>{
        document.querySelector("#value").textContent = e.target.value;
    });
})();
//IIFE End

//IIFE for the play Button click
(()=>{
document.querySelector("#play-btn").addEventListener("click",()=>{
        const userValue = document.querySelector("#value").value;

        for(let x = 1; x <= userValue; x++){
            const box = document.createElement("div");
            box.className = "grid-box";
            document.querySelector("#container").appendChild(box);

        }
        console.log(userValue);
        });

})()
//IIFE End


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
  document.querySelector("#play-btn").addEventListener("click", (e)=>{
    const gridContainer = document.querySelector("#container");
    const value = document.querySelector("#slide-input").value;
    //The Eloquent JS chess board exercise helped me figure this out!!!
   for(let x = 0; x < value; x++){
    const newColumn = document.createElement("div");
      for(let y = 0; y < value; y++){
        let newBox = document.createElement("div");
        newBox.className = "grid-box";
        newColumn.appendChild(newBox)
      }
      gridContainer.appendChild(newColumn)
   }
  })
})()
//IIFE End



//IIFE Start

//IIFE End
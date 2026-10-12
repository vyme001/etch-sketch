"use strict";

//action form logic in IIFE; privateky scopes properties of the action form
(()=>{
  document.querySelector("#action-form").addEventListener("submit",(e)=>{
    e.preventDefault()
  });

  document.querySelector("#exit-btn").addEventListener("click",(e)=>{
    console.log('exit clicked', e);
    window.location.reload();
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
  let gridCreated = false;
  document.querySelector("#play-btn").addEventListener("click", (e)=>{
  
    if(gridCreated){
      alert("Already selected!")
      return;
    }else{
    gridCreated = true;
    const gridContainer = document.querySelector("#container");
    const value = document.querySelector("#slide-input").value;

    //The Eloquent JS chessboard exercise helped me figure this out!!!
  for(let x = 0; x < value; x++){
    const newRow = document.createElement("div");
    newRow.className = "row-container";
      for(let y = 0; y < value; y++){
        let newBox = document.createElement("div");
        newBox.className = "grid-box";
        newBox.addEventListener("mouseover", (e)=>{hoverEffect(e.target)})
        newRow.appendChild(newBox);
      };
    gridContainer.appendChild(newRow);

  };
};
  })
})();
//IIFE End

//Function declaration for the hover effect of the grid panel being added to every newEleemnt dynamically created
function hoverEffect(element){

  function opacity(){
    return `${Number.parseFloat(Math.random() * 1).toFixed(2)}`;
  };

  function randonNum(){
    let num = `${Math.floor(Math.random() * 255)}`;
    return num;
  };

  function RGBTriplet(){
    let moc = `${randonNum()} ${randonNum()} ${randonNum()}`;
    return moc;
  };

  element.style.backgroundColor = `rgb( ${RGBTriplet()} / ${opacity()})`;
};
//IIFE End
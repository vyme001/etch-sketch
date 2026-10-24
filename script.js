"use strict";

//action form logic in IIFE; privateky scopes properties of the action form
(()=>{
  document.querySelector("#action-form").addEventListener("submit",(e)=>{
    e.preventDefault()
  });

  document.querySelector("#exit-btn").addEventListener("click",()=>{
    window.location.reload();
  });
})();
//IIFE End

//radio slide-btn-input logic IIFE
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


  //Function declaration for cinstructing the grid
  function gridGeneration(gridContainer, value){
      //The Eloquent JS chessboard exercise helped me figure this out; grid builder logic!!!
    for(let x = 0; x < value; x++){
      const newRow = document.createElement("div");
      newRow.className = "row-container";
        for(let y = 0; y < value; y++){
          let newBox = document.createElement("div");
          newBox.className = "grid-box";
          newBox.addEventListener("mouseover", (e)=>{mouseEffect(e.target)})
          newRow.appendChild(newBox);
        };
      gridContainer.appendChild(newRow);
    };
  };
    gridGeneration(gridContainer, value);
};
  })
})();
//IIFE End

//Function declaration for the hover e
function mouseEffect(item){
  let isHovered = true;

  

  function hueGen(){
      return Math.floor(Math.random() * 255);
  };

  function opacityGen(){
      return Number((Math.random() * 1).toFixed(2));
  };


  let color = `rgba(${hueGen()} ${hueGen()} ${hueGen()} / ${opacityGen()})`;
  item.style.backgroundColor = color;
};

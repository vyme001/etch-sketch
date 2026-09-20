
//action form logic in IIFE; privateky scopes properties of the action form
(()=>{
const actionForm = document.querySelector("#action-form");
    actionForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    })

const playBtn = document.querySelector("#play-btn");
        playBtn.addEventListener("click",()=>{
            console.log('play clicked');
        });

const exitBtn = document.querySelector("#exit-btn");
        exitBtn.addEventListener("click",(e)=>{
            console.log('exit clicked', e);
        });
})()



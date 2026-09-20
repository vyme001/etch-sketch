# Technical Design Document: Game; Etch-a-Sketch

## 1. Executive Summary
Build a game that only accepts mouse input 

## 2. Requiremnts & Scope
## In Scope
* User inputs through mouse button clicks and mouse hover

## Out of Scope
* User login
* historical archive/artifacts


```text
Table: user-interface
-----------------------------------------------------------
|       |       |                               |         |
-----------------------------------------------------------
|       |       |                               |         |
|       |       |                               |         |------------------------------------------------------------
```
## 3. HTML Setup
* Nav/User Selection with form
    - radio button
        - range(1, 100)
    - Submit/button for number value


## 4. Technical Specs & PsuedoCode

```text
FUNCTION exitGame/restartGame
function exitGame(){
    const exBtn = document.querySelector("#exit-btn");
    exBtn.addEventListener("click", (e)=>{
        console.log("event test: ", e)
    })
};

```
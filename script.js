let Btn1 = document.querySelectorAll(".btn-x");
let Btn2 = document.querySelectorAll(".btn-box");
let BtnReset = document.querySelector(".reset");
let PlayerO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

Btn1.forEach((box) => {
box.addEventListener('click', () => {
    if(PlayerO){
        box.innerText = "O";
        PlayerO = false;
    }else{
        box.innerText = "X";
        PlayerO = true;
    }
   box.disabled = true;
})
});

Btn2.forEach((box) => {
box.addEventListener('click', () => {
    if(PlayerO){
        box.innerText = "O";
        PlayerO = false;
    }else{
        box.innerText = "X";
        PlayerO = true;
    }
     box.disabled = true;
})
})
// let boxes = document.querySelectorAll(".btn-x, .btn-box");
// let newBtn = document.querySelector(".new");
// let heading = document.querySelector(".winner");
// let hidden = document.querySelector(".hide");
// let BtnReset = document.querySelector(".reset");
// let Player = true;

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// boxes.forEach((btn) =>{
//     btn.addEventListener("click", () => {
//         if(Player){
//             btn.innerText = "O";
//             Player = false;
//         }else{
//             btn.innerText = "X";
//             Player = true;
//         }

//         btn.disabled =true;
//         checkWinner();
//     })
// })


// const checkWinner = () => {
// for(let patterns of winPatterns){

//     let Pos1 = boxes[patterns[0]].innerText;
//     let Pos2 = boxes[patterns[1]].innerText;
//     let Pos3 = boxes[patterns[2]].innerText;

//     if(Pos1 !== "" && Pos2 !== "" && Pos3 !== "" ){
//         if(Pos1 === Pos2 && Pos2 === Pos3){
//             console.log('winner', Pos1);
//             showWInner(Pos1)

//         }
//     }

// }
// };


// const showWInner = (winner) => {
// heading.innerText = `CONGRATULATIONS WINNER IS ${winner}`;
// hidden.classList.remove("hide");
// disabledboxes();
// };



// const disabledboxes = () => {
//     for(let box of boxes){
//         box.disabled = true;
//     }
// };


// const enabledboxes = () => {
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const resetgame = () => {
//     Player = true;
//     enabledboxes();
//     hidden.classList.add("hide")

// };

// newBtn.addEventListener('click', resetgame);
// BtnReset.addEventListener("click", resetgame);








let boxes = document.querySelectorAll(".btn-x, .btn-box");
let newBtn = document.querySelector(".new");
let heading = document.querySelector(".winner");
let hidden = document.querySelector(".hide");
let BtnReset = document.querySelector(".reset");
let headingtwo = document.querySelector('.heading2')
let hiddenn = document.querySelector(".hidden")
let count = 0;
let Player = true;


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

boxes.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (Player) {
            btn.innerText = "O";
            Player = false;
        } else {
            btn.innerText = "X";
            Player = true;
        }
        btn.disabled = true;
        count++;
        let iswinner = checkWinner();
        if(count === 9 && !iswinner){
            gameDraw();
        }
        checkWinner();
    });
});

const gameDraw = () => {
    headingtwo.innerText = `GAME WAS A DRAW 🤝`;
    hiddenn.classList.remove('hidden');
    disabledboxes();
}

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let PosVal1 = boxes[patterns[0]].innerText;
        let PosVal2 = boxes[patterns[1]].innerText;
        let PosVal3 = boxes[patterns[2]].innerText;
        if (PosVal1 !== "" && PosVal2 !== '' && PosVal3 !== '') {
            if (PosVal1 === PosVal2 && PosVal2 === PosVal3) {
                showWInner(PosVal1);

                iswinner = checkWinner();
                return;
            }
        }
    }
    return false;
};

const showWInner = (winner) => {
    heading.innerText = `CONGRATULATION WINNER IS  ➤  ${winner}`;
    hidden.classList.remove("hide");
    disabledboxes();
}

const disabledboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabledboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ''
    }
};

const resetgame = () => {
    Player = true;
    count = 0;
    enabledboxes();
    hidden.classList.add("hide");
};



newBtn.addEventListener("click", resetgame);
BtnReset.addEventListener('click', resetgame);

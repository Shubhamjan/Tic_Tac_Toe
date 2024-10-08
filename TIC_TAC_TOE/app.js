let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let newGame=document.querySelector("#new")
let msgContainer=document.querySelector(".msg")
let msg=document.querySelector("#win")
let count=0
let turn = true

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // box.innerText="abc"
        count++
        console.log(count)
        if (turn) {
            box.innerText = "0";
            turn = false
        } else {
            box.innerText = "X"
            turn = true
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBox()
}

const showDraw=()=>{
    msg.innerText="Game is drawn"
    msgContainer.classList.remove("hide")
    count=0
    disableBox()
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
    
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2==pos3){
                showWinner(pos1);
            }
        }
        if(count%9==0){
            showDraw();
        }
    }
}

const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const resetGame=()=>{
    turn=true;
    enableBox();
    msgContainer.classList.add("hide");
}

newGame.addEventListener("click",resetGame)
resetbtn.addEventListener("click",resetGame)
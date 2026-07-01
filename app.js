let boxes = document.querySelectorAll(".box") 
let reset = document.getElementById("reset")
let newbtn = document.getElementById("new-game")
let msgCtr = document.querySelector(".msg-ctr")
let msg = document.querySelector("#msg")

let winPttrn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turn_O = true;     

const resetgame = () => {
    turn_O = true;         
    enableboxes();         
    msgCtr.classList.add("hide");      

}

const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false       
        box.innerHTML = ""          
    }
}
const disabledboxex = () => {       
    for (box of boxes) {
        box.disabled = true
    }
}



boxes.forEach(box => {        
    box.addEventListener("click", () => {     
        console.log("Box is clicked ")
        if (turn_O) {
            box.innerHTML = "O";        
            turn_O = false;
        } else {
            box.innerHTML = "X";
            turn_O = true;
        }
        box.disabled = true;       
        checkpttrn();
    });
});

const showwinner = (winner) => {
    console.log("Winner is " + winner);
    msg.innerHTML = "Congratulations Winner is " + winner;
    msgCtr.classList.remove("hide");        

    disabledboxex();
}
// pttrn[0]     pttrn[1]       pttrn[1]
//     [0,        1,             2],
//     [3,        4,             5],
//     [6,        7,             8],
//     [0,        3,             6],
//     [1,        4,             7],
//     [2,        5,             8],
//     [0,        4,             8],
//     [2,        4,             6]

const checkpttrn = () => {
    for (pttrn of winPttrn) {           // pttrns are elements of winpttrn ... ie pttrn = [0, 1, 2],[3, 4, 5].... 
        let val1 = boxes[pttrn[0]].innerHTML;       //pttrn[0] = 0
        let val2 = boxes[pttrn[1]].innerHTML;       //pttrn[1] = 1
        let val3 = boxes[pttrn[2]].innerHTML;       //pttrn[2] = 2

        if (val1 != "" && val2 != "" && val3 != "") {       //checks neithers of val's are empty
            if (val1 === val2 && val2 === val3) {       //check all val's are same ... winner decleared
                showwinner(val1);
            }
        }
    }
}


reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);        //is someone click new game button ... reset game is called

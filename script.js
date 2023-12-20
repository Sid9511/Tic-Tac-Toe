let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector(".rstBtn")
let chkWin = document.querySelector(".chkWin")
let nxtBtn = document.querySelector(".nxtBtn")
let msgs = document.querySelector("#msg")

let playerO = true;


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
        console.log("box clicked");
        if (playerO) {
            box.innerHTML = "O";
            box.style.color = "red";
            playerO = false;
        } else {
            box.innerHTML = "X";
            box.style.color = "blue";
            playerO = true; 
        }
        box.disabled = true;

        checkWinner();
    });
});




const checkWinner = () => {
    for (let pattern of winPatterns) {  // for of : is giving each pattern from winPatterns.
        // console.log(pattern);  // console.log : is printing all the patterns from winPatterns, one at a time on console.
        
        // console.log(pattern[0], pattern[1], pattern[2]); // pattern [0] : 0, 1, 2 are indexes for each element of single pattern.

        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); // boxes[pattern[0]] : it says thet within the 'boxes' start from 0th index and then go through each index as 0, 1, 2 till 2nd index (as we have considered only 3 elements in one array therfore 3 index are taken) taking single element at a time from single pattern.

        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);  // .innerText : is printing the value stored at the position represented by the index.


        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // here we have taken 3 values from there respective positions which are determined by the index of each pattern from the winPatterns array.

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") // In this 1st if condition we are checking if is there is any empty index present or not. Cuz if any index position does not contain any value then we cannot declare winner as the game is still on.
        {
            if (pos1Val === pos2Val && pos2Val === pos3Val) // In this 2nd if condition we are checking the 3 values from each indices, whether they are equal or not. Cuz if they are not equal there is no winning pattern formed hence, we cannot declare winner. 
            {
                if (pos1Val === undefined && pos2Val === undefined && pos3Val === undefined){
                    console.log("Play the Game");
                    alert("Play the Game");
                    return("Play the Game");
                }else {
                    console.log(`Winner is ${pos1Val}`); // as all thr values are equal we can declare winner with the value of 'pos1Val' or any other posVal.
                    return(pos1Val); 
                }
            }
        }
    }
}; 



rstBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        console.log("Game Reset!");
        box.innerHTML = " "; 
        box.style.color = "";    
        msgs.style.display = 'none';
    });
});


chkWin.addEventListener("click", () => {
    if (checkWinner() == undefined){
        console.log(`Play the Game`);
        alert(`First, Play the Game`); 
    }else {console.log(`Winner is ${checkWinner()}`);
    alert(`Winner is ${checkWinner()}`); 
    msgs.style.display = 'block';
    msgs.innerHTML = `Winner is ${checkWinner()}`;}
});    



nxtBtn.addEventListener("click", () => {
    location.reload();
});




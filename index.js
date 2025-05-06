class tictactoe{
constructor(){
this.cells=document.querySelectorAll(".cell");
this.statusMessage= document.querySelector("#statusMessage");
this.restartButton= document.querySelector("#restartButton");
this.winConditions= 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6 ]
];
this.options=["","","","","","","","",""];
this.currentPlayer="X";
this.running=false;
this.initializeGame();
 }

initializeGame(){
    this.cells.forEach(cell => cell.addEventListener("click" ,(e) => this.cellClicked(e)));
    this.restartButton.addEventListener("click", () => this.restartGame());
    this.statusMessage.textContent = `${this.currentPlayer}'s turn`;
    this.running=true;
}

cellClicked(e){
    const cell =e.target;
    const cellIndex=parseInt(cell.getAttribute("cellIndex"));
    if(this.options[cellIndex] !== "" || !this.running){
        return;
    }
    this.updateCell(cell,cellIndex);
    this.checkWinner();
}

updateCell(cell,index){
    this.options[index]=this.currentPlayer;
    cell.textContent=this.currentPlayer;
}

changePlayer(){
    this.currentPlayer=(this.currentPlayer === "X") ? "O" : "X";
    this.statusMessage.textContent=`${this.currentPlayer}'s turn`;
}

checkWinner(){
    let roundWon=false;

    for(let i=0; i<this.winConditions.length;i++){
        const condition=this.winConditions[i];
        const cellA=this.options[condition[0]];
        const cellB=this.options[condition[1]];
        const cellC=this.options[condition[2]];
        
        if(cellA=="" || cellB=="" || cellC==""){
            continue;
        }

    if(cellA==cellB && cellB==cellC){
        roundWon=true;
        break;
    }

}
    if(roundWon){
        this.statusMessage.textContent=`${this.currentPlayer} wins:)`;
        this.running=false;
    }
    else if(!this.options.includes("")){
        this.statusMessage.textContent=`Draw`;
        this.running=false;
    }
    else{
        this.changePlayer();
    }
}

restartGame(){
    this.currentPlayer="X";
    this.options=["","","","","","","","",""];
    this.statusMessage.textContent=`${this.currentPlayer}'s turn`;
    this.cells.forEach(cell => cell.textContent="");
    this.running=true;
}
}


window.addEventListener("DOMContentLoaded", () => {
    new tictactoe();
});

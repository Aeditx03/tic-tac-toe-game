let box = document.querySelectorAll('.container .shape')
let show_winner = document.querySelector('.show-winner')
let count = Math.floor(2 + Math.random() * 5)
let playerTurn = true


//this is for starting with random player
if (count % 2 === 0) {
    playerTurn = false
}
box.forEach((items) => {
    items.addEventListener("click", () => {
        if (items.classList.contains('tick') || items.classList.contains('circle')) {

            alert('Tereko dar nhi lagta?? over click marta hai Sale');

        }
        else {

            if (playerTurn) {
                items.classList.add('circle');
                chkForFilled(box)
                // check(box);
                newWinnerChk(box)
                playerTurn = false;
            }
            else {
                items.classList.add('tick');
                count++;
                chkForFilled(box)
                // check(box);
                newWinnerChk(box)
                playerTurn = true;
            }
        }
    })
})
function chkForFilled(box) {
    let boxArr = Array.from(box)
    const allItemsFilled = boxArr.every(items => items.classList.contains('tick') || items.classList.contains('circle'));
    if (allItemsFilled) {
        if (newWinnerChk(box) != true) {
            show_winner.style.display = 'flex'
            document.querySelector(".container").style.display = 'none'
            document.querySelectorAll(".player").forEach((item) => {
                item.style.display = "none"
                document.querySelector('.show-winner h5').style.display = 'none'
                document.querySelector('.show-winner h1').innerText = 'Nobody Win This Game'
                document.querySelector('.show-winner').style.backgroundImage = 'url(https://media1.tenor.com/m/sWEY8anP4dwAAAAd/chala-ja-chala-ja-b-sd-k.gif)'

            })
        }
    }
}

//reload page while clicking play again button
let btn = document.querySelector('button')
btn.addEventListener('click', () => {
    location.reload()
})

const winnerArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
]
function newWinnerChk(box) {
    for (let pattern of winnerArr) {
        let box1 = box[pattern[0]];
        let box2 = box[pattern[1]];
        let box3 = box[pattern[2]];
        if (box1.classList.contains('tick') && box2.classList.contains('tick') && box3.classList.contains('tick')) {
            show_winner.style.display = 'flex'
            document.querySelector(".container").style.display = 'none'
            document.querySelectorAll(".player").forEach((item) => {
                item.style.display = "none"
                document.querySelector('.show-winner h5').innerText = 'PLAYER ONE ✅'
                document.querySelector('.show-winner').style.backgroundImage = 'url(https://media1.tenor.com/m/E6WSW38Kn94AAAAC/kbc-great.gif)'

            })
            return true;
        }
        else if (box1.classList.contains('circle') && box2.classList.contains('circle') && box3.classList.contains('circle')) {
            show_winner.style.display = 'flex'
            document.querySelector(".container").style.display = 'none'
            document.querySelectorAll(".player").forEach((item) => {
                item.style.display = "none"
                document.querySelector('.show-winner h5').innerText = 'PLAYER TWO ⭕'
                document.querySelector('.show-winner').style.backgroundImage = 'url(https://media1.tenor.com/m/E6WSW38Kn94AAAAC/kbc-great.gif)'
            })
            return true;
        }


    }
}
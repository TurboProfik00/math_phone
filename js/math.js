
let first = document.querySelector(`#first`);
let second = document.querySelector(`#second`);
let math = document.querySelector(`#math`);
let start = document.querySelector(`#button-start`);
let result = document.querySelector(`#result`);
let answer = document.querySelector(`#answer`);

let first_turn = Math.floor(Math.random() * (101 - 1) + 1)
let second_turn = Math.floor(Math.random() * (101 - 1) + 1)


first.innerHTML = first_turn
second.innerHTML = second_turn

let turn = Math.floor(Math.random() * (3 - 1) + 1)

if(turn == 1) {
    math.innerHTML = "+"
} else if (turn == 2) {
    math.innerHTML = "-"
}

start.addEventListener(`click`, function() {

    let answer_turn = answer.value

    if(turn == 1) {
        let resultat = Number(first_turn) + Number(second_turn)

        console.log(resultat)

        if(resultat == answer_turn) {
            result.innerHTML = "Молодец! Правильно!"
        } else {
            result.innerHTML = "Неверно! Попробуй снова или выбери другой пример..."
        }
    }

    if(turn == 2) {
        let resultat = Number(first_turn) - Number(second_turn)

        console.log(resultat)

        if(resultat == answer_turn) {
            result.innerHTML = "Молодец! Правильно!"
        } else {
            result.innerHTML = "Неверно! Попробуй снова или выбери другой пример..."
        }
    }

})


const inputValue = document.querySelector('.js-input');

let eqn = '';
let valueAfterOperator = '';

const buttonElement = document.querySelectorAll('button');

const arr = Array.from(buttonElement);


arr.forEach((value) => {
    value.addEventListener("click", () => {

        if(value.innerHTML === '=') {
            calculate();
            eqn='';
        }

        else if(value.innerHTML === 'AC') {
            eqn='';
            inputValue.value = eqn;
        }

        else if(value.innerHTML === 'C') {
            eqn = eqn.substring(0, eqn.length-1);
            inputValue.value = eqn;
        }


        //ascii value for operators
        else if(value.innerHTML.charCodeAt(0) >=37 && value.innerHTML.charCodeAt(0) <=47){

            const lastchar = eqn.charAt(eqn.length-1);

            //if last character is number then only display
            if(lastchar.charCodeAt(0)>47 && lastchar.charCodeAt(0)<=57)
            {
                if(value.innerHTML === '%') {
                    eqn = eqn + '/100';

                } else {
                    eqn = eqn + value.innerHTML;   
                }

                inputValue.value = eqn;  
            }

        }

        else {
            eqn = eqn + value.innerHTML;
            inputValue.value = eqn;
        }
})
});


//alternative to eval 
function calculateStr(userInput) {
    return new Function('return ' + userInput)();
}

function calculate() {
    const userInput = inputValue.value;
    inputValue.value = calculateStr(userInput);

}

inputValue.addEventListener("keydown", (event) => {
    if(event.key === 'Enter') {
        calculate();
    }
});




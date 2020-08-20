// Your code goes in here

document.querySelector("#app").innerText = "Tip Calculator";

const amount = document.getElementById('amount');
const people = document.getElementById('people');
const selectService = document.getElementById('service_selection');
const tipAmount = document.getElementById('tip_amount');
const calculateButton = document.getElementById('calculate_button');
const each = document.getElementById('each');
const tipDisplay = document.getElementById('tip_display');

calculateButton.addEventListener('click', calculate);

function calculate () {
    const selectedOption = selectService.options[selectService.selectedIndex].value;

    if ( amount.value === "" || selectedOption === 0 ) {
        alert('You need to fill in all the fields!');
    } else {
        const tip = parseInt(amount.value) + parseInt(((amount.value * parseInt(selectedOption)) / 100));
        console.log(tip);
        tipAmount.innerText = "$ " + (tip / people.value).toFixed(2);
        tipDisplay.style = "display:static";

        if ( parseInt(people.value) === 1 ) {
            each.style = "display:none";
        }
    }
}

window.onload = function () {
    people.value = 1;
    tipDisplay.style = "display:none";
}
const characterRange = document.getElementById
('characterRange')
const characterAmountNumber = document.getElementById
const form = document.getElementById('paswordGeneratorForm')
('characterAmountNumber')

// Creating event listeners for the form inputs//

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount (e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterRange.value = value
}
//Now the slider is connected with the input//


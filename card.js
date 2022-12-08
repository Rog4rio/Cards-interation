// function interation(){
// }

// let inputName = document.querySelector('#txtna');
// let areaname = document.querySelector('.name-img');

// inputName.onchange = handleChange;

// function handleChange(e) {
//     areaname.textContent = `${e.target.value}`;
// }


// const input = document.querySelector('#txtna')
// const log = document.querySelector('.name-img')

// input.addEventListener('input' , updateValue);

// function updateValue(e){
//     log.textContent = e.target.value
// }




const nameInput = document.querySelector('#txtna');

const nameArea = document.querySelector('.name-img');

nameInput.addEventListener('input', updateValueName);

function updateValueName(e) {
  nameArea.textContent = e.target.value;
}

const numberInput = document.querySelector('#txtn');

const numberArea = document.querySelector('.info-img');

numberInput.addEventListener('input', updateValueNumber);

function updateValueNumber(e) {
    numberArea.textContent = e.target.value;
}


const monthInput = document.querySelector('#txtm')

const monthArea = document.querySelector('.date-img')

monthInput.addEventListener('input',updateValueMonth)

function updateValueMonth(e){
    monthArea.textContent = e.target.value;
}


const yearInput = document.querySelector('#txty')

const yearArea = document.querySelector('.date-img2')

yearInput.addEventListener('input',updateValueYear)

function updateValueYear(e){
    yearArea.textContent = e.target.value;
}


const securityInput = document.querySelector('#txtc')

const securityArea = document.querySelector('.num-cv')

securityInput.addEventListener('input',updateValueSecurity)

function updateValueSecurity(e){
    securityArea.textContent = e.target.value;
}

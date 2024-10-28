const heightInput = document.querySelector('.height');
const weightInput = document.querySelector('.weight')

const form = document.querySelector('form');
const calculate = document.querySelector('.calculate');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector(".height").value);
    const weight =parseFloat( document.querySelector(".weight").value);
    // console.log(height, weight);

    const BMI = (weight / (height * height)).toFixed(2);
    const value = document.querySelector(".amount");
    value.innerHTML = BMI;
});
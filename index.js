const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl =  document.getElementById("weight-condition");

function calculateBMI(){
    const heightvalue = document.getElementById("height").value;
    const weightvalue = document.getElementById("weight").value;

    const bmivalue = weightvalue/((heightvalue*heightvalue)/10000);
    bmiInputEl.value = bmivalue;
    if(bmivalue <18.5){
        weightConditionEl.innerText = "Under Weight";
    }
    else if(bmivalue>=18.5 && bmivalue<=24.9){
        weightConditionEl.innerText = "Normal Weight";
    }
    else if(bmivalue>=25 && bmivalue <= 29.5){
        weightConditionEl.innerText = "Over Weight";
    }
    else if(bmivalue >= 30){
        weightConditionEl.innerText = "Obesity";
    }
}

btnEl.addEventListener("click" , calculateBMI);
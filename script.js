const calc=(num) =>{ 
    document.getElementById("answer").value+=num 
} 


const clear=() =>{ 
    document.getElementById("answer").value = "" 
} 


const calculate=() =>{ 
    let num1 = document.getElementById("answer").value 
    let num2 = eval(num1) 
    document.getElementById("answer").value = num2
} 







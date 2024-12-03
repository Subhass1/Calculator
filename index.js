let calScreen = "";
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
       
        if(e.target.innerHTML == '='){
            calScreen = eval(calScreen);
            input.value = calScreen;
        } else if(e.target.innerHTML == 'AC'){
            calScreen = "0";
            input.value = calScreen;
        } 
         else{
            calScreen += e.target.innerHTML;
            input.value = calScreen;
        }

        
    })
})
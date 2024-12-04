// let calScreen = "";
// let buttons = document.querySelectorAll('button');
// let input = document.querySelector('input');

// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) => {
       
//         if(e.target.innerHTML == '='){
//             calScreen = eval(calScreen);
//             input.value = calScreen;
//         } else if(e.target.innerHTML == 'AC'){
//             calScreen = "";
//             input.value = calScreen;
//         } 
//          else{
//             calScreen += e.target.innerHTML;
//             input.value = calScreen;
//         }

        
//     })
// })



let calScreen = "";
let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML.trim(); // Ensure no extra spaces in button text

        if (value === '=') {
            try {
                // Validate and clean up the input before evaluation
                if (/[\d)]+$/.test(calScreen)) { // Ensure the expression ends with a valid character
                    calScreen = eval(calScreen.replace(/\s+/g, '')); // Remove any accidental spaces
                    input.value = calScreen;
                } else {
                    input.value = "Error"; // Handle invalid syntax
                    calScreen = "";
                }
            } catch (error) {
                input.value = "Error"; // Handle evaluation errors
                calScreen = "";
            }
        } else if (value === 'AC') {
            calScreen = "";
            input.value = calScreen;
        } else {
            // Add only valid characters to calScreen
            if (/^[\d+\-*/.%()]+$/.test(value)) {
                calScreen += value;
                input.value = calScreen;
            }
        }
    });
});

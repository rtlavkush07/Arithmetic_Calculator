
let display = document.getElementById('resultBox');
// ham yahan querySelectorAll es liye lga rhe kyuki hame button ka id ya class name nhi pta hai 
let buttons = document.querySelectorAll('button');
// buttons ko array me convert kr rhe hai 
let buttonArray = Array.from(buttons);
let string = '';
// sabhi array var ko alga alag var me store krne ke liye for each use kr rhe hain 
 
buttonArray.forEach(function(btn){

    btn.addEventListener('click',function(event)
    {
     if(event.target.innerHTML == 'DEL')
     {
        string = string.substring(0, string.length-1);
        display.value = string;
     }
     else if(event.target.innerHTML == 'AC'){
        string = '';
        display.value = string;
     }
     else if(event.target.innerHTML == '=')
     {
       string = eval(string);
       display.value = string;

     }
     else
     {
        string += event.target.innerHTML;
     display.value =string;
     }
    })

})
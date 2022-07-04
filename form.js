var form = document.getElementById('form')

var error = []
var success = ""

form.addEventListener('submit', function(e){
    e.preventDefault() //prevent auto submission of the form
    // alert("Form is empty");
    var fname = document.getElementById('fname')
    var lname = document.getElementById('lname')

    if(fname.value == "" || lname.value == ""){
        error.push("Please enter your username")
    }

   alert("Form is submitted");

    var message = document.getElementById('message')
    message.innerText = error;
})

























// function validate(){
//     var first = document.getElementById("fname");
//     var last = document.getElementById("lname");
//     var country = document.getElementById("country");
//     var submit = document.getElementById("submit");

//     if(first.value == "" || last.value == "")
//     {
//         alert("Please enter your name");
//         return false;
//     }
//     else{
//      true;
//     }

//     if(submit.value == ""){
//         onclick = console.error();
//     }
//     else{
//         true;
//     }
// }


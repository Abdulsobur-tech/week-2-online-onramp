document.addEventListener('DOMContentLoaded', function (){
document.querySelector('#submit').onclick = function (){
     let email= document.querySelector('#email').value
     let number=  document.querySelector('#number').value
    let name = document.querySelector('#name').value;
    let message = document.querySelector('#message').value;

    if(number ==="" ||name ==="" ||email ==="" || message === ""){
        alert('All input boxes must be filled')
    }


    if(number !== number.match(/[0-9]+/g)){
        alert('Phone number field must only contain numbers')
    }


    if(message.length >100){
        alert('Message field cannot have more than 100 characters')
    }


  alert(`Hello ${name}`)
}

document.querySelector('#cancel').onclick = function (){
 document.querySelector('#name').value = "";
 document.querySelector('#email').value = "";
 document.querySelector('#number').value = "";
 document.querySelector('#message').value = "";
}


})
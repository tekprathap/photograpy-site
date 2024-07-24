var menu=document.querySelector('.menu')
var menulist=document.querySelector('.ul-lst');

menu.addEventListener('click',()=>{
    menulist.classList.toggle ('menuactie')
})

// form alidation

var form=document.querySelector('#form');
var firstname=document.querySelector('#firstname');
var lastname=document.querySelector('#lastname');
var email=document.querySelector('#email');
var Phone=document.querySelector('#phonenum');
var subject=document.querySelector('#subject');
var message=document.querySelector('#message');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validateform()
})

function validateform() {
    const firstnameval=firstname.value.trim()
    const lastnameval=lastname.value.trim()
    const emailval=email.value.trim()
    const Phoneval=phonenum.value.trim()
    const subjectval=subject.value.trim()
    const messageval=message.value.trim()
    if (firstnameval==="") {
        seterror(firstname,"enter the firstname")
    }
    else{
        setsuccess(firstname)
    }
    // lastname validation
    if (lastnameval==="") {
        seterror(lastname,"enter the last name")
    }
    else{
        setsuccess(lastname)
    }
    if (emailval==="") {
        seterror(email,"enter the email")
    } else {
        setsuccess(email)
    }
    if (Phoneval==="") {
        seterror(phonenum,"enter the phone number")
    } else {
        setsuccess(Phone)       
    }
    if (subjectval==="") {
        seterror(subject,"enter the subject")
    } else {
        setsuccess(subject)     
    } 
    if (messageval==="") {
        seterror(message,"enter the message")
    } else {
        setsuccess(message)
    }  
}
// set error

function seterror(element,message ) {
    var groupelement=element.parentElement;
    var errorcontrol=groupelement.querySelector('.error')
    errorcontrol.innerText=message;
    groupelement.classList.add('error')
    groupelement.classList.remove('success')
}
function setsuccess(element,) {
    var groupelement=element.parentElement;
    var errorcontrol=groupelement.querySelector('.error')
    errorcontrol.innerText="";
    groupelement.classList.add('success')
    groupelement.classList.remove('error')
}   

// viwe image   

var model=document.createElement('div');
model.id="model"    
document.body.append(model)

var images=document.querySelectorAll('.cardimg')

images.forEach(image => {
    image.addEventListener('click',()=>{
    var img=document.createElement('img')
    img.id="img"
    img.src=image.src
    while (model.firstChild) {
            model.removeChild(model.firstChild)
        }
    model.append(img)
    
        model.classList.add('modelactive')
    })
});

model.addEventListener('click',()=>{
    model.classList.remove('modelactive')
})
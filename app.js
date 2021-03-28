function animatedForm(){
    const arrows = document.querySelectorAll(".fa-angle-double-right");

    arrows.forEach(arrow =>{
        arrow.addEventListener('click', () =>{
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if(input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'email' && validateEmail(input)){
                nextSlide(parent, nextForm);
            }else if(input.type === 'password' && validateUser(input) ){
                nextSlide(parent, nextForm);
            }else{
                parent.style.animation = 'shake 0.5s ease'
            }

            //put animation to zero
            parent.addEventListener('animationend', () =>{
                parent.style.animation = "";
            })
        })
    })

}

function validateUser(user){
    if(user.value.length  < 6){
        error('#db6161')
    }
    else{
        error('#d7d9b2')
        return true;
    }
}
function validateEmail(email){
    const validation = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(validation.test(email.value)){
        error("#d7d9b2")
        return true;
    }
    else{
        
        error("#db6161")
    }
}
function nextSlide(parent, nextForm){
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");

}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();

ScrollReveal({ 
    reset: true ,
    distance:'80px' ,
    duration: 2000 ,
    delay: 200 ,
});

ScrollReveal().reveal('#home-row', { origin: top });
ScrollReveal().reveal('#me-image', { origin: top });

function myFunction(form) {
    
    // validation code here ...


  
    
        return confirm('Do you really want to submit the form?');
    
}

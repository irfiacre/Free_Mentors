

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector ('.nav-links');
    const navLinks = document.querySelectorAll('nav-links li');
    
    
    burger.addEventListener('click', ()=>{

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
             link.style.animation = '';
            }else{
             link.style.animation = ` navLinkFade 0.5s ease forwards ${index / 5 + 1.2 }s` ; 
            }
         }); 
    });


}

navSlide();


//parallax

const parallax = document.getElementById('parallax');

window.addEventListener("scroll", ()=>
{
    let offset = window.pageYOffset;

    parallax.style.backgroundPositionY = offset * 0.8 + "px";

})


//POPUP Js

var modal = document.getElementById("myModal");
var btn = document.getElementById("sign_in");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//sign in

const validateUser = (form) => {

  if (form.email.value === 'admin@freementors.com' || form.password.value === 'admin@123') {
    window.open('UI/html/admin.html', '_self');
  }
  if (form.email.value==='mento1@freementors.com'  || form.password.value === '12345') {

    window.open('UI/html/MentorProfile.html', '_self');
  }
  else {
    window.open('UI/html/ViewMentors.html');
  }

};

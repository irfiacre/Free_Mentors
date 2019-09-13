
const parallax = document.getElementById('parallax');

window.addEventListener("scroll", ()=>
{
    let offset = window.pageYOffset;

    parallax.style.backgroundPositionY = offset * 0.8 + "px";

})

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

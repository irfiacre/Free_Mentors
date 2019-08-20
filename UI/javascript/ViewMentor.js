	     //navigation                             
	
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
	

	// modal

	var modal = document.getElementById("myModal");
	var btn = document.getElementById("addmentor");


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
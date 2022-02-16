"use strict"

const btnHeaderNav = document.querySelector('.header__nav-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarSocial = document.querySelectorAll('.sidebar__social');
const navBtnLine = document.querySelectorAll('.header__nav-btn-line');
const sidebarNavLink = document.querySelectorAll('.sidebar__nav-link');


/* __________Smooth Scroll__________ */
function smoothScroll(e) {
	e.preventDefault();
	const href = this.getAttribute("href");
	console.log(href);
	const offsetTop = document.querySelector(href).offsetTop;
  
	scroll({
	  top: offsetTop,
	  behavior: "smooth"
	});
}


/* __________Changing Sidemenu Btn__________ */
function btnSwitcher() {
	if (sidebar.className == "sidebar hidden") {
		sidebar.className = "sidebar visible";
		navBtnLine.forEach( (eachline) => {
			eachline.className = 'header__nav-btn-line active';
		});      
	} 
	else {
		sidebar.className = 'sidebar hidden';
		navBtnLine.forEach( (eachline) => {
			eachline.className = 'header__nav-btn-line';
		});  
	}     
}


/* __________hBtn in header________ */
btnHeaderNav.addEventListener('click', () => {
	btnSwitcher();
});

/* _________Navlinks in sidebar_________ */
sidebarNavLink.forEach( (i) => {	
	i.addEventListener('click', btnSwitcher);
	i.addEventListener('click', smoothScroll);
});

/* _________Social links in header________ */
sidebarSocial.forEach( (i) => {
	const link = i.parentNode;
	const url = link.getAttribute('href');
	link.addEventListener('click', (e) => {
		e.preventDefault();
		btnSwitcher();
		window.open(url, '_blank');
		
	});
});


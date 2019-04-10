// hover dropdown
if (window.screen.availWidth > 992 ){
	$(document).ready(function () {
	    $('.dropdown-toggle').mouseover(function() {
	    	$('.dropdown-menu').show();
	  	});
		$('.dropdown-toggle').mouseout(function() {
			t = setTimeout(function() {
				$('.dropdown-menu').hide();
			}, 50);

			$('.dropdown-menu').on('mouseenter', function() {
				$('.dropdown-menu').show();
				clearTimeout(t);
			}).on('mouseleave', function() {
				$('.dropdown-menu').hide();
			});
		});
	});
}
// toggler
var navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
var navbarTogglerIcon = document.getElementsByClassName("navbar-toggler-icon")[0];
var mrAuto = document.getElementsByClassName("mr-auto")[0];
var info = document.getElementsByClassName("info")[0];
var showing = document.getElementsByClassName("showing")[0];
var carouselCaption1 = document.getElementsByClassName("carousel-caption")[0];
var carouselCaption2 = document.getElementsByClassName("carousel-caption")[1];
var carouselCaption3 = document.getElementsByClassName("carousel-caption")[2];

mrAuto.style.left = "-120%";

	navbarToggler.addEventListener("click", function(){
		if( mrAuto.style.left ==  "-120%" ){
			navbarTogglerIcon.style.backgroundImage = "url('css/images/arrow-right-menu.png')";
			navbarTogglerIcon.style.width = "33px";
			carouselCaption1.style.bottom = "46%";
			carouselCaption2.style.bottom = "46%";
			carouselCaption3.style.bottom = "46%";
			mrAuto.style.left =  "0";
			showing.style.display = "none";
			info.style.transform = "rotate(0) scale(1)";
			navbarToggler.style.transform = "rotate(180deg) scale(0.8)";
		}else{
			navbarTogglerIcon.style.backgroundImage = "url('css/images/hamburger.png')";
			mrAuto.style.left =  "-120%";
			navbarToggler.style.transform = "rotate(0) scale(1)";
			navbarTogglerIcon.style.width = "30px";
		};
	});
// pop up
$(function () {
  $('[data-toggle="popover"]').popover();
});
// info button
info.addEventListener("click", function(){
	if ( showing.style.display == "block" ){
		info.style.transform = "rotate(0) scale(1)";
		showing.style.display = "none";
		carouselCaption1.style.bottom = "46%";
		carouselCaption2.style.bottom = "46%";
		carouselCaption3.style.bottom = "46%";
	}else{
		info.style.transform = "rotate(180deg) scale(0.8)";
		showing.style.display = "block";
		mrAuto.style.left =  "-120%";
		carouselCaption1.style.bottom = "35%";
		carouselCaption2.style.bottom = "35%";
		carouselCaption3.style.bottom = "35%";
		navbarToggler.style.transform = "rotate(0) scale(1)";
		navbarTogglerIcon.style.backgroundImage = "url('css/images/hamburger.png')";
	}
	
});
// change container to container-fluid
var logoNav = document.getElementsByClassName('logoNav')[0];
var changeToFluid = document.getElementsByClassName('changeToFluid')[0];
if ( document.body.clientWidth < 992 ){
// 	changeToFluid.classList.add("container-fluid");
	changeToFluid.classList.remove("container");
	logoNav.classList.add("container-fluid");
	logoNav.classList.remove("container");
// 	console.log(logoNav);
// 	console.log(changeToFluid);
}

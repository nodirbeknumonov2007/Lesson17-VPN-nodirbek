$('.owl-carousel').owlCarousel({
  loop:true,
  margin:25,
  dots:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true,
          loop:true
      },
      600:{
          items:2,
          nav:true,
          loop:true
      },
      1000:{
          items:2,
          nav:true,
          loop:true
      }
  }
})



function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }
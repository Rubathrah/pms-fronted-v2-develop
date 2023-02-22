document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");
  var submenu = document.querySelectorAll(".nav-item .submenu");
  var sidebarContainer = document.querySelector(".sidebar-scroll-container");
  var path = window.location.href;
	let sidebar = document.querySelector(".sidebar");
	var closeBtn = document.querySelector(".sidebar-hamburger");
                  
  function removeClass(){
    submenu.forEach(submenus => {
      submenus.classList.remove('open');
    })
    navLinks.forEach(navLink =>{
      navLink.classList.remove('active');
    })
  }

  function navActivePath(){
    var path = window.location.href;

     $('.nav-link').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
       if ($(this).parents().hasClass('has-submenu')){
        $(this).parent().parent().prev().addClass('active');
       }
      }
     });
  }

  function removeActiveClass(){
    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    })
  }

  closeBtn.addEventListener("click", () =>{
    removeClass();
    removeActiveClass();
    navActivePath();

    submenu.forEach(submenus => {
      submenus.classList.remove('show');
    })
  })
  
  document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {
    element.addEventListener('click', function (e) {
      
      var nextEl = element.nextElementSibling; /*submenu*/
      var parentEl = element.parentElement; /*navitem*/
      var navItem = parentEl.getBoundingClientRect();

          if(sidebar.classList.contains('hide')){
            if(nextEl){
              e.preventDefault();

                if(nextEl.classList.contains('open')){
                  nextEl.classList.remove('open');
                  nextEl.previousElementSibling.classList.remove('active');
                } else{
                  removeClass();
                  nextEl.classList.add('open');
                  nextEl.previousElementSibling.classList.add('active');
                }

                overWritePos();

                sidebarContainer.onscroll = function(e){
                  if(nextEl.classList.contains('open')){
                    nextEl.classList.remove('open');
                    nextEl.previousElementSibling.classList.remove('active');
                  }
                }

                function overWritePos(){
                  if (nextEl.getBoundingClientRect().bottom <= window.innerHeight + 100){
                    nextEl.style.top = navItem.top + 'px';
                  } else{
                    nextEl.style.top = '';
                    nextEl.style.bottom = 0 + 'px';
                  }
                }
                
            }
          }
          
          else{
            if (nextEl) {
              e.preventDefault();

              let mycollapse = new bootstrap.Collapse(nextEl);

                if (nextEl.classList.contains('show')) {
                  mycollapse.hide();
                } else {
                  mycollapse.show();
                  var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                  if (opened_submenu) {
                    new bootstrap.Collapse(opened_submenu);
                  }
                }

                if (!nextEl.previousElementSibling.classList.contains('active')){
                  removeActiveClass();
                  nextEl.previousElementSibling.classList.add('active');

                  if(parentEl.classList.contains('has-submenu')){
                    if(nextEl.getBoundingClientRect().top >= 0 && nextEl.getBoundingClientRect().bottom <= (window.innerHeight - 150)){
                      console.log("in viewport");
                    } else{
                      // nextEl.scrollIntoView({ 
                      //   behavior: "smooth",
                      //   block:"start",
                      //   inline: "nearest" //https://stackoverflow.com/questions/48634459/scrollintoview-block-vs-inline/48635751#48635751
                      // });
                      // sidebarContainer.scrollTop = nextEl.scrollHeight;
                      // console.log(nextEl.scrollHeight);
                      // console.log(sidebarContainer.scrollHeight);
                    }
                  }

                } else {
                  nextEl.previousElementSibling.classList.remove('active');
                }
            }
          }

          navActivePath();
          
    });
  })
});
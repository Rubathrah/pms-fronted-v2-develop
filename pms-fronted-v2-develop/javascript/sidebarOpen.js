document.addEventListener("DOMContentLoaded", function () {
	
	let sidebar = document.querySelector(".sidebar");
	let closeBtn = document.querySelector(".sidebar-hamburger");
	var rightContainer = document.querySelector(".rightContainer"); 


	closeBtn.addEventListener("click", ()=>{
		sidebar.classList.toggle("hide");
		menuBtnChange();//calling the function(optional)
	});

	// following are the code to change sidebar button(optional)
	function menuBtnChange() {
	if(sidebar.classList.contains("hide")){
		closeBtn.classList.replace("fa-chevron-double-left", "fa-chevron-double-right");//replacing the icon class
		rightContainer.classList.add('resize');
	}else {
		closeBtn.classList.replace("fa-chevron-double-right","fa-chevron-double-left");//replacing the icon class
		rightContainer.classList.remove('resize');
	}
  }
});
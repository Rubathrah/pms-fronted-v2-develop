document.addEventListener("DOMContentLoaded", function () {
var notifTabs = document.querySelectorAll(".notifTab");

	notifTabs.forEach(notifTab => {
		notifTab.addEventListener('click', () => {
			removeActiveClass()
			notifTab.classList.add('active')
		})
	})

	function removeActiveClass(){
		notifTabs.forEach(notifTab => {
			notifTab.classList.remove('active')
		})
	}
		
})
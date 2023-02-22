document.addEventListener("DOMContentLoaded", function () {
var profileContainers = document.querySelectorAll(".profileContainer");

		profileContainers.forEach(profileContainer => {
			profileContainer.addEventListener('click', () => {
				removeActiveClass();
				profileContainer.classList.add('active');
			})
		})

		function removeActiveClass(){
			profileContainers.forEach(profileContainer => {
				profileContainer.classList.remove('active');
			})
		}
})
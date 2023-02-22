document.addEventListener("DOMContentLoaded", function () {
var noteContainer = document.querySelectorAll(".notesContainer");

		noteContainer.forEach(notesContainer => {
			notesContainer.addEventListener('click', () => {
				removeActiveClass()
				notesContainer.classList.add('active')
			})
		})

		function removeActiveClass(){
			noteContainer.forEach(notesContainer => {
				notesContainer.classList.remove('active')
			})
		}
})
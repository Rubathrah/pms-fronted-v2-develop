document.addEventListener("DOMContentLoaded", function () {
    var emergencyLinks = document.querySelectorAll(".emergency");

    emergencyLinks.forEach(emergency => {
        emergency.addEventListener('click', () => {
            removeActiveClass()
            emergency.classList.add('active')
        })
    })

    function removeActiveClass(){
        emergencyLinks.forEach(emergency => {
            emergency.classList.remove('active')
        })
    }
})
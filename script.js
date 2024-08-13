let slides = document.querySelectorAll(".project-slide")
slides.forEach(slide => {
    slide.style.transition = "1s"
})
let projects = document.querySelector(".selector-buttons")

for(let i = 0; i < slides.length; i++){
    navButton = document.createElement("button")
    navButton.classList.add("nav-button")

    navButton.textContent = "-"

    navButton.id = "select_" + slides[i].id
    projects.appendChild(navButton)
}



let navButtons = document.querySelectorAll(".nav-button")
navButtons[0].style.color = "grey"
navButtons[0].style.backgroundColor = "grey"
prevButton = navButtons[0]
navButtons.forEach(navButton => {
    navButton.onclick = () => {
        // Get the corresponding button's slide's ID
        slideId = navButton.id.replace("select_", "")
        currSlide = document.querySelector("#" + slideId)
        // Toggle to selected

        prevButton.style = "background-color: lightgrey; color: lightgrey"
        prevButton.style.transition = '0.5s'
        navButton.style = "background-color: grey; color: grey"
        navButton.style.transition = '0.5s'

        
        if(currSlide.classList.contains("hidden")){
            currSlide.classList.remove("hidden")
            let prevSelected = document.querySelector(".selected")
            prevSelected.classList.remove("selected")
            prevSelected.classList.add("hidden")
            currSlide.classList.add("selected")
        }
        prevButton = navButton
        
        
    }
});
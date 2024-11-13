
let slides = document.querySelectorAll(".project-slide")
let allSlides = document.querySelector(".projects")
slides.forEach(slide => {
    slide.style.transition = "1s"
})
// Append slide label to each slide


let projects = document.querySelector(".selector-buttons")

// Create slide nav buttons and associate them with their corresponding slide in a slideObject object.
// slides are added to an array
slideObjects = []
for(let i = 0; i < slides.length; i++){

    navButton = document.createElement("button")
    navButton.classList.add("nav-button")

    navButton.textContent = "-"

    navButton.id = "select_" + slides[i].id
    projects.appendChild(navButton)

    const currentSlide = {
        slide: slides[i], 
        button: navButton, 
        idx: i,
    }
    slideObjects.push(currentSlide)
}

slideObjects[0].button.classList.add("selected-nav-button")



function selectSlide(target) {
    let prev = slideObjects.find(o => !o.slide.classList.contains("hidden"))
    target.button.classList.add("selected-nav-button")
    target.slide.classList.remove("hidden")

    prev.button.classList.remove("selected-nav-button")
    prev.slide.classList.add("hidden")
}

slideObjects.forEach(slideObject => {
    slideObject.button.onclick = () => {
        selectSlide(slideObject)
    }
})

let navArrows = document.querySelectorAll(".nav-arrow")
navArrows.forEach(arrow => {
    arrow.onclick = () => {
        let curr = slideObjects.find(o => !o.slide.classList.contains("hidden"))
        if(arrow.classList.contains("left")){
            targetIdx = curr.idx - 1
            if (targetIdx < 0) targetIdx = slideObjects.length-1
        }
        else {
            targetIdx = curr.idx + 1
            if (targetIdx > slideObjects.length-1) targetIdx = 0

        }
        target = slideObjects[targetIdx]
        selectSlide(target)
        
    }
})



const hamburger = document.querySelector(".hamburger")
hamburger.onclick = () => {
    const headerlinks = document.querySelector(".header-links")
    if(headerlinks.style.display == "flex"){
        headerlinks.style.display = "none"
    }
    else{
        headerlinks.style.display = "flex"
    }
}


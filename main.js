let about = document.querySelector("div#about")
about.addEventListener("mouseenter", expand)
about.addEventListener("mouseleave", reduce)


function expand(){
    about.style.height = "325px"
    about.style.width = "1300px"
    about.style.leftwidth = "1270px"
    about.style.lineheight = "325px"
    console.log("entrou")
}
function reduce(){
    about.style.height = "300px"
    about.style.width = "1275px"
    about.style.lineheight = "300px"
    about.style.padding = "0px"
}


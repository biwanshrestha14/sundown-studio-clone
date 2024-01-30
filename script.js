const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
//block vitra xirda dekhni ani niklinin bela hatni code
var c = document.querySelector(".elem1")
c.addEventListener("mouseenter",function(){
    fixed.style.display = "block"    
})
c.addEventListener("mouseleave",function(){
    fixed.style.display = "none"    
})
//ekaichoti sabai select garni code
var fixed = document.querySelector(".fixedimage")
var elems = document.querySelectorAll(".container")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
            var image = e.getAttribute("data-image")
            // console.log(image)
            fixed.style.backgroundImage = `url(${image})`
    })
})

//single photo lai select garni code
// var first = document.querySelector("#first")
// first.addEventListener("mouseenter",function(){
// var image = first.getAttribute("data-image")
// fixed.style.backgroundImage = `url(${image})`
// })



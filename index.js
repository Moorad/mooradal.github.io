window.addEventListener("scroll",reload())

function reload() {
    window.requestAnimationFrame(reload)
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop >= window.innerHeight) {
        document.getElementById("Nav").style.background = "white"
        document.getElementById("Nav").style.boxShadow = "0 0 20px rgba(0,0,0,0.8)"
    } else if (scrollTop < window.innerHeight) {
        document.getElementById("Nav").style.background = "#00000000"
        document.getElementById("Nav").style.boxShadow = "0 0 0"
    }
}

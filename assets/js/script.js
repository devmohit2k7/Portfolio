document.querySelector(".mobile-menu-open").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".main-nav").classList.add("open");
    document.querySelector(".mobile-menu-close").classList.add("show")
});

document.querySelector(".mobile-menu-close").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".main-nav").classList.remove("open");
    this.classList.remove("show");
});
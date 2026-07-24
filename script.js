// Menu muda de cor ao rolar a página
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#081b33";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";
    } else {
        header.style.background = "rgba(10,20,35,.92)";
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.15)";
    }
});

// Rolagem suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const destino = document.querySelector(this.getAttribute("href"));

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });
});
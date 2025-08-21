let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function mostrarSlide(n) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === n) ? "block" : "none";
        dots[i].classList.toggle("active", i === n);
    });
    slideIndex = n;
}

// Botón siguiente
nextBtn.addEventListener("click", () => {
    let next = (slideIndex + 1) % slides.length;
    mostrarSlide(next);
});

// Botón anterior
prevBtn.addEventListener("click", () => {
    let prev = (slideIndex - 1 + slides.length) % slides.length;
    mostrarSlide(prev);
});

// Indicadores (bolitas)
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        mostrarSlide(i);
    });
});

// Mostrar el primero al cargar
mostrarSlide(slideIndex);



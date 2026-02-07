document.addEventListener("DOMContentLoaded", () => {
    try { sessionStorage.removeItem("toro_pedido"); } catch (e) {}

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const advanceSlide = () => {
        if (!slides.length) return;
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    };
    if (slides.length > 1) {
        setInterval(advanceSlide, 5000);
    }

    const igConfig = window.APP_CONFIG?.instagram || {};
    const igLink = document.getElementById("ig-link");
    const igName = document.getElementById("ig-name");
    if (igLink) igLink.href = igConfig.url || "#";
    if (igName) igName.textContent = igConfig.name ? `@${igConfig.name}` : "@Instagram";

    const wspLink = document.getElementById("wsp-link");
    const wspNumber = window.APP_CONFIG?.telefonoNegocio || "";
    if (wspLink) wspLink.href = wspNumber ? `https://wa.me/${wspNumber}` : "#";
    if (wspLink) wspLink.setAttribute("aria-label", "Escribinos por WhatsApp");

    const pedidosYaLink = document.getElementById("pedidosya-link");
    if (pedidosYaLink) pedidosYaLink.href = window.APP_CONFIG?.plataformas?.pedidosYa || "#";
    const rappiLink = document.getElementById("rappi-link");
    if (rappiLink) rappiLink.href = window.APP_CONFIG?.plataformas?.rappi || "#";
});

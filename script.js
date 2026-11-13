const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDarkMode));
    themeToggle.setAttribute(
        "aria-label",
        `Switch to ${isDarkMode ? "light" : "dark"} mode`
    );
    themeToggle.textContent = `Switch to ${isDarkMode ? "light" : "dark"} mode`;
});

document.addEventListener("DOMContentLoaded", () => {
    if (
        typeof ScrollReveal === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        return;
    }

    ScrollReveal().reveal(".reveal", {
        distance: "30px",
        duration: 800,
        origin: "bottom",
        opacity: 0,
        easing: "ease-in-out",
        interval: 150,
        reset: false
    });
});
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
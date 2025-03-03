document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    let mode = document.body.classList.contains('dark-mode') ? "🌞 Light Mode" : "🌙 Dark Mode";
    this.textContent = mode;
});


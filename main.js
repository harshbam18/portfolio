const text = document.querySelector(".Second_dynamic");

const texts = [
    "Web Developer",
    "ML Engineer",
    "UI Designer",
    "Programmer"
];

const typingDuration = 4000; // 4 seconds for typing animation

const Load = () => {
    texts.forEach((textContent, index) => {
        setTimeout(() => {
            text.textContent = textContent;
            text.style.animation = "none"; // Reset animation
            void text.offsetWidth; // Trigger reflow
            text.style.animation = `typing ${typingDuration / 1000}s steps(30, end) 1`; // Apply animation again
        }, typingDuration * index);
    });

    // Set a timeout to call Load again after the last text animation
    setTimeout(Load, typingDuration * texts.length);
}

Load();


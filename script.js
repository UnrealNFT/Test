// ====== MONUMENTS AU HASARD ======
const monuments = [
    { nom: "Tour Eiffel", emoji: "🗼" },
    { nom: "Louvre", emoji: "🖼️" },
    { nom: "Notre-Dame", emoji: "⛪" },
    { nom: "Arc de Triomphe", emoji: "🏛️" },
    { nom: "Sacré-Cœur", emoji: "⛪" },
    { nom: "Panthéon", emoji: "🏛️" }
];

const display = document.getElementById("display-monument");
const btn = document.getElementById("btn-random");

btn.addEventListener("click", () => {
    const random = monuments[Math.floor(Math.random() * monuments.length)];
    display.classList.remove("pulse");
    // Force le redémarrage de l'animation
    void display.offsetWidth;
    display.textContent = `${random.emoji} ${random.nom}`;
    display.classList.add("pulse");
});

// ====== RÉVÉLATION AU SCROLL ======
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

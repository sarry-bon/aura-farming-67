let aura = Number(localStorage.getItem("aura67")) || 0;

const people = [
    ["Sara Marani", "Sara — principessa / nobildonna • Marani — cognome italiano", 900],
    ["Daniel Isaia Cavallanti", "Daniel — Dio è il mio giudice • Isaia — Dio è salvezza • Cavallanti — legato ai cavalli", 1800],
    ["Sofia Borgo", "Sofia — sapienza • Borgo — abitante/proveniente da un borgo", 700],
    ["Elia Vitali", "Elia — il mio Dio è YHWH • Vitali — legato a vitale / vita", 1400],
    ["Amelia Cirillo", "Amelia — operosa / laboriosa • Cirillo — signorile", 650],
    ["Francesco Chioda", "Francesco — francese / libero • Chioda — probabilmente legato a chiodo", 500],
    ["Yassine Laaylaje", "Yassine — origine araba • Laaylaje — cognome maghrebino", 1000],
    ["Constantin Malai", "Constantin — costante / saldo • Malai — origine non certa", 750],
    ["Daniele Centro Rete", "Daniele — Dio è il mio giudice • Centro Rete — denominazione/soprannome", 1200],
    ["Adi Poci", "Adi — gioiello / ornamento • Poci — origine non certa", 1000],
    ["Otello Zilli", "Otello — tradizione italiana/letteraria • Zilli — cognome italiano", 1300]
];

function update() {

    document.getElementById("totalAura").textContent = aura;
    document.getElementById("statAura").textContent = aura;

    const level = Math.floor(aura / 500) + 1;

    document.getElementById("level").textContent = level;
    document.getElementById("power").textContent = 67 + level * 10;

    localStorage.setItem("aura67", aura);
}

function popup(text) {

    const p = document.getElementById("popup");

    p.textContent = text;

    p.classList.remove("popup");

    void p.offsetWidth;

    p.classList.add("popup");
}

function farmAura(amount) {

    aura += amount;

    update();

    popup("+" + amount + " AURA ✨");
}

document
    .getElementById("farmButton")
    .addEventListener("click", () => {
        farmAura(67);
    });

document
    .querySelectorAll(".farm")
    .forEach(button => {

        button.addEventListener("click", () => {

            farmAura(
                Number(button.dataset.aura)
            );

        });

    });

function renderNames() {

    const container =
        document.getElementById("names");

    people.forEach(person => {

        const card =
            document.createElement("div");

        card.className = "name-card";

        card.innerHTML = `
            <div class="name">
                ${person[0]}
            </div>

            <div class="score">
                +${person[2]} ✨
            </div>

            <div class="meaning">
                ${person[1]}
            </div>
        `;

        container.appendChild(card);

    });
}

function renderRanking() {

    const container =
        document.getElementById("ranking");

    const sorted =
        [...people].sort(
            (a, b) => b[2] - a[2]
        );

    sorted.forEach((person, index) => {

        const row =
            document.createElement("div");

        row.className = "rank";

        row.innerHTML = `
            <div class="rank-number">
                #${index + 1}
            </div>

            <div class="rank-name">
                ${person[0]}
            </div>

            <div class="rank-score">
                ${person[2]} ✨
            </div>
        `;

        container.appendChild(row);

    });
}

renderNames();
renderRanking();
update();
const people = [

    {
        name: "SARA MARANI",
        aura: 900,
        emoji: "👑⚡💅🏻🗿",
        lore: `SARA = "principessa / nobildonna" 👑

Sara non ha scelto l'aura.

L'AURA HA SCELTO SARA.

👑 PRINCESS AURA
🧠 BRAIN: 67%
🗿 GOOBER: MAXIMUM
🔥 DRIP: QUESTIONABLE
🐐 GOAT STATUS: CONFIRMED

MARANI entra nel sistema e improvvisamente
il server inizia a fare rumori strani.

AURA PASSIVA: +900

Se Sara dice "67":
+67 AURA

Se Sara dice "SUPER":
il sito vibra.

Se Sara dice "GOOBER":
il database si arrende.`

    },

    {
        name: "DANIEL ISAIA CAVALLANTI",
        aura: 1800,
        emoji: "🐎⚡🗿👁️",
        lore: `DANIEL = "Dio è il mio giudice" ⚖️

ISAIA = "YHWH è salvezza" ✡️

CAVALLANTI = 🐎

TRE NOMI.

TRE.

Il personaggio non entra nella stanza.

SPAWNA.

⚖️ JUDGE AURA
✡️ ISAIA ENERGY
🐎 HORSE DETECTED

Quando appare un cavallo:
+1000 AURA.

Quando Daniel vede un cavallo:
+1000 AURA.

Quando Daniel È il cavallo:

🚨 67 INCIDENT 🚨

GOOBER RATING: 97/67`

    },

    {
        name: "SOFIA BORGO",
        aura: 700,
        emoji: "🧠🏘️✨💀",
        lore: `SOFIA = "sapienza" 🧠

BORGO = borgo / abitante del borgo 🏘️

🧠 + 🏘️

=

VILLAGE KNOWLEDGE.

ATTENZIONE.

Sofia potrebbe sapere qualcosa
che NOI non sappiamo.

Non fare domande.

Non guardare direttamente il Borgo.

BRAIN POWER: 67/67
VILLAGE POWER: 700
GOOBER POWER: ????

AURA: 700`

    },

    {
        name: "ELIA VITALI",
        aura: 1400,
        emoji: "⚡🔥👁️🗿",
        lore: `ELIA = "il mio Dio è YHWH" ✡️

VITALI = collegato a vitale / vita.

Questa combinazione è sospetta.

ENERGY: 9999
VITALITY: 67/67
AURA: 1400
NORMALITY: 0

Elia non cammina.

ELIA PRODUCE MOVIMENTO.

Ogni passo:
+67 AURA

Ogni sguardo:
+13 AURA

Ogni volta che qualcuno dice "bro":

+1 GOOBER.`

    },

    {
        name: "AMELIA CIRILLO",
        aura: 650,
        emoji: "🌸⚡🐸💎",
        lore: `AMELIA = tradizionalmente associata a
"operosa / laboriosa".

Quindi:

AMELIA È UNA FARMER.

🌾 FARMING
🌾 FARMING
🌾 FARMING

Non aspetta l'aura.

LA COLTIVA.

CIRILLO aggiunge misteriosamente
+12 punti.

Nessuno sa perché.

Nemmeno il database.

GOOBER LEVEL: 650.`

    },

    {
        name: "FRANCESCO CHIODA",
        aura: 500,
        emoji: "🔨🗿⚡💀",
        lore: `FRANCESCO = "francese / uomo libero"
nella tradizione del nome.

CHIODA richiama:

🔨 CHIODO.

Quindi abbiamo:

UOMO LIBERO
+
CHIODO

=

🔨 FREE NAIL TECHNOLOGY 🔨

Se appare un martello:

+67 AURA

Se appare un chiodo:

+67 AURA

Se appaiono entrambi:

ABSOLUTE CINEMA.

AURA: 500`

    },

    {
        name: "YASSINE LAAYLAJE",
        aura: 1000,
        emoji: "🌙⚡🗿🔥",
        lore: `YASSINE = nome di origine araba 🌙

LAAYLAJE = cognome di area maghrebina,
origine precisa non certa.

1000 AURA.

Numero tondo.

Nessuna spiegazione.

È semplicemente SUCCESSO.

🌙 MYSTERY ENERGY
🔥 FIRE AURA
🗿 GOOBER CERTIFIED

Quando Yassine entra:

il server:

"oh no"

AURA: 1000`

    },

    {
        name: "CONSTANTIN MALAI",
        aura: 750,
        emoji: "🏛️🗿📈⚡",
        lore: `CONSTANTIN = "costante / saldo".

Questa è la vera strategia.

Non serve correre.

Non serve saltare.

Non serve capire.

Basta:

+1 AURA
+1 AURA
+1 AURA
+1 AURA

750 volte.

CONSTANTIN È ANCORA LÌ.

🗿

CONSISTENCY BUILD: MAX.

AURA: 750.`

    },

    {
        name: "DANIELE CENTRO RETE",
        aura: 1200,
        emoji: "🖥️📡⚡🗿",
        lore: `DANIELE = "Dio è il mio giudice".

CENTRO RETE =

NON È UN COGNOME.

È UNA FUNZIONE DEL SISTEMA. 📡

📡 SIGNAL: 67%
🖥️ SERVER: ALIVE
💀 PING: QUESTIONABLE
🗿 NETWORK AURA: 1200

Se perde la connessione:

-67 AURA

Se torna online:

+670 AURA

Se il Wi-Fi funziona al primo tentativo:

LEGENDARY EVENT.`

    },

    {
        name: "ADI POCI",
        aura: 1000,
        emoji: "💎✨🗿⚡",
        lore: `ADI = "gioiello / ornamento" 💎

Quindi:

AURA IN FORMA CRISTALLIZZATA.

Puro.

Compatto.

1000 AURA.

POCI = origine non certa.

Ma il database ha deciso:

💎 LEGENDARY
💎 RARE
💎 GOATED

Rarità:

████████████████████

1000/1000`

    },

    {
        name: "OTELLO ZILLI",
        aura: 1300,
        emoji: "🎭🗿🔥⚡",
        lore: `OTELLO = nome legato alla tradizione
letteraria italiana. 🎭

ZILLI = cognome italiano.

Energia teatrale:

████████████████ 100%

DRAMA: 100%
AURA: 1300
GOOBER: YES

Ogni apparizione richiede:

🎭 un ingresso drammatico
🎭 almeno una pausa
🎭 qualcuno che dica "67"

ABSOLUTE THEATRE AURA.`

    }

];


let aura = Number(localStorage.getItem("super67Aura")) || 0;

const auraCounter = document.getElementById("auraCounter");

function updateAura() {

    if (auraCounter) {
        auraCounter.textContent = aura.toLocaleString();
    }

    localStorage.setItem("super67Aura", aura);
}


const popupMessages = [
    "⚡ AURA DETECTED",
    "🗿 GOOBER ACQUIRED",
    "💀 BRO GOT AURA",
    "🐎 HORSE BONUS",
    "🐸 GOOFY MODE",
    "✡️ BLUE WHITE ENERGY",
    "🔥 ABSOLUTE CINEMA",
    "📈 AURA STONKS",
    "🐐 GOATED",
    "67 INCIDENT",
    "🧠 BRAIN ROT +67",
    "💎 LEGENDARY DROP"
];


function farmAura(amount) {

    aura += amount;

    updateAura();

    const message =
        popupMessages[
            Math.floor(Math.random() * popupMessages.length)
        ];

    const popup = document.createElement("div");

    popup.className = "aura-popup";

    popup.innerHTML = `
        ${message}
        <br>
        <strong>+${amount}</strong>
        <br>
        AURA
    `;

    document.body.appendChild(popup);

    document.body.classList.add("shake");

    setTimeout(() => {
        popup.remove();
        document.body.classList.remove("shake");
    }, 1200);
}


function renderNames() {

    const container = document.getElementById("names");

    container.innerHTML = "";

    people.forEach((person, index) => {

        const card = document.createElement("article");

        card.className = "name-card";

        const rotations = [
            "-2deg",
            "3deg",
            "-5deg",
            "5deg",
            "-3deg"
        ];

        card.style.transform =
            `rotate(${rotations[index % rotations.length]})`;

        card.innerHTML = `

            <div class="name-number">
                #${index + 1}
            </div>

            <div class="name-emoji">
                ${person.emoji}
            </div>

            <h2>
                ${person.name}
            </h2>

            <div class="aura-number">
                ${person.aura} AURA
            </div>

            <p>
                ${person.lore}
            </p>

            <button>
                ⚡ FARM +${Math.floor(person.aura / 10)} AURA
            </button>
        `;

        card.querySelector("button")
            .addEventListener("click", () => {

                farmAura(
                    Math.floor(person.aura / 10)
                );

            });

        container.appendChild(card);
    });
}


function renderRanking() {

    const container =
        document.getElementById("ranking");

    const ranking =
        [...people].sort(
            (a, b) => b.aura - a.aura
        );

    container.innerHTML = "";

    ranking.forEach((person, index) => {

        const item =
            document.createElement("div");

        item.className = "ranking-item";

        let medal;

        if (index === 0) {
            medal = "👑";
        } else if (index === 1) {
            medal = "🥈";
        } else if (index === 2) {
            medal = "🥉";
        } else {
            medal = "💀";
        }

        item.innerHTML = `
            <span class="rank">
                ${medal}
            </span>

            <span class="rank-name">
                ${person.name}
            </span>

            <strong>
                ${person.aura} ⚡
            </strong>
        `;

        container.appendChild(item);
    });
}


document
    .getElementById("farmButton")
    .addEventListener("click", () => {

        farmAura(67);

    });


document
    .getElementById("dangerButton")
    .addEventListener("click", () => {

        const results = [
            "💀 BRO WHY",
            "🚨 67 INCIDENT",
            "🐸 YOU HAVE BEEN GOOFY-FIED",
            "🗿 THE STATUE KNOWS",
            "🐎 HORSE DEPLOYED",
            "🐟 FISH HAS ENTERED THE CHAT",
            "💀 NORMALITY -67%",
            "🔥 ABSOLUTE CINEMA",
            "✡️ AURA OVERLOAD",
            "🐐 GOATED DECISION"
        ];

        const result =
            results[
                Math.floor(
                    Math.random() * results.length
                )
            ];

        document
            .getElementById("dangerResult")
            .innerHTML = `
                ${result}
                <br>
                <strong>+67 AURA</strong>
            `;

        farmAura(67);
    });


setInterval(() => {

    const messages = [
        "⚡ AURA FARMING IN PROGRESS",
        "🗿 67 DETECTED",
        "🐎 HORSE INCOMING",
        "🐸 GOOBER ALERT",
        "💀 NORMALITY DECREASING",
        "📈 AURA STOCKS RISING",
        "🐟 FISH DETECTED",
        "🔥 SUPER MEGA MODE",
        "✡️ BLUE WHITE ENERGY",
        "👁️ AURA IS WATCHING"
    ];

    const ticker =
        document.getElementById("ticker");

    ticker.textContent =
        messages[
            Math.floor(
                Math.random() * messages.length
            )
        ];

}, 1200);


setInterval(() => {

    const emojis = [
        "🗿",
        "🐟",
        "🐎",
        "🐸",
        "💀",
        "🦅",
        "🥒",
        "67",
        "✡️"
    ];

    const element =
        document.createElement("div");

    element.style.position = "fixed";
    element.style.left =
        Math.random() * 100 + "vw";

    element.style.top = "-60px";

    element.style.fontSize =
        Math.random() * 35 + 25 + "px";

    element.style.zIndex = "999";

    element.style.pointerEvents = "none";

    element.textContent =
        emojis[
            Math.floor(
                Math.random() * emojis.length
            )
        ];

    document.body.appendChild(element);

    const duration =
        Math.random() * 3000 + 2500;

    element.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)"
            },
            {
                transform:
                    `translateY(110vh) rotate(${Math.random() * 720}deg)`
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(() => {
        element.remove();
    }, duration);

}, 700);


renderNames();
renderRanking();
updateAura();
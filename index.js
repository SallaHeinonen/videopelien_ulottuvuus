document.addEventListener('DOMContentLoaded', function() {

    let button = document.querySelector(".menuContainer");
    let navmenu = document.querySelector('.nav-menu');
    let header = document.querySelector('header h1');

    button.addEventListener("click", () => {
        button.classList.toggle("active");
        navmenu.classList.toggle('active');
    });

    window.showPage = function(page) {
        console.log('Sivulla: ', page);

        document.querySelectorAll('.container').forEach(container => {
            container.style.display = 'none';
        });

        document.getElementById(page).style.display = "block";

        switch (page) {
            case 'etusivu':
                header.textContent = 'Videopelien ulottuvuus';
                break;
            case 'alustat':
                header.textContent = 'Alustat';
                break;
            case 'genret':
                header.textContent = 'Genret';
                break;
            case 'uutiset':
                header.textContent = 'Uutiset';
                break;
            case 'pelivisa':
                header.textContent = 'Pelivisa';
                break;
            case 'seikkailu':
                header.textContent = "Seikkailu";
                break;
            case 'toiminta':
                header.textContent = "Toiminta";
                break;
            case 'simulaatio':
                header.textContent = "Simulaatio";
                break;
            case 'roolipelit':
                header.textContent = 'Roolipelit';
                break;
            case 'tasohyppely':
                header.textContent = 'Tasohyppely';
                break;
            case 'kauhu':
                header.textContent = 'Kauhu';
                break;
            case 'taistelu':
                header.textContent = 'Taistelu';
                break;
            case 'pulmapelit':
                header.textContent = 'Pulmapelit';
                break;
            case 'ajaminen':
                header.textContent = 'Ajaminen';
                break;
            default:
                header.textContent = 'Videopelien ulottuvuus';
                break;
        }

        closeSublinks();

        navmenu.classList.remove('active');
        button.classList.remove('active');
    };


    window.toggleSublinks = function(id) {
        let sublinks = document.getElementById(`sublinks-${id}`);
        sublinks.classList.toggle('active');
    };

    
    function closeSublinks() {
        document.querySelectorAll('.sublinks').forEach(sublinks => {
            sublinks.classList.remove('active');
        });
    }


// Pelivisa

const questions = [
    {
        text: "Mikä on Minecraftin vahvin mineraali, jota käytetään työkaluissa ja haarniskoissa?",
        options: ["Netheriitti", "Rauta", "Timantti"],
        correctAnswer: "Netheriitti"
    },
    {
        text: `Mikä on suositun pelisarjan "Legend of Zelda" päähenkilö?`,
        options: ["Navi", "Zelda", "Link"],
        correctAnswer: "Link"
    },
    {
        text: `Kuka on "Super Mario"-peleissä pääantagonisti, jolta Mario pitää pelastaa Prinsessa Peach?`,
        options: ["Flamezilla", "Bowser", "King Koopa"],
        correctAnswer: "Bowser"
    },
    {
        text: `Mikä on "God of War"-pelisarjan Kratos-hahmon ikonisten aseiden nimi?`,
        options: ["Chaosbane Blades", "Hellblade Chains", "Blades of Chaos"],
        correctAnswer: "Blades of Chaos"
    },
    {
        text: "Mikä on Pokémon-maailmassa Vesityypin aloituspokemonin nimi?",
        options: ["Squirtle", "Bulbasaur", "Charmander"],
        correctAnswer: "Squirtle"
    }
    
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const optionsList = document.getElementById("options-list");
const finalResult = document.getElementById("result-container");
const retry = document.querySelector('.resetBtn');

window.startQuiz = function() {
    document.getElementById("question-container").style.display = "block";
    document.querySelector(".startBtn").style.display = "none";

    loadQuestion();
}

function loadQuestion() {

    const current = questions[currentQuestion];
    question.textContent = current.text;

    optionsList.innerHTML = "";
    current.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsList.appendChild(li);
    });
}

function checkAnswer(userAnswer) {
    const current = questions[currentQuestion];
    if (userAnswer === current.correctAnswer) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    finalResult.style.display = "block";

    finalResult.textContent = `Sait ${score}/${questions.length} oikein!`;
    retry.style.display = 'block';
}

window.resetQuiz = function() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("question-container").style.display = "none";
    document.querySelector(".startBtn").style.display = "block";
    loadQuestion();
    finalResult.style.display = "none";
    retry.style.display = 'none';
}


});

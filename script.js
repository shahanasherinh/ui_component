const QUIZ_DATA = [
    {
        question: "Which Language Runs In a Web Browser?",
        options: ["java", "c", "python", "javascript"],
        answer: "javascript"
    },
    {
        question: "What Does CSS Stand For?",
        options: ["central style sheet", "cascading style sheets", "cascading simple sheets",
            "cars SUVs sailboats"
        ],
        answer: "cascading style sheets"
    },
    {
        question: "What Does HTML Stands For?",
        options: ["Hyper Text Markup Language", "Hyper Text Markdown Language",
            "Hyper Loop Machiene Language", "Helicopters Terminals Motorboats Lamborginis"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What Year Was Javascript Launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        answer: "1995"
    }
]
let quizindex = 0;
let score = 0;
document.body.className = "h-screen bg-gradient-to-r from-white to-blue-100 ";
const container = document.getElementById("quiz-container");

function displayquestion(index) {

    const current = QUIZ_DATA[index];
    const box = document.createElement("div");
    box.id = "quix-box"
    box.className = "relative bg-white rounded-xl shadow-md p-8 w-96 text-center mx-auto";

    const question = document.createElement("h2");
    question.className = "text-xl mb-6";
    question.textContent = current.question;
    box.appendChild(question);

    const form = document.createElement("form");
    form.className = "text-left space-y-4 mb-6";


    current.options.forEach((optionText) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "language";
        input.value = optionText;
        const span = document.createElement("span");
        span.textContent = ` ${optionText} `;
        form.appendChild(input);
        form.appendChild(span);
        form.appendChild(document.createElement("br"));
    });
    box.appendChild(form);


    const button = document.createElement("button");
    button.textContent = "Submit";
    button.className = "bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-6 w-full absolute bottom-0 left-0";

    button.addEventListener("click", function () {
        box.style.display = "none";
        document.getElementById("form").style.display = "block";
    })
    button.onclick = function () {
        const SELECTED_ANSWER = box.querySelector('input[name="language"]:checked');
        const USER_ANSWER = SELECTED_ANSWER.value
        const CORRECT_ANSWER = QUIZ_DATA[quizindex].answer
        if (USER_ANSWER === CORRECT_ANSWER) {
            score++;
        }
        quizindex++;
        if (quizindex < QUIZ_DATA.length) {
            displayquestion(quizindex);
        } else {
            showfinalscore();
        }
    };



    box.appendChild(button);
    container.appendChild(box);


}
displayquestion(quizindex);



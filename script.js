const QUIZ_DATA = [
    {
        question: "wWich Language Runs In a Web Browser?",
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
        Options: ["1996", "1995", "1994", "none of the above"],
        answer: "1995"
    }
]
QUIZ_DATA.forEach((item, index) => {
    console.log(`Q${index + 1}: ${item.question}`);
    const options = item.options;
    if (options) {
        options.forEach((option, i) => {
            // console.log(`${String.fromCharCode(65 + i)}. ${option}`);
            const letters = ['A', 'B', 'C', 'D'];  // Array of letters
            console.log(`   ${letters[i]}. ${option}`);
        });
    }
    console.log(`Answer: ${item.answer}`);
});
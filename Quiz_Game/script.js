const questions = [
    {
        category:'Anime',
        question: 'What is the best anime ever made?',
        choices:['Naruto','DBZ','One Piece'],
        answer: 'Naruto'

    },
    {
        category: 'Sport',
        question: 'What sport involves a soccer ball?',
        choices: ['Soccer','Rugby','Tennis'],
        answer: 'Soccer'

    },
    {
        category: 'Music',
        question: 'Name of a Michael Jacksons song?',
        choices: ['Bad','Happy','Tempo'],
        answer: 'Bad'

    },
    {
        category: 'Food',
        question: 'What is the best kind of food out there?',
        choices: ['Burgers','Pizza','Ribs'],
        answer: 'Burgers'

    },
    {
        category: 'Animals',
        question: 'What animal can you keep as a pet?',
        choices: ['Dog','Lion','Eagle'],
        answer: 'Dog'

    }
]

const getRandomQuestion = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const getRandomComputerChoice = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)];
}

const getResults = (questionObj,computerChoice) => {
    if(computerChoice === questionObj.answer){
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}
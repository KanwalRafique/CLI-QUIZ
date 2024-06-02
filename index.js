import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
(async function heading() {
    console.clear();
    console.log(chalk.bold.yellowBright(figlet.textSync("Welcome to Quiz")));
})();
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "What is the data type of a variable that has no value?",
        choices: ["void", "empty", "undefined"],
    },
    {
        type: "list",
        name: "question2",
        message: "Which file extension is typically used for Typescript files?",
        choices: [".js", ".ts", ".json"],
    },
    {
        type: "list",
        name: "question3",
        message: "Which of the following is a valid Typescript data type?",
        choices: ["string", "number", "boolean", "All of these"],
    },
    {
        type: "list",
        name: "question4",
        message: "What is the command to install Typescript globally?",
        choices: ["npm install -g typescript",
            "npm install typescript",
            "npm install typescript -g"],
    },
    {
        type: "list",
        name: "question5",
        message: "What keyword is used to declare a constant in Typescript?",
        choices: ["let", "var", "const"],
    },
    {
        type: "list",
        name: "question6",
        message: "Who developed Typescript??",
        choices: ["Google", "Facebook", "Microsoft"],
    },
    {
        type: "list",
        name: "question7",
        message: "What command is used to compile Typescript code?",
        choices: ["ts-compile", "tsc", "compile-ts"],
    },
    {
        type: "list",
        name: "question8",
        message: "What is the purpose of 'Enum' keyword in Typescript?",
        choices: ["To define a funnction", "To define a class", "To define a set of named constant"],
    },
    {
        type: "list",
        name: "question9",
        message: "Which method would you use to combine two arrays in Typescript?",
        choices: ["concat()", "join()", "merge()"],
    },
    {
        type: "list",
        name: "question10",
        message: "Which method would you use to sort the elements of an array in Typescript?",
        choices: ["order()", "sort()", "arrange()"],
    }
]);
if (answers.start === "yes") {
    {
        let countdown = ["0", "1", "2", "3", "START..."];
        for (let i = 0; i <= 4; i++) {
            console.log(chalk.redBright.italic.bold(countdown[i]));
        }
    }
}
let points = 0;
if (answers.question1 === "undefined") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question2 === ".ts") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question3 === "All of these") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question4 === "npm install -g typescript") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question5 === "const") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question6 === "Microsoft") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question7 === "tsc") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question8 === "To define a set of named constant") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question9 === "merge()") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
if (answers.question10 === "sort()") {
    console.log(chalk.blue("Answer is correct!!!!"));
    points += 1;
}
else {
    console.log(chalk.red("Incorrect Answer😳"));
}
console.log(`You scored ${points} out of 10.`);
if (points === 10) {
    console.log(chalk.green("SUPERBBBBBBBB!!!!🤩😍😍🤩🤩 You got a perfect Score!!!!👍🏻👍🏻👍🏻"));
}
else if (points === 9) {
    console.log(chalk.green("GREAT JOB!!!!😍😍😍😍 You did very well👍🏻"));
}
else if (points === 8) {
    console.log(chalk.green("GOOD JOB!!!!!!😉 You got most of them right 8/10.👍🏻"));
}
else if (points === 7) {
    console.log(chalk.green("Not Bad.....!!!😍😉  You got 7 out of 10."));
}
else if (points === 6) {
    console.log(chalk.green("Not Bad.....!!! 👍🏻You got 6 out of 10."));
}
else if (points === 5) {
    console.log(chalk.green("Don't giveup.....!🫠 You got 5 points out of 10"));
}
else if (points === 4) {
    console.log(chalk.green("Keep practicing...!!!🫣 You got few correct😳"));
}
else if (points === 3) {
    console.log(chalk.green("Keep practicing...!!! 🫣🫣You got 3 out of 10"));
}
else if (points === 2) {
    console.log(chalk.green("Keep practicing...!!!🫣🫣 You got 2 out of 10"));
}
else if (points === 1) {
    console.log(chalk.green("Keep practicing...!!!!!!!🫣😐😐😐 You got 1 out of 10"));
}
else if (points === 0) {
    console.log(chalk.green("You got none correct....!!!😯😯😯😯 Better Luck next time!!!😐"));
}

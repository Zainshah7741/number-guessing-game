#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk";
console.log(chalk.bold.italic.green('Number Guessing Game '));

const answer = await inquirer.prompt([{
    message: "Guess a number between 1 to 8: ",
    type: "number",
    name:"guessedNum"
}])

let num1:number = 1;
let num2:number = 8;

let randomNumber:number = num1 + (num2 - num1)*Math.random();
let randomed:number = Math.round(randomNumber)
if (randomed == answer.guessedNum) {
    console.log(`${chalk.italic.yellow("You're So Smart Nice Guess")}`);
} else {
    console.log(`${chalk.bold.red('better luck next time')}`)
}
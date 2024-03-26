#! usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess the number 1-10 : ",
    }
])

console.log(answer);

if(answer.userguessednumber === randomNumber){
    console.log("Congratulations! you guessed a right number");
}else {
    console.log("you guessed a wrong number");
}
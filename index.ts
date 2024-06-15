#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 5 + 1)
const myName = await inquirer.prompt([

{
type: "number",
name: "guessnumber",
message: "guess the number between 1-5"
}

])

if (myName.guessnumber === randomNumber){
    console.log("congratulation you guess the right number");
}
else{
    console.log("Try Again");
    
}



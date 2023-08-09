#! /usr/bin/env node
import inquirer from 'inquirer';
import {createSpinner} from 'nanospinner';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';



async function welcome(){
  let title = chalkAnimation.rainbow("Number Luck Game"); //start heading
  await sleep();
  title.stop();
}
 
function rules(){

console.log(`${chalk.green('Game Rules:')}
            1. You will guess a number which will be checked against computer 
            2. If your guess matched with that of your computer, you will get $25.
            3. And the computer will give you option of earning more through another guess.
            4. But if you loose your chance of winning is finish and your game is over.
            5. Once your game is over you will loose all money you have earned before.
            6. But if you typed "n" before your game is over you will get total money`);

console.log("\n")  
console.log(chalk.cyan(`Be smart while playing`))  
console.log("\n") 
}


const sleep = () => {
    return new Promise((r) =>
     {setTimeout(r,5000)});
};

async function spinAct(){
    const spinner = createSpinner('OK! Checking your guess...').start();
    await sleep();
    spinner.stop();
};
async function answ_er(x: number) {
let app_value = Math.floor(Math.random() * 10);

let Value = await inquirer
.prompt([
    {
        type: "number",
        name: "guess_num",
        message: "Guess any one digit number"
    }
]) 
console.log("\n") 
await spinAct();
console.log("\n") 
console.log(`Actual number is: ${chalk.yellow(app_value)}`);
console.log("\n") 
if(Value.guess_num == app_value){
    
    console.log(`${chalk.greenBright("GREAT! YOU WON $25")}`);
    x += 25;
    console.log("\n") 
    await more_guess(x)
}
else{
  console.log(`${chalk.red('Game Over! you get no money')}`)
}
}
async function more_guess(z: number){
  let reStart = await inquirer
  .prompt([
    {
      type: "input",
      name: "nextguess",
      message: "Do you want to win more? type y or n "
    },
  ])
  console.log("\n") 
   if(reStart.nextguess == "y" || reStart.nextguess == "Y" ){
        await answ_er(z)
  }
  else {
    console.log(`So your prize money is $ ${z}`);
  }
}
await welcome();
rules();
await answ_er(0);



import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true
console.log(chalk.redBright("n\t welcome to codeWithZakia todo-List Aplication\n"));
while(conditions){
let addTask = await inquirer.prompt([
    {
name:"task",
type:"input",
message: "Enter your first task:"

}
]);
 todoList.push(addTask.task);
 console.log('${addTask.task} task added in Todo-List successfully');

 let addMoreTask = await inquirer.prompt([
    {
        name:"addMore",
        type:"confirm",
        message:"do you want to add more task ?",
        default:"False"
    }
 ]);
 conditions = addMoreTask.addMore
}
console.log("your updated Todo-List:",todoList);
import conf from 'conf';
import chalk from 'chalk';

class List {
    constructor() {
        const confi=new conf();
        this.todoList = confi.get('todo-list');
    }
    printToDoList() {
        if (this.todoList && this.todoList.length) {
            //user has todo list
        
            console.log(chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done'))
            this.todoList.forEach((task,index) => {
                if (task.done) {
                    console.log(chalk.greenBright(`${index}. ${task.text}`));
                } else {
                    console.log(
                        chalk.yellowBright(`${index}. ${task.text}`)
                    )
                }
            });
        } else {
            //user does not have tasks in todoList
            console.log(chalk.red.bold('You dont have any tasks yet'))
            
        }
    }
}

export default List
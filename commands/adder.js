import Conf from 'conf'
import chalk from 'chalk';

class Adder {
    constructor(task) {
        this.conf = new Conf();
        this.todosList = this.conf.get('todo-list');
        this.task = task;
    }

    add() {
        if (!this.todosList){
            this.todosList = [];
        }
        this.todosList.push({
            text: this.task,
            done: false
        });
        this.conf.set('todo-list', this.todosList);
        console.log(chalk.green.bold('Task has been added successfully'));
    }
}

export default Adder
import Conf from 'conf';
import chalk from 'chalk';

class Marker {
    constructor({tasks}) {
        this.tasks = tasks;
        this.conf = new Conf();
        this.todosList = this.conf.get('todo-list');
    }

    markAsDone() {
        if (this.todosList) {
        
            //loop over the todo list tasks
            this.todosList = this.todosList.map((task, index) => {
                //check if the user specified the tasks to mark done
      
                if (this.tasks) {                  
                    //check if this task is one of the tasks the user specified
                    if (this.tasks.indexOf(index.toString()) !== -1) {
                        //mark only specified tasks by user as done
                        task.done = true
                    }
                } else {
                    //if the user didn't specify tasks, mark all as done
                    task.done = true
                }
                return task
            });
    
            //set the new todo-list
            this.conf.set('todo-list', this.todosList)
        }
    
        //show the user a message
        console.log(
            chalk.green.bold('Tasks have been marked as done successfully')
        )
    }

    clearTodoList() {
        this.todosList = {};
        console.log(this.todosList)
    }
}

export default Marker;
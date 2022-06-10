#! /usr/bin/env node

import { program } from 'commander';
import List from './commands/list.js'
import Adder from './commands/adder.js'
import Marker from './commands/marker.js'

program
    .command('list')
    .description('list all the TODO tasks')
    .action(()=>{
        const list = new List();
        list.printToDoList()
    });

program
    .command('add <task>')
    .description('Add todo task')
    .action( (task)=>{
        const adder = new Adder(task);
        adder.add();
    }  );
    
program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action((tasks) => {
        const marker = new Marker(tasks);
        marker.markAsDone();
    });
program.parse();

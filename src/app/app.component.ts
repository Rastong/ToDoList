import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoTasks } from './to-do-tasks';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  listOfTasks:ToDoTasks[] = [
    {
      task: "dishes",
      completed: false
    },
    {
      task: "laundry",
      completed: false
    },
    {
      task: "bathroom",
      completed: false
    },
    {
      task: "vaccuum",
      completed: false
    },
    {
      task: "sweep",
      completed: false
    },
    {
      task: "mop",
      completed: false
    },
    {
      task: "homework",
      completed: false
    },
    {
      task: "procrastinate",
      completed: true
    }
  ]

  AddToList(form:NgForm):void {
    let newTask:ToDoTasks = {
      task: form.form.value.task,
      completed: false
    }
    this.listOfTasks.push(newTask);
  }

  ChangeBool(change:ToDoTasks):void {
    this.listOfTasks.forEach(x => {
      if (x.task == change.task) {
        x.completed = true;
      }
    })
  }
}

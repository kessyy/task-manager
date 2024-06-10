import { Component, OnInit } from '@angular/core';
import { Task } from '../../models';
import { TaskService } from '../../services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  selectedTask: Task | null = null;

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  addTask(): void {
    Swal.fire({
      title: 'Create Task',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Title">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Description">' +
        '<select id="swal-input3" class="swal2-select">' +
        '<option value="User1">User1</option>' +
        '<option value="User2">User2</option>' +
        '<option value="User2">User4</option>' +
        '<option value="User2">User18</option>' +
        '<option value="User2">User23</option>' +
        '</select>' +
        '<select id="swal-input4" class="swal2-select">' +
        '<option value="Pending">Pending</option>' +
        '<option value="In Progress">In Progress</option>' +
        '<option value="Completed">Completed</option>' +
        '</select>',
      focusConfirm: false,
      preConfirm: () => {
        return {
          title: (document.getElementById('swal-input1') as HTMLInputElement).value,
          description: (document.getElementById('swal-input2') as HTMLInputElement).value,
          assignedTo: (document.getElementById('swal-input3') as HTMLSelectElement).value,
          status: (document.getElementById('swal-input4') as HTMLSelectElement).value,
          dueDate: new Date()
        };
      }
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.taskService.addTask(result.value).subscribe(() => {
          this.loadTasks();
        });
      }
    });
  }
  
  
  editTask(task: Task): void {
    this.selectedTask = task;
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => this.loadTasks());
  }

  refreshTasks(): void {
    this.loadTasks();
  }
}

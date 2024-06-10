import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models';
import { TaskService } from '../../services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() taskUpdated = new EventEmitter<void>();
  taskForm!: FormGroup;
  users: string[] = ['User', 'User1', 'User2', 'User3', 'User10'];
  isEditMode = false;

  constructor(
    private formbuilder: FormBuilder, 
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    console.log('task', this.isEditMode)
    this.taskForm = this.formbuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      assignedTo: ['', Validators.required],
      status: ['', Validators.required]
    });
    if (this.task) {
      this.isEditMode = true;
      this.taskForm.patchValue(this.task);
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      if (this.isEditMode && this.task) {
        this.taskService.updateTask({ ...this.task, ...this.taskForm.value }).subscribe(() => {
          this.taskUpdated.emit();
        });
      }
    }
  }
}

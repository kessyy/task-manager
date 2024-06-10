export interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  dueDate: Date;
}
  
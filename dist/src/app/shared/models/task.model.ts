export interface Task {
  title: string;
  description?: string;
  dueDate?: string;   // or Date if you prefer
  priority: 'Low' | 'Medium' | 'High';
  project: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
}

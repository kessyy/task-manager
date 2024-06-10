# Task Management System

The Task Management System is a web application built using Angular. It allows users to manage tasks, assign them to different users, and track their status.

## Features

- User authentication using JWT
- Task creation, editing, and deletion
- Assignment of tasks to different users
- Task status tracking (e.g., Pending, In Progress, Completed)
- Responsive UI design
- State management using NgRx
- Integration with mock API for task data

## Setup Instructions

1. Clone the repository to your local machine:

```bash
git clone https://github.com/kessyy/task-manager.git
```

2. Navigate to the project directory:

```bash
cd task-management-system
```

3. Install dependencies using npm or yarn:

```bash
npm install
```
or
```bash
yarn install
```

4. Start the development server:

```bash
ng serve
```

5. Open your browser and navigate to `http://localhost:4200` to view the application.

## Usage

1. **Authentication:**
   - Navigate to the login page by clicking on the "Login" link in the navigation bar.
   - Enter your username and password to log in. (You can use mock credentials provided(username: user1, password: password1) or create your own.)
   
2. **Dashboard:**
   - After logging in, you will be redirected to the dashboard page.
   - Here, you can view all tasks, edit existing tasks, delete tasks, and create new tasks.
   
3. **Creating a Task:**
   - Click on the "Create Task" button to open the task creation form.
   - Fill in the details for the new task, such as title, description, assigned user, and status.
   - Click on the "Submit" button to create the task.

4. **Editing a Task:**
   - To edit a task, click on the "Edit" button next to the task you want to edit.
   - Modify the task details in the form that appears.
   - Click on the "Submit" button to save the changes.

5. **Deleting a Task:**
   - To delete a task, click on the "Delete" button next to the task you want to delete.
   - Confirm the deletion when prompted.

## Mock API Endpoints

For the purposes of this application, mock API endpoints are used to simulate data interactions:
- Authentication:
  - `POST /auth/login`: Authenticate user and return a JWT token.
- Tasks:
  - `GET /tasks`: Get all tasks.
  - `POST /tasks`: Create a new task.
  - `PUT /tasks/:id`: Update an existing task.
  - `DELETE /tasks/:id`: Delete a task.

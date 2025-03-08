
import React from 'react';
import { CheckCircle2, Clock, ListTodo } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Apply NPK fertilizer",
    dueDate: "2024-03-20",
    priority: "high",
    completed: false
  },
  {
    id: 2,
    title: "Pest inspection",
    dueDate: "2024-03-21",
    priority: "medium",
    completed: false
  },
  {
    id: 3,
    title: "Irrigation maintenance",
    dueDate: "2024-03-19",
    priority: "high",
    completed: true
  },
  {
    id: 4,
    title: "Weed control",
    dueDate: "2024-03-22",
    priority: "low",
    completed: false
  }
];

function TaskManager() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <ListTodo className="h-6 w-6 text-purple-500" />
        Task Manager
      </h2>
      <div className="space-y-4">
        {tasks.map(task => (
          <div 
            key={task.id}
            className={`p-3 rounded-lg border ${task.completed ? 'bg-gray-50 border-gray-200' : 'border-gray-200 hover:border-purple-200'} transition-colors`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <CheckCircle2 
                  className={`h-5 w-5 mt-0.5 ${task.completed ? 'text-green-500' : 'text-gray-400'}`} 
                />
                <div>
                  <p className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{task.dueDate}</span>
                  </div>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskManager;
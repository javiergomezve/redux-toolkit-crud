import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteTask } from '../features/tasks/taskSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const handleDelete = id => {
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <header>
                <h1>Tasks: ({tasks.length})</h1>

                <Link to="/create-task">Create task</Link>
            </header>

            {tasks.map(task => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <Link to={`/edit-task/${task.id}`}>Edit</Link>{' '}
                    <button onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList;

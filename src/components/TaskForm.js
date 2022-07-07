import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { addTask, editTask } from '../features/tasks/taskSlice';

const TaskForm = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const params = useParams();

    const tasks = useSelector(state => state.tasks);

    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id));
        }
    }, []);

    const handleChange = ({ target }) => {
        setTask(prev => ({ ...prev, [target.name]: target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (params.id) {
            dispatch(editTask(task));
        } else {
            dispatch(addTask({ id: uuid(), ...task }));
        }

        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={task.title}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
            ></textarea>
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;

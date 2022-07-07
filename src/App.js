import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import PostsList from './components/PostsList';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/create-task" element={<TaskForm />} />
                    <Route path="/edit-task/:id" element={<TaskForm />} />
                    <Route path="/posts" element={<PostsList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

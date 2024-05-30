import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import {Outlet, Route,Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar/>
            <hr />
            <div className="app-content">
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    )
}

export default App

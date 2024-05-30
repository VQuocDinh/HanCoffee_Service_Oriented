import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default App

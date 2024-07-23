import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Requests from './pages/Requests'
import Operations from './pages/Operations'
import Contact from './pages/Contact'
import Error404 from "./pages/noPage";
import LoginPage from "./pages/loginPage";

function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Operations />} />
                    <Route path={'/operations'} element={<Operations />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/requests'} element={<Requests />} />
                    <Route path={'/login'} element={<LoginPage />} />
                    <Route path={'*'} element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
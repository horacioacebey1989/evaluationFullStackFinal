import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import MainContainer from "./pages/MainContainer";
import MyCourses from "./pages/MyCourses";
const App = () => {
     return (
        <>
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<MainContainer/>}/>
                <Route exact path="/home" element={<MainContainer/>}/>
                <Route exact path="/myCourses" element={<MyCourses/>}/>
            </Routes>
        </>
     ) 
}

export default App;
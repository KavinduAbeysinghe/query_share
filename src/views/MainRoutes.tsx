import {Route, Routes} from "react-router-dom";
import Login from "./login/Login";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path={""} element={<Login/>}/>
        </Routes>
    );
}

export default MainRoutes;
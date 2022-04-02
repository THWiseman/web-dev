import './vendors/bootstrap-5.1.3/dist/css/bootstrap.css';
import './vendors/fontawesome/css/all.css';
import HelloWorld from "./components//HelloWorld.js";
import Labs from "./components/Labs/Labs";
import Index from "./components/Tuiter/home"
import ExploreScreen from "./components/Tuiter/explore-screen/explore-screen"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tuiter from "./components/Tuiter";
import Profile from "./components/Tuiter/profile"
import EditProfile from "./components/Tuiter/edit-profile"
// import NotificationScreen from "./components/Tuiter/notification-screen"
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<Index/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<Profile/>}/>
                            <Route path="edit-profile"
                                   element={<EditProfile/>}/>
                            {/*<Route path="notifications"*/}
                            {/*       element={<NotificationScreen/>}/>*/}
                            ...
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

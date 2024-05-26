import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import Chat from "./components/Chat/Chat";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { fetchRooms } from "./mockData/mockAPI";

function App() {
    const [rooms, setRooms] = useState([]);

    const myUser = {
        name: "Aatmin",
        photoURL:
            "https://lh3.googleusercontent.com/ogw/AF2bZygkK8Fy3TAa9FPyj50GrTP8ci_rXoUGHbfAMJbZE-GvDNaI=s32-c-mo",
    };

    useEffect(() => {
        fetchRooms().then((rooms) => {
            setRooms(rooms);
        });
    }, []);

    return (
        <div className="App">
            <Router>
                <div className={s.container}>
                    <Header user={myUser} />
                    <div className={s.main}>
                        <Sidebar rooms={rooms} />
                        <Routes>
                            <Route
                                path="/room/:roomId"
                                element={<Chat user={myUser} />}
                            />
                            <Route
                                path="/"
                                element={<h1>Select a Channel</h1>}
                            />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default App;

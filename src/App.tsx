import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";

import News from "./pages/News/News";
import Daily from "./pages/News/Daily/Daily";
import Research from "./pages/News/Research/Research";

import Finder from "./pages/Finder/Finder";
import Analysis from "./pages/Analysis/Analysis";
import Workspace from "./pages/Workspace/Workspace";

import Settings from "./pages/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<MainLayout />}>

                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/chat"
                        element={<Chat />}
                    />

                    <Route
                        path="/News"
                        element={<News />}
                    />
                    <Route
                        path="/News/daily"
                        element={<Daily />}
                    />

                    <Route
                        path="/News/research"
                        element={<Research />}
                    />
                    <Route
                        path="/finder"
                        element={<Finder />}
                    />

                    <Route
                        path="/analysis"
                        element={<Analysis />}
                    />

                    <Route
                        path="/workspace"
                        element={<Workspace />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";

import Intelligence from "./pages/Intelligence/Intelligence";
import Daily from "./pages/Intelligence/Daily/Daily";
import ResearchPage from "./pages/Intelligence/Research/Research";

import Property from "./pages/Property/Property";
import Analysis from "./pages/Analysis/Analysis";
import Research from "./pages/Research/Research";
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
                        path="/intelligence"
                        element={<Intelligence />}
                    />
                    <Route
                        path="/intelligence/daily"
                        element={<Daily />}
                    />

                    <Route
                        path="/intelligence/research"
                        element={<ResearchPage />}
                    />
                    <Route
                        path="/property"
                        element={<Property />}
                    />

                    <Route
                        path="/analysis"
                        element={<Analysis />}
                    />

                    <Route
                        path="/research"
                        element={<Research />}
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
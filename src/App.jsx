import Header from "./components/header/Header";
import DashboardPage from "./pages/dashboard/DashboardPage";
import NoMatchPage from "./pages/noMatch/NoMatchPage";
import PostUserPage from "./pages/employee/PostUserPage"
import UpdateUserPage from "./pages/employee/UpdateUserPage";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/employee" element={<PostUserPage />} />
        <Route path="/employee/:id" element={<UpdateUserPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </>
  );
}

export default App;

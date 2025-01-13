import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./Components/PageLayout";
import NotFound from "./Pages/404";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cash from "./Pages/Cash";
import Plan from "./Pages/Plan";
import Story from "./Pages/Story";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PageLayout />}>
            <Route path="/cash" element={<Cash />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/plan" element={<Plan />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
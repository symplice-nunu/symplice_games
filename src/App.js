import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./Components/PageLayout";
import NotFound from "./Pages/404";
import Login from "./Pages/Login";
import Home from "./Pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<PageLayout />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
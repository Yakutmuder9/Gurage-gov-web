import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./screens/NotFound";
import HomeScreen from "./screens/homeScreen/HomeScreen";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

export default App;
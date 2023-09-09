import { useEffect, useState } from "react";
import Routing from "./components/main/Routing";
import Navbar from "./components/main/Navbar";
import "./App.css";
import "./components/styles/responsive.css";


const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return render({ mousePosition });
};


const App =() => {
  return (
    <div className="App">
        <Navbar />
        <Routing />
    </div>
  );
}

export default App;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router";
import Navber from "./component/Navber";
import Footer from "./component/Footer";
import { ThemeContext } from "./context/TheamContext";
import { BlogProvider } from "./context/BlogContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BlogProvider>
          <Navber />
          <main className={`max-w-screen min-h-screen mx-6 md:px-24 ${darkMode ? "bg-gray-900 text-white" : ""}`}>
            <Outlet />
          </main>
          <Footer />
        </BlogProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

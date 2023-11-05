import React, { useState, useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Works from "./components/Works";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="bg-white dark:bg-slate-900 min-h-screen font-inter ">
        <div className="max-w-5xl w-11/12 mx-auto">
          <div className="w-full">
            <ThemeBtn />
          </div>
          <HeroSection />
          <Services />
          <Works />
          <About />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

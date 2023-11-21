import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './Context/ThmeContext';
import { useEffect, useState } from 'react';
import ThemeBtn from './Component/ThemeBtn';
import Card from './Component/Card';

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {

    setThemeMode("light");
  }

  //actual chnege in theme 

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);

  }, [themeMode])


  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>
            <Card />
            <div className="w-full max-w-sm mx-auto">

            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

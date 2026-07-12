import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import './App.css'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    console.log(themeMode);
  
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
     <div className="min-h-screen flex items-center justify-center
bg-gradient-to-br
from-blue-100
via-slate-100
to-purple-100
dark:from-slate-950
dark:via-slate-900
dark:to-black
transition-colors
duration-500">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
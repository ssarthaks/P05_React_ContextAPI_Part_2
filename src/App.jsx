import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode("light")
  } 

  const darkTheme = () => {
    setThemeMode("dark")
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])



  return (
    <>
      <h1 className='p-5 bg-pink-600 text-3xl text-white text-center'>Theme Toggler, ContextAPIs, Github API with Chai aur code</h1>

      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap items-center mt-14">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    {/* Theme Buttons */}
                    <ThemeButton />
                </div>

                <div className="w-full max-w-sm mx-auto">
                  {/* Cards */}
                  <Card />
                </div>
            </div>
          </div>
      </ThemeProvider>
    
    </>
  )
}

export default App

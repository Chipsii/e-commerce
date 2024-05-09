import React from 'react'
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";


const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const element = document.documentElement;
  console.log(element);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.remove("dark");
    }
  })

  return (
    <div className='relative flex'>
      <img
      onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
      src={LightButton} alt="" className={`w-12 cursor-pointer ${theme === "dark" ? "hidden" : "opacity-100 transition-all duration-300"
        }`} />
      <img 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      src={DarkButton} alt="" className={`w-12 cursor-pointer ${theme === "light" ? "hidden" : "opacity-100 transition-all duration-300"
        } `} />
    </div>
  )
}

export default DarkMode;
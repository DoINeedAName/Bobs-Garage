import React, {useState, useEffect} from "react";

export const ThemeSwitch = () => {
  
  const [isDark, setIsDark] = useState(false);

  const setLightTheme = () => {
    localStorage.setItem('theme-color', 'theme-light');
    document.querySelector("body").setAttribute("class", "light")
    setIsDark(false);
  }

  const setDarkTheme = () => {
    localStorage.setItem('theme-color', 'theme-dark');
    document.querySelector("body").setAttribute("class", "dark")
    setIsDark(true);
  }

  useEffect(() => {
    // Checks local storage
    const currentThemeColor = localStorage.getItem('theme-color');
    if(currentThemeColor === 'theme-dark') {
      setDarkTheme();
    }
    else {
      setLightTheme();
    }
  }, [])

  const handleLabelClick = () => {
    if (isDark) {
      setLightTheme();
    }
    else {
      setDarkTheme();
    }
  }

  return (
    <div>
      {/* <div className='theme-switcher-wrap'> */}
        <label className={`theme-switcher-label ${isDark ? 'active' : ''}`}
          onClick={handleLabelClick}
        >
          <div className='switch-path'>
            <div className='switch-handle'></div>
          </div>
        </label>
      {/* </div> */}
    </div>
  )
}

// const ThemeSwitchFunction = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     // Checks local storage
//     const currentThemeColor = localStorage.getItem('theme-color');
//     if(currentThemeColor === 'theme-dark') {
//       setIsDark(true)
//     }
//     else {
//       setIsDark(false)
//     }
//   }, [])
// }

// export const ThemeSwitch = (isDark, onThemeToggle) => {
//   // const handleLabelClick = (isDark) => {
//   //   if (isDark) {
//   //     localStorage.setItem('theme-color', 'theme-light');
//   //     setIsDark(false);
//   //   }
//   //   else {
//   //     localStorage.setItem('theme-color', 'theme-dark');
//   //     setIsDark(true);
//   //   }
//   // }

//   return (
//     <div>
//       <h5 className='text-center'>(Light / Dark Mode)</h5>
//         <div className='theme-switcher-wrap'>
//           <label className={`theme-switcher-label ${isDark ? 'active' : ''}`}
//             onClick={() => onThemeToggle}
//           >
//             <div className='switch-path'>
//               <div className='switch-handle'></div>
//             </div>
//           </label>
//         </div>
//     </div>
//   )
// }
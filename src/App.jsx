import { Header } from './Layouts/Header';
import { Main } from './Layouts/Main';
import { Footer } from './Layouts/Footer';
import { useState } from 'react';
import './App.css';

export const App = () => {
  const [isDark, setIsDark] = useState(false)
  const [isTranslated, setIsTranslated] = useState(false)

  const mode = isDark ? 'dark' : null
  const social = {
    title: "Contact me",
    telegram: "https://t.me/skiff4ek",
    skype: "https://join.skype.com/invite/zlgP7dBfnegd",
    linkedin: "www.linkedin.com/in/max-balagur",
    email: "mailto:skiff4ek@gmail.com"
}

  const changeMode = () => {
    setIsDark(!isDark)
  }
  const translate = () => {
    setIsTranslated(!isTranslated)
  }

  return (
    <>
      <Header isDark={isDark} changeMode={changeMode} mode={mode}/>
      <Main mode={mode} isTranslated={isTranslated} translate={translate} social={social} />
      <Footer social={social} />
    </>
  );
}


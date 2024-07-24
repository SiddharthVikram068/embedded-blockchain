import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import { Page_about, Page_malfunction, Page_tampering } from './pages';
import { NavBar } from './components';
import styles from './style';

const AppMain = () => {
  return (
    <>
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary w-full overflow-hidden`}>
      <div className={`${styles.boxWidth}`}>
      <NavBar />

      </div>
    </div>
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/mal" element={<Page_malfunction />}/>
        <Route path="/abouts" element={<Page_about />} />
        <Route path="/tamp" element={<Page_tampering />} />

    </Routes>
    </>
  )
}

export default AppMain
import React from "react";
import styles from "./style";
import { NavBar, Malfunction, Tampering, Coming_soon, Button, Hero } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <NavBar />

        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

          <Hero />
        </div>
      </div>

      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Malfunction />
          <Tampering />
          <Coming_soon />
          <Coming_soon />
        </div>
      </div>
    
    </div>
  )
}

export default App
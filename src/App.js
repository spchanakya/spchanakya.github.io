import { useState, useEffect, useRef } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";
import Timeline from './views/Career';
import Publications from "./views/Publications";
import Projects from "./views/Projects";
import Chatbot from "./components/Chatbot";

import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function App() {
  const [loading, setLoading] = useState(true)
  const chatbotRef = useRef(null);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>

        {!loading ? (
          <div >
            <Navbar />
            <Home chatbotRef={chatbotRef} />
            <About />
            <Services />
            <Timeline />
            <Projects />
            <Publications />
            <Contact />
            <Chatbot ref={chatbotRef} />
          </div>

        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>

  );
}

export default App;


// App.js


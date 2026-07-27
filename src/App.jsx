import { useState } from "react";
import { ThemeProvider } from './components/ThemeContext';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  const [view, setView] = useState({ name: "home", lang: undefined });

  return (
    <ThemeProvider>
      {view.name === "home" ? (
        <Home onLaunch={(lang) => setView({ name: "app", lang })} />
      ) : (
        <Main
          key={view.lang || "default"}
          initialLang={view.lang}
          onHome={() => setView({ name: "home", lang: undefined })}
        />
      )}
    </ThemeProvider>
  );
}

export default App;

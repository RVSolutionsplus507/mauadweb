import { Outlet } from "react-router-dom";

import NavBar from "./components/Globals/NavBar";
import Footer from "./components/Globals/Footer";

import { ThemeProvider } from "../src/context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

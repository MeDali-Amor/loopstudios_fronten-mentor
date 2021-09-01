import "./App.css";
import Footer from "./Components/Footer/Footer";
import Grid from "./Components/Grid/Grid";
import GridDesktop from "./Components/Grid/GridDesktop";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Info from "./Components/Info/Info";

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Info />
            <Grid />
            <GridDesktop />
            <Footer />
        </div>
    );
}

export default App;

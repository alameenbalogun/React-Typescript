import Header from "./components/Header";
import internetImage from "./assets/internet.png";
import "./App.css";

function App() {
  return (
    <main>
      <Header image={{src: internetImage, alt: "Internet" }} />
    </main>
  );
}

export default App;

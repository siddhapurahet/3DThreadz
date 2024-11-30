import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home /> {/*Handles the home page and its content.*/}
      <Canvas /> {/*Handles T-shirt.*/}
      <Customizer />
      {/*Handles the AIPicker, FilePicker, Color Picker
      component, T-shirt logo buttons as well as Save and Back button.*/}
    </main>
  );
}

export default App;

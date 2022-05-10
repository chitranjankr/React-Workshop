import Navbar from "./components/navbar/Navbar";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home style={{ width: "100vw" }} />
    </>
  );
}

export default App;

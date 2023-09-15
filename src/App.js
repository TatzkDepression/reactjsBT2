import logo from "./logo.svg";
import "./App.css";
import Header from "./Content/Header";
import Content from "./Content/Content";

function App() {
  return (
    <div className="App">
      <div
        className="gray"
        style={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: -1,
        }}
      ></div>

      <div
        className="background"
        style={{
          position: "absolute",
          backgroundImage: "url(./glassesImage/background.jpg)",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          zIndex: -2,
        }}
      ></div>

      <div className="container">
        <Content />
      </div>
    </div>
  );
}

export default App;

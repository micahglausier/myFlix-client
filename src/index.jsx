//import React
//import React
import { createRoot } from "react-dom/client";
//import MainView.jsx
import { MainView } from "./components/MainView/main-view";
//import container from bootstrap
import Container from "react-bootstrap/Container";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <Container
      style={{
        border: "4px solid #33364D",
        marginTop: "20px",
        backgroundColor: "#e5dac6",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        marginBottom: "100px",
        padding: "25px",
      }}
    >
    
      <MainView />
    </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);

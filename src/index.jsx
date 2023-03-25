//import React
import { createRoot } from 'react-dom/client';
//import MainView.jsx
import { MainView } from "./components/MainView/main-view";
//import container from bootstrap
import Container from 'react-bootstrap/Container';

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
  <Container style={{border: "1px solid #F34C19", marginTop: "20px"}}>
    <MainView />;
  </Container>
  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);
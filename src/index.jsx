import { createRoot } from "react-dom/client";

import { MainView } from "./components/MainView/main-view";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.scss";

const App = () => {
  return (
    <Container style={{ 
      backgroundColor: "#e5dac6", 
    }}>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

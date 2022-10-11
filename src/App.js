import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./Header";

function App() {
  return (
    <Container className="App Container">
      <header className="App-header">
        <Header />
        Tamief International NG. LTD.
      </header>
      <body>
        Founded in 1990, Tamief International is an evergreen company dedicated
        to bringing its customers the highest quality of products and services!
      </body>
      <footer className="App-footer">
        Since 1990, Always There For You...
      </footer>
    </Container>
  );
}

export default App;

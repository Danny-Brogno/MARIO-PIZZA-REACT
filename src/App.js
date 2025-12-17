import favicon from './img/favicon.png';

import {Header} from "./components/header.js";
import {Jumbotron} from "./components/jumbotron.js";
import {Banner} from "./components/banner.js";
import {Footer} from "./components/footer.js";
import './App.css'; 


const link = document.querySelector("link[rel~='icon']");
if (link) {
    link.href = favicon;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;

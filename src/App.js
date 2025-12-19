import favicon from './img/favicon.png';

import {Header} from "./components/header.js";
import {UnderHeader} from "./components/underHeader.js";
import {Jumbotron} from "./components/jumbotron.js";
import {Banner} from "./components/banner.js";
import {JumbotronContainer} from "./components/jumbotronContainer.js";
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
      <UnderHeader />
      <Jumbotron />
      <Banner />
      <JumbotronContainer />
      <Footer />
    </div>
  );
}

export default App;

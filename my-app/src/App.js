import logo from './logo.svg';
import './App.css';
import {NavBar} from './componentes/NavBar';
import {Banner} from './componentes/Banner';
import {Skills} from './componentes/Skills';
import {Projects} from './componentes/Projects';
import { Cards} from './componentes/ProjectsCards';
import {DevProjects} from './componentes/ProjectsTech';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DevCards } from './componentes/ProjectsCardsTech';
import {Ppe} from "./componentes/Ppe";
import {Final} from "./componentes/Final";

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Cards  />
    <DevProjects/>
    <DevCards/>
    <Ppe/>
    <Final/>
    </div>
  );
}

export default App;

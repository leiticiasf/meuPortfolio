import logo from './logo.svg';
import './App.css';
import {NavBar} from './componentes/NavBar';
import {Banner} from './componentes/Banner';
import {Skills} from './componentes/Skills';
import {NaturezaProjects, MatematicaProjects, LinguagensProjects, HumanasProjects,} from './componentes/Projects';
import { NaturezaCards} from './componentes/ProjectsCards';
import {DevProjects} from './componentes/ProjectsTech';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DevCards } from './componentes/ProjectsCardsTech';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Banner />
    <Skills />
    <NaturezaProjects />
    <NaturezaCards  />
    <DevProjects/>
    <DevCards/>
    </div>
  );
}

export default App;

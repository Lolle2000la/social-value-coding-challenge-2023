import './App.css';
import ProjectList from "./components/ProjectList";
import {Redirect, Route} from "wouter";
import Projects from "./routes/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./routes/Project";

function App() {
  return (<div>
    <Header/>
    <Route path={"/"} ><Redirect to="/projects"/></Route>
    <Route path={"/projects"} component={Projects}/>
    <Route path={"/projects/:id"}>
      {params => <Project id={params.id}/>}
    </Route>
    <Footer/>
  </div>);
}

export default App;

import './App.css';
import ProjectList from "./components/ProjectList";
import {Redirect, Route} from "wouter";
import Projects from "./routes/Projects";
import Header from "./components/Header";

function App() {
  return (<div>
    <Header/>
    <Route path={"/"} ><Redirect to="/projects"/></Route>
    <Route path={"/projects"} component={Projects}/>
  </div>);
}

export default App;

import './App.css';
import ProjectList from "./components/ProjectList";
import {Redirect, Route} from "wouter";
import Projects from "./routes/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./routes/Project";
import {Col, Container, Row} from "reactstrap";

function App() {
    return (<Container style={{padding:"0"}} fluid={true}>
        <Row className="w-100">
            <Col md={0} lg={2}/>
            <Col md={12} lg={8}>
                <Header/>
                <Route path={"/"}><Redirect to="/projects"/></Route>
                <Route path={"/projects"} component={Projects}/>
                <Route path={"/projects/:id"}>
                    {params => <Project id={params.id}/>}
                </Route>
                <Footer/>
            </Col>
            <Col md={0} lg={2}/>
        </Row>
    </Container>);
}

export default App;

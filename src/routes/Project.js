import {useEffect, useState} from "react";
import {Col, Container, Row} from "reactstrap";
import VoteButton from "../components/project/VoteButton";
import ProjectInfo from "../components/project/ProjectInfo";
import MediaGallery from "../components/project/MediaGallery";
import ContestantAnswers from "../components/project/ContestantAnswers";

const fetchProject = async (id) => {
    // fetch projects from https://2023.projektbigfoot.de/api/v1/projects
    var response = await fetch(`https://2023.projektbigfoot.de/api/v1/projects/${id}`);
    return await response.json();
}

export default function Project({id}) {
    const [project, setProject] = useState([]);
    const [error, setError] = useState(null);

    const { projectGallery } = project;

    useEffect(() => {
        fetchProject(id).then(project => setProject(project)).catch(error => setError(error));
    }, [id]);

    if (error) {
        return <div style={{padding: "0em 1em 0em 1em"}}>
            <h3>Das Projekt konnte nicht geladen werden:</h3>
            <p>Bitte stellen Sie sicher, dass sie die korrekte Addresse eingegeben haben.</p>
        </div>;
    }

    return (
        <Container style={{padding: "0em 1em 0em 1em"}} fluid={true}>
            <Row>
                <Col md={12} lg={4}>
                    <ProjectInfo project={project}/>

                    <VoteButton/>
                </Col>

                <Col md={12} lg={8}>
                    <ContestantAnswers project={project}/>

                    <MediaGallery projectGallery={projectGallery}/>
                </Col>
            </Row>

        </Container>
    )

}
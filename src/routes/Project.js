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

    const { projectGallery } = project;

    useEffect(() => {
        fetchProject(id).then(project => setProject(project));
    }, [id]);

    return (
        <Container style={{margin: "1em"}} fluid={true}>
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
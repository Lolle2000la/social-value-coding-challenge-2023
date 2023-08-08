import {useEffect, useState} from "react";
import {Button, Col, Container, Row} from "reactstrap";
import VoteButton from "../components/project/VoteButton";
import ProjectInfo from "../components/project/ProjectInfo";
import MediaGalery from "../components/project/MediaGalery";
import ContestantAnswers from "../components/project/ContestantAnswers";

const fetchProject = async (id) => {
    // fetch projects from https://2023.projektbigfoot.de/api/v1/projects
    var response = await fetch(`https://2023.projektbigfoot.de/api/v1/projects/${id}`);
    return await response.json();
}

const styles = {

    contestantAnswerHeader: {
        textAlign: 'left',
        font: 'normal normal normal 24px/30px Signika',
        letterSpacing: '-0.14px',
        color: '#333F55',
        opacity: 1,
    },
    contestantAnswer: {
        textAlign: 'left',
        font: 'normal normal normal 16px/24px Source Sans Pro',
        letterSpacing: '0px',
        opacity: 1,
        marginBottom: '1em'
    }
}

export default function Project({id}) {
    const [project, setProject] = useState([]);

    const {
        _id,
        projectGallery,
        voteCount,
        projectTitle,
        contestantAnswer1,
        contestantAnswer2,
        contestantName
    } = project;

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

                    <MediaGalery projectGallery={projectGallery}/>
                </Col>
            </Row>

        </Container>
    )

}
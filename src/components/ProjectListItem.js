import {Container, Col, Row} from "reactstrap";
import {Link} from "wouter";

const styles = {
    rank: {
        textAlign: 'center',
        font: 'normal normal normal 24px/20px Signika',
        letterSpacing: '0px',
        color: '#333F55',
        opacity: 1,
        padding: "1em"
    },
    voteCount: {
        textAlign: 'center',
        font: 'normal normal normal 14px/15px Signika',
        letterSpacing: '0px',
        color: '#333F55',
        opacity: 1
    },
    voteCountContainer: {
        background: '#F6F6F6 0% 0% no-repeat padding-box',
        padding: "1em"
    },
    item: {
        borderBottom: "0.5px solid #70707050",
        padding: "0"
    },
    rankVotesContainer: {
        borderRight: "0.5px solid #70707050",
        height: "100%",
    },
    contestantName: {
        textAlign: 'left',
        font: 'normal normal 600 16px/24px Source Sans Pro',
        letterSpacing: '0px',
        color: '#212529',
        opacity: 1,
    },
    projectTitle: {
        textAlign: 'left',
        font: 'normal normal normal 14px/24px Source Sans Pro',
        letterSpacing: '0px',
        color: '#212529',
        opacity: 1,
    }
}

export default function ProjectListItem({contestantName, projectTitle, rank, voteCount, _id}) {
    return (
        <Link href={`/projects/${_id}`}>
            <Row className="h-100" noGutters={true} style={{...styles.item, marginLeft: 0, marginRight: 0}}>
                <Col xs="3" md="3" style={{margin: "0px", flexGrow: 1, order: 1}}>
                    <Container style={styles.rankVotesContainer} fluid={true}>
                        <Row className="h-100">
                            <Col xs="12" md="6" className="d-flex align-items-center justify-content-center">
                                <div style={styles.rank}>{rank}.</div>
                            </Col>
                            <Col xs="12" md="6" className="d-flex align-items-center justify-content-center"
                                 style={styles.voteCountContainer}>
                                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                    <div style={styles.voteCount}>{voteCount}</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs="9" md="9" className="d-flex align-items-center" style={{order: 2}}>
                    <div style={{padding: "1em"}}>
                        <h3 style={styles.contestantName}>{contestantName}</h3>
                        <div>{projectTitle}</div>
                    </div>
                </Col>
            </Row></Link>
    )
}
const styles = {
    contestantName: {
        textAlign: 'left',
        font: 'normal normal normal 24px/32px Signika',
        letterSpacing: '0px',
        color: '#333F55',
        opacity: 1,
    },
    projectTitle: {
        textAlign: 'left',
        font: 'normal normal normal 16px/30px Signika',
        letterSpacing: '-0.1px',
        color: '#029ED4',
        opacity: 1,
        marginBottom: '0.5em'
    },
    voteCount: {
        textAlign: 'left',
        font: 'normal normal normal 16px/25px Signika',
        letterSpacing: '0px',
        color: '#029ED4',
        opacity: 1,
        marginBottom: '2em'
    },
}

export default function ProjectInfo({project}) {
    const {contestantName, projectTitle, voteCount} = project;

    return (
        <div>
            <h2 style={styles.contestantName}>{contestantName}</h2>
            <div style={styles.projectTitle}>{projectTitle}</div>
            <div style={styles.voteCount}>{voteCount} Stimmen</div>
        </div>
    )
}
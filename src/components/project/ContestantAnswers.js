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

export default function ContestantAnswers({project}) {
    const {contestantAnswer1, contestantAnswer2} = project;

    return (
        <div>
            <div>
                <h2 style={styles.contestantAnswerHeader}>Das Besondere an unserem Projekt:</h2>
                <p style={styles.contestantAnswer}>{contestantAnswer1}</p>
            </div>

            <div>
                <h2 style={{...styles.contestantAnswerHeader, marginBottom: '1em'}}>Hierfür möchten wir die Spende im
                    Rahmen des Projektes einsetzen:</h2>
                <p style={styles.contestantAnswer}>{contestantAnswer2}</p>
            </div>
        </div>
    );
}
const styles = {
    counter: {
        background: "#333F55 0% 0% no-repeat padding-box",
    },
    counterText: {
        textAlign: 'center',
        font: 'normal normal normal 16px/24px Source Sans Pro',
        letterSpacing: '0px',
        color: '#FFFFFF',
        opacity: 1,
        padding: "0.25em"
    }
}

export default function Counter({count}) {
    return (
        <div style={styles.counter}>
            <div style={styles.counterText}>Noch {count} Tage bis zur Abstimmung</div>
        </div>
    );
}
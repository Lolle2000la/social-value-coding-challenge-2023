import {Button} from "reactstrap";

const styles = {
    voteButton: {
        background: '#029ED4 0% 0% no-repeat padding-box',
        border: '1px solid #029ED4',
        borderRadius: '4px',
        opacity: 1,
        padding: '0.5em',
        width: '100%',
        marginBottom: '0.5em'
    },
    captchyPrivacyMessage: {
        textAlign: 'left',
        font: 'normal normal normal 12px/18px Source Sans Pro',
        letterSpacing: '0.07px',
        color: '#00000080',
        marginBottom: '1em'
    },
}

export default function VoteButton() {
    return (
        <div>
            <Button style={styles.voteButton}>Jetzt abstimmen!</Button>
            <div style={styles.captchyPrivacyMessage}>
                Diese Seite wird durch reCAPTCHA geschützt. Es gelten
                die <a href="#">Datenschutzerklärung</a> und
                die <a href="#">Nutzungsbedingungen</a> von Google.
            </div>
        </div>
    )
}
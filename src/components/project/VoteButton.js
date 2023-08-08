import {Button} from "reactstrap";
import "./VoteButton.css";

const styles = {
    captchyPrivacyMessage: {
        textAlign: 'left',
        font: 'normal normal normal 12px/18px Source Sans Pro',
        letterSpacing: '0.07px',
        color: '#00000080',
        marginBottom: '2em'
    },
}

export default function VoteButton() {
    return (
        <div>
            <Button className="vote-button">Jetzt abstimmen!</Button>
            <div style={styles.captchyPrivacyMessage}>
                Diese Seite wird durch reCAPTCHA geschützt. Es gelten
                die <a href="#">Datenschutzerklärung</a> und
                die <a href="#">Nutzungsbedingungen</a> von Google.
            </div>
        </div>
    )
}
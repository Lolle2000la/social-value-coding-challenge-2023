import {Input} from "reactstrap";
import {BsSearch} from "react-icons/bs";

const styles = {
    searchFilterInputLabel: {
        textAlign: 'left',
        font: 'normal normal normal 16px/20px Signika Variable',
        letterSpacing: '0px',
        color: '#029ED4',
        opacity: 1,
        marginBottom: "0.5em"
    },
    searchFilterInput: {
        '&::placeholder': {
            borderLeft: "none",
        },
        borderLeft: "none",
        paddingLeft: "0em",
    },
    searchIcon: {
        color: "#6C6C6C",
        background: "none",
        borderRight: "none",
        padding: "0.5em",
        letterSpacing: '0px',
    }
}

export default function SearchFilterInput() {
    return <div style={{padding: "1em"}}>
        <div style={styles.searchFilterInputLabel}>Suchen Sie nach einem Teilnehmernahmen</div>
        <div className="input-group">
            <span className="input-group-text" id="basic-addon1" style={styles.searchIcon}><BsSearch/></span>
            <Input type="text" style={styles.searchFilterInput}
                   placeholder="Teilnehmer suchen" aria-label="Teilnehmer suchen"
                   aria-describedby="basic-addon1">
            </Input>
        </div>
    </div>;
}
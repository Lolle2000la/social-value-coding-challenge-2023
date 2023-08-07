import wettbewerbslogo from '../assets/socialvalue-coding-challenge-2023-wettbewerbslogo-200x60.png';
import keyvisualDesktop from '../assets/socialvalue-coding-challenge-2023-keyvisual-1140x360.png';
import keyvisualMobile from '../assets/socialvalue-coding-challenge-2023-keyvisual-720x300.png';
import Counter from "./Counter";

const styles = {
    wettbewerbslogo: {
        margin: "1em",
    },
    keyvisual: {
        width: "100%",
        height: "auto",
    }
}

export default function Header() {
    return (
        <div>
            <Counter count={10}/>
            <img src={wettbewerbslogo} alt="Wettbewerbslogo" style={styles.wettbewerbslogo}/>
            <picture>
                <source media="(max-width: 720px)" srcSet={keyvisualMobile}/>
                <source media="(min-width: 721px)" srcSet={keyvisualDesktop}/>
                <img src={keyvisualDesktop} alt="Keyvisual" style={styles.keyvisual}/>
            </picture>
        </div>
    );
}
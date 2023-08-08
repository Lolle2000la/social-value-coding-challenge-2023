import {Container} from "reactstrap";
import ProjectListItem from "./ProjectListItem";
import SearchFilterInput from "./SearchFilterInput";

export default function ProjectList({projects}) {
    return (
        <div>
            <div style={{padding: "0em 1em 1em 1em", fontSize: "16px"}}>
                <SearchFilterInput />
            </div>
            <Container style={{padding: "0", }} fluid={true}>
                {projects.map((project, index) => <ProjectListItem key={index} {...project} />)}
            </Container>
        </div>
    )
}
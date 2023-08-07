import {Container} from "reactstrap";
import ProjectListItem from "./ProjectListItem";
import SearchFilterInput from "./SearchFilterInput";

export default function ProjectList({projects}) {
    return (
        <div>
            <SearchFilterInput/>
            <Container style={{padding: "0", }}>
                {projects.map((project, index) => <ProjectListItem key={index} {...project} />)}
            </Container>
        </div>
    )
}
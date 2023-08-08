import ProjectList from "../components/ProjectList";
import {useEffect, useState} from "react";

const fetchProjects = async () => {
    // fetch projects from https://2023.projektbigfoot.de/api/v1/projects
    var response = await fetch("https://2023.projektbigfoot.de/api/v1/projects");
    return await response.json();
}

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects().then(projects => setProjects(projects)).catch(error => setError(error));
    }, []);

    if (error) {
        return <div style={{padding: "0em 1em 0em 1em"}}>
            <h3>Die Projekte konnten nicht geladen werden:</h3>
            <p>Ein unerwarteter Fehler ist aufgetreten.</p>
        </div>;
    }

    return (
        <ProjectList projects={projects} />
    )
}
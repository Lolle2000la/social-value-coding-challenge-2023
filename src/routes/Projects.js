import ProjectList from "../components/ProjectList";
import {useEffect, useState} from "react";

const fetchProjects = async () => {
    // fetch projects from https://2023.projektbigfoot.de/api/v1/projects
    var response = await fetch("https://2023.projektbigfoot.de/api/v1/projects");
    return await response.json();
}

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(projects => setProjects(projects));
    }, []);

    return (
        <ProjectList projects={projects} />
    )
}
import { projects } from "../data/projects"

export const ProjectList = (props) => {

    const changeProject = (e) => {
        const modal = document.querySelector('.gallery-modal')
        console.log(modal.classList);
        modal.classList.remove('active')
        setTimeout(() => {
            props.setProject(projects[e.target.id])
            modal.classList.add('active')
        }, 100);
    }

    return projects.map((project) => {
        return <div className="project" id={project.num} key={project.title} onClick={changeProject}>
            <p>{project.img}</p>
        </div>
    })
}
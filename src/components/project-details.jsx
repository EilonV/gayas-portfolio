export const ProjectDetails = (project) => {
    return <div className="gallery-modal flex active">
        <div>
            <h3>{project.project.title}</h3>
            <p>{project.project.desc}</p>
        </div>
        <div>
            {project.project.img}
        </div>
    </div>
}
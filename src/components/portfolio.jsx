import { useState } from "react"
import { ProjectDetails } from "./project-details"
import { ProjectList } from "./project-list"
import { projects } from "../data/projects"

export const Portfolio = () => {
    let [project, setProject] = useState(projects[0])

    return <section id='portfolio' className="portfolio-wrapper full flex column justify-center" >
        <div className="portfolio main-layout" data-aos="fade-down" data-aos-delay="100" data-aos-duration="700">
            <h2>PORTFOLIO</h2>
            <div className="gallery-wrapper flex">
                <div className="gallery">
                    <ProjectList project={project} setProject={setProject} />
                </div>
                <ProjectDetails project={project} />
            </div>
        </div>
    </section>
}
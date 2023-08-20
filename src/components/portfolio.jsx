import { useState } from "react"
import { ProjectDetails } from "./project-details"
import { ProjectList } from "./project-list"
import { projects } from "../data/projects"

export const Portfolio = () => {
    let [project, setProject] = useState(projects[0])

    return <section id='portfolio' className="portfolio-wrapper full flex column" >
        <div className="portfolio main-layout justify-center">
            <h2>PORTFOLIO</h2>
            <div className="gallery-wrapper flex" data-aos="fade-down" data-aos-delay="0" data-aos-duration="700">
                <div className="gallery">
                    <ProjectList project={project} setProject={setProject} />
                </div>
                <ProjectDetails project={project} />
            </div>
        </div>
    </section>
}
import { ChevronsRight } from 'react-feather'
import Link  from 'next/link'

import styles from '../../styles/home/ProjectSection.module.css'

const ProjectSection = (
    { title, description, route }:
    { 
        title: String,
        description: String,
        route: string
    }
) => {
    return (
        <div className={styles['project-section--holder']}>
            <p className={styles['project-section--title']}>{title}</p>
            <p className={styles['project-section--description']}>
                {description}
            </p>
            <a href={route} target="_blank"><span className={styles['project-section--btn']}><ChevronsRight /> Check Project</span></a>
        </div>
    )
}

export default ProjectSection

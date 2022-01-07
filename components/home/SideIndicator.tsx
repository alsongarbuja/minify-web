import { useState, useEffect } from 'react'
import styles from '../../styles/home/SideIndicator.module.css'

const SideIndicator = () => {

    const [currentSection, setCurrentSection] = useState(1)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const currentY = window.pageYOffset
            if(currentY < 500)
                setCurrentSection(1)
            else if(currentY < 1250)
                setCurrentSection(2)
            else if(currentY < 2100)
                setCurrentSection(3)
            else if(currentY < 2800)
                setCurrentSection(4)
            else
                setCurrentSection(5)
        })
    }, [])

    return (
        <div className={styles['side-indicator-holder']}>
            <div className={`${styles['side-indicators']} ${currentSection===1?styles['active-side-indicator']:''}`}
                onClick={() => window.scrollTo(0, 0)}
            ></div>
            <div className={`${styles['side-indicators']} ${currentSection===2?styles['active-side-indicator']:''}`}
                onClick={() => window.scrollTo(0, 750)}
            ></div>
            <div className={`${styles['side-indicators']} ${currentSection===3?styles['active-side-indicator']:''}`}
                onClick={() => window.scrollTo(0, 1500)}
            ></div>
            <div className={`${styles['side-indicators']} ${currentSection===4?styles['active-side-indicator']:''}`}
                onClick={() => window.scrollTo(0, 2240)}
            ></div>
            <div className={`${styles['side-indicators']} ${currentSection===5?styles['active-side-indicator']:''}`}
                onClick={() => window.scrollTo(0, 3000)}
            ></div>
        </div>
    )
}

export default SideIndicator

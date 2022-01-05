import styles from '../../styles/home/ServiceSection.module.css'

import 'aos/dist/aos.css'
import 'aos/dist/aos'

const ServiceSection = (
    { icon, title, duration }
    : { icon: string, title: string, duration: string}
) => {
    return (
        <div className={styles['service-section']} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-cubic" data-aos-duration={duration}>
            <div className={`${styles['service-icon']} flex`}>
                {icon}
            </div>
            <p>{title}</p>
        </div>
    )
}

export default ServiceSection

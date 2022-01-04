
import styles from '../../styles/home/ServiceSection.module.css'

const ServiceSection = (
    { icon, title }
    : { icon: string, title: string }
) => {
    return (
        <div className={styles['service-section']}>
            <div className={`${styles['service-icon']} flex`}>
                {icon}
            </div>
            <p>{title}</p>
        </div>
    )
}

export default ServiceSection


import styles from '../../styles/home/ServiceSection.module.css'

const ServiceSection = (
    { icon, title, description }
    : { icon: string, title: string, description: string}
) => {
    return (
        <div className={styles['service-section']}>
            <div className={styles['service-top']}>
                <img src={icon} alt="icon" /><b>{title}</b>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ServiceSection


import styles from '../../styles/home/TestomonialSection.module.css';

const TestomonialSection = (
    { imageUrl, name, say }
    : {imageUrl: string, name: string, say: string}    
) => {
    return (
        <div className={styles['testomonial-card']}>
            <img src={imageUrl} alt='testomonial person' />
            <div>
                <h4>{name}</h4>
                <p>
                    {say}
                </p>
            </div>
        </div>
    )
}

export default TestomonialSection

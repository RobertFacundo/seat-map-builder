import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Created and designed by {' '}
                <a
                    href="https://github.com/RobertFacundo"
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Facundo Robert
                </a>
            </p>
        </footer>
    )
}

export default Footer;
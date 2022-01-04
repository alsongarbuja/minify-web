
import Link from 'next/link'
import { useRouter } from 'next/router'

import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri'
import { FiArrowUp } from 'react-icons/fi'

import styles from '../styles/layout/Header.module.css'
import classes from '../styles/layout/Footer.module.css'

const Layout = ({ children }) => {

    const { pathname } = useRouter()

    const toTop = () => window.scrollTo(0,0)

    return (
        <>
            {/* <header>
                <div>
                    <span className={styles['logo-holder']}>
                        <img src='/minifylogo.png' alt="minify logo" />
                    </span>
                    <nav>
                        <ul className={styles.navbar}>
                            <Link href='/'>
                                <li className={pathname==='/'?styles['active-menu']:''}>Home</li>
                            </Link>
                            <Link href='/projects'>
                                <li className={pathname==='/projects'?styles['active-menu']:''}>Projects</li>
                            </Link>
                            <Link href='/about'>
                                <li className={pathname==='/about'?styles['active-menu']:''}>About</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header> */}
            <main>
                {children}
            </main>
            {/* <footer className={`${classes['footer']}`}>
                <div className={`${classes['footer-top']} flex container`}>
                    <div className={classes['footer-logo--holder']}>
                        <img src="/minifylogo.png" alt="minify full logo" />
                    </div>
                    <button className={classes['to-top--btn']} onClick={toTop}>
                        <FiArrowUp /> Back to Top
                    </button>
                </div>
                <div className={classes["footer-holder"]}>
                    <div className={classes["social-media--holder"]}>
                        <RiFacebookCircleLine />
                        <a href="https://www.instagram.com/minifyitservice/" target="_blank">
                            <RiInstagramLine />
                        </a>
                    </div>
                    <div className={classes["footer-nav-holder"]}>
                        <ul className={classes["footer-nav"]}>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/projects'>
                                <li>Projects</li>
                            </Link>
                            <Link href='/about'>
                                <li>About</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <p className={classes["copyright-holder"]}>
                    Minify IT services &copy; 2022
                </p>
            </footer> */}
        </>
    )
}

export default Layout

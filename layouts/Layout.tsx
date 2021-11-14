
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/layout/Header.module.css'

const Layout = ({ children }) => {

    const { pathname } = useRouter()

    return (
        <>
            <header>
                <div>
                    <span className={styles['logo-holder']}>
                        <img src='/minify-full.png' alt="minify logo" />
                    </span>
                    <nav>
                        <ul className={styles.navbar}>
                            <Link href='/' className={pathname==='/'?styles['active-menu']:''}>
                                <li>Home</li>
                            </Link>
                            <Link href='/projects' className={pathname==='/projects'?styles['active-menu']:''}>
                                <li>Projects</li>
                            </Link>
                            <Link href='/about' className={pathname==='/about'?styles['active-menu']:''}>
                                <li>About</li>
                            </Link>

                            {/* <div 
                                className={styles['active-menu--indicator']} 
                                styles={
                                    pathname==='/'?{left:'9%'}
                                    :(pathname==='/about'?{left:'77%'}
                                    :pathname==='/projects'?{left:'42%'}:{})
                                }
                            /> */}
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}

export default Layout

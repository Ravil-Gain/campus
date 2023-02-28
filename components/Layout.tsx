import { ReactNode } from "react";
import Header from "./Header"
import Footer from "./Footer";
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.description}>
                    <a
                        href="https://github.com/Ravil-Gain/campus"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p>
                            &nbsp;
                            <code className={styles.code}>Source code</code>
                        </p>
                    </a>
                    <div>
                        <a
                            href="https://www.sorbonne-universite.fr/en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Logo_of_Sorbonne_University.svg/2560px-Logo_of_Sorbonne_University.svg.png"
                                alt="Sorbonne"
                                className={styles.vercelLogo}
                                width={200}
                                height={48}
                                priority
                            />
                        </a>
                    </div>
                </div>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
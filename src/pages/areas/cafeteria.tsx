import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const Library = () => (
    <>
        <Link href="/">
            <h2 >
                <span>&lt;</span> Back
            </h2>
        </Link>
        <div className={styles.grid}>
            <h1>Cafeteria description </h1>
        </div>
    </>
);

export default Library;
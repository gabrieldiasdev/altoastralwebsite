import Head from 'next/head';
import styles from '../styles/License.module.css';
import Header from '../components/Header';
import { Files } from 'phosphor-react';
import Footer from '../components/Footer';
import { GetStaticProps } from 'next';
import { runApi } from '@/libs/runApi';

const License = ({ licenses }: Props) => {
    return (
        <>
            <Head>
                <title>Alto Astral RP | Termos</title>
            </Head>

            <div className={styles.container}>

                <Header />

                <main className={styles.content}>
                    <Files
                        className={styles.licenseIcon}
                        size={176}
                        color="#91b6ff"
                        weight="fill"
                    />
                    <h1 className={styles.licenseTitle}>
                        Termos & Condições
                    </h1>
                    <p className={styles.licenseSubtitle}>
                        Leia com atenção para depois não ocorrer problemas com sua compra.
                    </p>
                    <div className={styles.licenseTextContainer}>
                        <ul className={styles.licenseTextList}>
                            {licenses.map((license: string) => (
                                <li className={styles.licenseTextListItem}>
                                    <p className={styles.licenseText}>
                                        {license}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h3 className={styles.licenseFooterText}>
                        Todos os direitos reservados à Alto Astral
                    </h3>
                </main>

            </div>

            <Footer />

        </>
    );
};

export default License;

type Props = {
    licenses: string[];
}

export const getStaticProps: GetStaticProps = async () => {
    const api = runApi();

    const licenses: string[] = await api.getLicenses();

    return {
        props: {
            licenses,
        },
    };
}
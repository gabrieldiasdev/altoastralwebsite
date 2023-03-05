import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import { imageNamesEnum } from '../types/imageNames.enum';
import ContentCard from '../components/ContentCard';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Head>
                <title>Alto Astral RP | Home</title>
            </Head>
            <div className={styles.container}>
                <Header />
                <Banner
                    title='Faça Parte da Nossa Cidade e divirta-se.'
                    image={imageNamesEnum.rifle}
                    subtitle='Não esqueça de ler as Regras do Servidor.'
                />

                <main className={styles.content}>
                    <div className={styles.leftContent}>
                        <ContentCard
                            flex={0}
                            title='LOJA ONLINE'
                            subtitle='Acesse nossa loja e compre produtos que lhe darão muitos benefícios no jogo, dentre eles , DINHEIRO, PREMIUM, LEVEL, e muito mais , confira agora!'
                            subtitleColor='#B0B0B0'
                            buttons={[
                                {
                                    backgroundColor: '#616161',
                                    text: 'Acessar Loja',
                                    href: 'javascript:void(0);'
                                },
                            ]}
                        />

                        <ContentCard
                            flex={0}
                            title='REDES SOCIAIS'
                            subtitle='Acesse nossas redes sociais e fique por dentro de novidades e informações da cidade rp!'
                            subtitleColor='#FFFFFF'
                            buttons={[
                                {
                                    backgroundColor: '#63D0FF',
                                    text: 'Acessar instagram',
                                    href: 'https://www.instagram.com/altoastralrpmta/'
                                },
                                {
                                    backgroundColor: '#FF3F3F',
                                    text: 'Acessar Youtube',
                                    href: 'javascript:void(0);'
                                },
                            ]}
                        />
                    </div>
                    <ContentCard
                        flex={1}
                        title='DISCORD'
                        subtitle='Conecte-se com outros jogadores!'
                        subtitleColor='#B0B0B0'
                        buttons={[
                            {
                                backgroundColor: '#616161',
                                text: 'Conectar Discord',
                                href: 'https://discord.gg/SJZhHj52gV'
                            },
                        ]}
                        widget={
                            {
                                src: 'https://discord.com/widget?id=844752827518812231&theme=dark',
                                width: '338px',
                                height: '529px',
                            }
                        }
                    />
                </main>
            </div>

            <Footer />
        </>
    );
};

export default Home;
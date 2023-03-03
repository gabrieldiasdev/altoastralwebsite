import styles from './Footer.module.css';
import { YoutubeLogo, InstagramLogo, DiscordLogo, Copyright } from 'phosphor-react';

const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.subContainer}>
                <section className={styles.guidelines}>
                    <h6 className={styles.guidelinesTitle}>
                        ALTO ASTRAL RP
                    </h6>
                    <div className={styles.guidelinesSubTitleContainer}>
                        <Copyright 
                            size={22} 
                            color="#6D6D6C" 
                        />
                        <p className={styles.guidelinesSubTitle}>
                            2021 - 2022 ALTO ASTRAL ROLEPLAY - Todos <br/>
                            os direitos reservados
                        </p>
                    </div>
                </section>

                <section className={styles.socialMedias}>
                    <a 
                        className={styles.socialMediaBlock}
                        href="https://www.youtube.com/channel/UCZSalLHp1WEjxFZrGKyqlSw" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <YoutubeLogo 
                            className={styles.socialMediaIcon}
                            size={24} 
                            color="#FFF" 
                            weight="fill" 
                        />
                    </a>
                    <a 
                        className={styles.socialMediaBlock}
                        href="https://www.instagram.com/alto.astralrp/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <InstagramLogo
                            className={styles.socialMediaIcon}
                            size={24} 
                            color="#FFF" 
                            weight="fill" 
                        />
                    </a>
                    <a 
                        className={styles.socialMediaBlock}
                        href="https://discord.gg/PFugMdaTTS" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <DiscordLogo 
                            className={styles.socialMediaIcon}
                            size={24} 
                            color="#FFF" 
                            weight="fill" 
                        />
                    </a>
                </section>
            </div>
        </footer>
    );
}

export default Footer;
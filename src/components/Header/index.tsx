import styles from './Header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GameController } from 'phosphor-react';
import { ImageComponent } from '../Images';
import { imageNamesEnum } from '../../types/imageNames.enum';

const navigation = [
    { name: "Início", href: "/home" },
    { name: "Termos", href: "/license" },
];

const Header = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.logoSection}>
                <ImageComponent
                    image={imageNamesEnum.logo}
                    alt="logo"
                    width={69}
                    height={69}
                />

                <nav>
                    <ul className={styles.list}>
                        {navigation.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    passHref
                                    legacyBehavior
                                >
                                    <a className={`${router.asPath === item.href && styles.headerLinkActive} ${styles.headerLink}`}>
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <Link
                href={'mtasa://147.135.122.128:22203'}
                target={'_blank'}
                passHref
                legacyBehavior
            >
                <a className={styles.mtaLink}>
                    <GameController size={24} color="#FFF" weight="fill" />
                    147.135.122.128:22203
                </a>
            </Link>
        </div>
    );
};

export default Header;
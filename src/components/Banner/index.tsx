import Link from 'next/link';
import { imageNamesEnum } from '../../types/imageNames.enum';
import { ImageComponent } from '../Images';
import styles from './Banner.module.css'

type Props = {
    title: string;
    image: imageNamesEnum;
    subtitle: string;
}

const Banner = ({ title, image, subtitle }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h3 className={styles.title}>{title}</h3>

                <div>
                    <Link
                        href={"mtasa://147.135.122.128:22203"}
                        target={'_blank'}
                        passHref
                        legacyBehavior
                    >
                        <a className={styles.playButton}>Jogar agora</a>
                    </Link>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
            </div>
            <div className={styles.rightSide}>
                <ImageComponent
                    image={image}
                    alt="Banner Image"
                    width={500}
                    height={300}
                />
            </div>
        </div>
    )
};

export default Banner;
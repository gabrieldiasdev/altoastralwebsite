import Link from 'next/link';
import styles from './ContentCard.module.css';

type buttonProps = {
    backgroundColor: string;
    text: string;
    href?: string;
}

type widgetProps = {
    src: string;
    width: string;
    height: string;
}

type Props = {
    title: string;
    subtitle: string;
    subtitleColor: string;
    buttons: buttonProps[];
    widget?: widgetProps;
    flex: number;
};

const ContentCard = ({ title, subtitle, subtitleColor, buttons, widget, flex }: Props) => {
    return (
        <section 
            className={styles.container}
            style={{ flex, width: widget ? 'auto' : '100%' }}
        >
            <h4 className={styles.title}>
                {title}
            </h4>
            <p
                className={styles.subtitle}
                style={{ color: subtitleColor }}
            >
                {subtitle}
            </p>
            <div className={styles.buttonsContainer}>
                {buttons.map((button) => (
                    <Link
                        key={button.text}
                        href={button.href ? button.href : ':'}
                        passHref
                        legacyBehavior
                    >
                        <a
                            className={styles.button}
                            style={{ backgroundColor: button.backgroundColor }}
                        >
                            { button.text }
                        </a>
                    </Link>
                ))}
            </div>
            {widget &&
                <iframe
                    className={styles.widget} 
                    src={widget.src} 
                    width={widget.width}
                    height={widget.height}
                    frameBorder='0'
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                />
            }
        </section>
    );
};

export default ContentCard;
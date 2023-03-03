import logo from './logo.png'
import rifleGuy from './rifleGuy.png'

import Image from 'next/image';

type Props = {
    image: string;
    alt: string;
    width: number;
    height: number;
}

export const ImageComponent = ({ image, alt, width, height }: Props) => {
    return (
        <>
            {image === 'logo' && <Image src={logo} alt={alt} width={width} height={height} />}
            {image === 'rifle' && <Image src={rifleGuy} alt={alt} width={width} height={height} />}
        </>
    );
}
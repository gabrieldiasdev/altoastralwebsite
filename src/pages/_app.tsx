import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sora } from '@next/font/google'

const sora = Sora({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <main className={sora.className}>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp

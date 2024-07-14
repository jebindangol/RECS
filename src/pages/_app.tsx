import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
    return  (
        <>
        <Head>
            <title></title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <link
                rel="shortcut icon"
                type="image/x-icon"
                href="/img/favicon.png"
            />
            <meta
                http-equiv="Content-Security-Policy"
                content="upgrade-insecure-requests"
            />
            {/* Other head content */}
        </Head>
        <Component {...pageProps}/>
    </>
    )
}

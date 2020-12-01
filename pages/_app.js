import App from 'next/app'
import Head from 'next/head'
import {AppProvider} from '@shopify/polaris'
//import '@shopify/polaris/dist/style.css'
import translations from '@shopify/polaris/locales/en.json'

class MyApp extends App{
    render(){
        const {Components, pageProps} = this.props

        return(
            <React.Fragment>
                <Head>
                    <title>Sample Page</title>
                    <meta charSet="utf-8"></meta>
                </Head>
                <AppProvider i18n={translations}>
                    <Components {...pageProps} />
                </AppProvider>
            </React.Fragment>
        )
    }
}
export default MyApp
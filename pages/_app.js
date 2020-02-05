import App from 'next/app';
import Layout from '../components/Layout';

class MyApp extends App {
   static async getInitialProps({ Component, ctx}) {
            let pageProps = {};
            if (Component.getInitialProps) {
                    pageProps = await Component.getInitialProps(ctx);
            }
            pageProps.query = ctx.query;
            return { pageProps };
   }
   render() {
            const { Component, pageProps } = this.props;

            return(
                <Layout>
                     <Component {...pageProps}/>
                </Layout>
            );
   }
}

export default MyApp;

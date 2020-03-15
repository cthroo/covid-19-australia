import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ApolloProvider} from '@apollo/react-hooks';
import withApolloClient from '../lib/withApollo';
import theme from '../theme/theme';
import './styles.css';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {Component, pageProps, apollo} = this.props;

    return (
      <ApolloProvider client={apollo}>
        <React.Fragment>
          <Head>
            <title>Covid-19</title>
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </React.Fragment>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);

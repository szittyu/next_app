import React from "react"
import '../styles/globals.css'
import { Provider } from "react-redux";
import store from "../redux/configureStore"
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}


export default MyApp;
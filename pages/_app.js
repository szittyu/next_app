import React from "react"
import '../styles/globals.css'
// import { Provider } from "react-redux";
// import store from "../redux/configureStore"
import Layout from '../components/Layout'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}


export default MyApp;
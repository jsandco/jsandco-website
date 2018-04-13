import React              from "react";
import { onPageLoad }     from "meteor/server-render";
import { renderToString } from "react-dom/server";
import { 
  StaticRouter as Router,
  Switch,
  Route
}                         from 'react-router-dom';
import { Provider }       from 'react-redux';
import { storeSSR }       from '/imports/redux/store';

import MainLayout         from "/imports/layouts/MainLayout";
import { Helmet }         from "react-helmet";


onPageLoad(sink => {
  let browser = sink.request.browser.name
  browser = browser.toLowerCase()
  const isMobile = browser.indexOf("mobile") > -1 || browser.indexOf("android") > -1 || browser.indexOf("ios") > -1

  const context = {}

  const initialState = {
    settings: {
      isMobile
    }
  }

  const { path } = sink.request.url;
  const htmlString = renderToString( 
      <Provider store={storeSSR(initialState)}>
        <Router location={ path } context={ context } >
            <MainLayout isMobile={ isMobile } /> 
        </Router>
      </Provider>
    );

    const helmet = Helmet.renderStatic(); // Needs to be called after renderToString

    sink.appendToHead(helmet.title.toString());
    sink.appendToHead(helmet.meta.toString());
    sink.appendToHead(helmet.link.toString());
    sink.renderIntoElementById("root", htmlString);

});

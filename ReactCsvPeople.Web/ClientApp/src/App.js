import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './Layout'
import FileUpload from './Pages/FileUpload'
import Generate from './Pages/Generate';
import Home from './Pages/Home';


export default class App extends Component {
  render () {
    return (
        <Layout>
            <Route exact path='/fileupload' component={FileUpload} />
            <Route exact path='/generate' component={Generate} />
            <Route exact path='/' component={Home}/>
      </Layout>
    );
  }
}

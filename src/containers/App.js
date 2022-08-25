import React, {useState, useEffect} from 'react'
import { BrowserRouter , Route , Link, Redirect } from "react-router-dom" 
import { Router, Switch} from "react-router";
import Unsplash from 'unsplash-js';
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
import Photo from './Photo/Photo';
import PhotoDetailContainer from './PhotoDetailContainer/PhotoDetailContainer';
import styles from '../components/MyModal/PhotoDetail.module.css'



const App = ()=> {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Photo}  /> 
            <Route exact path='/:id' render={ (props) => <PhotoDetailContainer photos={props} />} />   
      </Switch>
    </div>
  );
}

export default App;

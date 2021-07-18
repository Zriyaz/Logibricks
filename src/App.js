import React, {useEffect, useState} from 'react'
import './App.css';
import {ThemeProvider} from "@material-ui/styles"
import {useDispatch, useSelector} from "react-redux"
import theme from "./theme"
import { AppBar,Toolbar,makeStyles } from '@material-ui/core';
import FirstBtnGroup from './components/FirstBtnGroup';
import CheckBox from './components/FirstBtnGroup/CheckBox';
import SecondBtn from "./components/SecondBtn";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "300px",
    height: "70vh",
 },
 lineHeight:{
   height: "100%",
   width :" 35px",
   backgroundColor: "#D8D8D8",
 },
 btnContainer:{
   border: "4px dotted blue",
   borderRadius: "10px",
   width: "200px",
   height: "50%",
 },
 boxContainer:{
   marginTop: "5rem",
   display: "flex",
   justifyContent: "space-between"
 },
 textContainer: {
   padding: "0 3rem"
 }
}))

function App() {
  const [light, setLight] = React.useState(true);
  const {color} = useSelector(state => ({...state}))
  const {isActiveBgColor, BgColor} = color
  const classes = useStyles()
  const defaultBackgroundColor = createTheme({
    palette: {
      background: {
        default: "#fff"
      }
    }
  });
  
  const pannelBgColor = createTheme({
    palette: {
      background: {
        default: `${BgColor}`
      },
      text: {
        primary: "#ffffff"
      }
    }
  });


  return (
    <ThemeProvider theme={isActiveBgColor ?  pannelBgColor : defaultBackgroundColor} >
       <CssBaseline />
      <div className={classes.boxContainer}>
      <div className={classes.textContainer}>
         <h1>Welcome To Our Color Playground</h1>
         <p>You should be try to play once with these buttons.</p>
       </div>
     <div className={classes.container} >
       <div className={classes.btnContainer}>
         <FirstBtnGroup />
         <CheckBox/>
       </div>
       <div className={classes.btnContainer}>
          <SecondBtn />
       </div>
     </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
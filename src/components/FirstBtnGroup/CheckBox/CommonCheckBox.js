import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import {useDispatch} from "react-redux"
const CommonCheckBox = () => {

  const useStyles = makeStyles((theme) => ({
    commonCheckBtn1: {
      color: '#D64B4B',
   },
   commonCheckBtn2: {
    color: `#5E4FDB`,
 },
  commonCheckBtn3: {
    color: `#1ABC9C`,
  },
 }));

  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange1 = (event) => {
   
     if(event.target.checked){
      dispatch({
        type: 'CHANGE_COLOR',
        payload: '#D64B4B'
    })
     }else{
      dispatch({
        type: 'DEFAULT_COLOR',
        payload: ''
    })
     }
  };
  const handleChange2 = (event) => {
    if(event.target.checked){
     dispatch({
       type: 'CHANGE_COLOR',
       payload: '#5E4FDB'
   })
    }else{
      dispatch({
        type: 'DEFAULT_COLOR',
         payload: ''
    })
    }
 };
 const handleChange3 = (event) => {
  if(event.target.checked){
   dispatch({
     type: 'CHANGE_COLOR',
     payload: '#1ABC9C'
 })
  }else{
    dispatch({
      type: 'DEFAULT_COLOR',
      payload: ''
  })
  }
};
    return (
      <>
      <Checkbox
        className={classes.commonCheckBtn1}
        indeterminate
        onClick={handleChange1}
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />
      <Checkbox
        className={classes.commonCheckBtn2}
        onClick={handleChange2}
        icon	={<AddIcon/>}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
      <Checkbox
        className={classes.commonCheckBtn3}
        onClick={handleChange3}
  
        inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
      </>
    )
}

export default CommonCheckBox

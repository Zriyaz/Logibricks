import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const CommonBtn = ({variant, border, handleColorChange, color,textColor,borderLine, colorCode}) => {

  const useStyles = makeStyles((theme) => ({
    commonBtn: {
      width: "150px",
      height: "35px",
      borderRadius: "10px",
      marginBottom: "5px",
      backgroundColor: `${color}`,
      color: `${textColor}`,
      border: borderLine ? borderLine : ''
   },
 }));
  const classes = useStyles()
    return (
       <Button onClick={()=>handleColorChange(colorCode)}  className={classes.commonBtn} variant={`${variant}`} style={ border ? {border: `${border}`} : {} }>
         Button
      </Button>
    )
}
export default CommonBtn

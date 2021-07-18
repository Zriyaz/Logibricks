import React from 'react'
import CommonBtn from './CommonBtn'
import {useDispatch} from "react-redux"

const FirstBtnGroup = () => {
    const dispatch = useDispatch()

    const handleColorChange = (color)=>{
       console.log("ActiveColor", color)
       dispatch({
           type: 'CHANGE_COLOR',
           payload: color
       })
    }
    return (
        <div style={{padding: "20px"}}>
            <CommonBtn handleColorChange={handleColorChange} textColor='#fff' color='#5E4FDB' colorCode='#5E4FDB' variant="contained" />
            <CommonBtn handleColorChange={handleColorChange} textColor='#5E4FDB' colorCode='#5E4FDB' borderLine="1px solid #5E4FDB " variant="outlined" />
            <CommonBtn handleColorChange={handleColorChange} textColor='#5E4FDB' colorCode='#5E4FDB' variant="outlined" border="none" />
        </div>
    )
}

export default FirstBtnGroup

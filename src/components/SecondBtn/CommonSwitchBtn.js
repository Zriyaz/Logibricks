import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useDispatch} from "react-redux"


export default function CommonSwitchBtn({switchColor}) {
  const dispatch = useDispatch()
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 100,
      height: 30,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 5,
      '&$checked': {
        transform: 'translateX(70px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: `${switchColor}`,
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
      '':{
          padding: "3px"
      }
    },
    thumb: {
      width: 20,
      height: 20,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: `${switchColor}`,
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {
      backgroundColor: "pink"
    },
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

      if(state.checkedA && !state.checkedB) {
        dispatch({
          type: 'CHANGE_COLOR',
          payload: switchColor
        })
      }else{
        dispatch({
          type: 'DEFAULT_COLOR',
          payload: ''
        })
      }
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
      />
    </FormGroup>
  );
}
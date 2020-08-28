import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#73D8F1',
    '&$checked': {
      color: '#73D8F1',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

// Inspired by blueprintjs
function StyledCheckbox(props) {
  return (
    <div style={{ marginTop: '1vw', marginBottom: '1vw' }}>
      <GreenCheckbox
        color="default"
        {...props}
      />
    </div>
  );
}

export default StyledCheckbox;
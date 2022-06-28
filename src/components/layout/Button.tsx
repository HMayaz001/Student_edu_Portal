import { Button as MUIButton, Grid, Icon } from '@mui/material';
import React from 'react';

function Button({ onClick }: any) {
  return (
    <div>
      <Grid item>
        <MUIButton
          onClick={onClick}
          variant='outlined'
          style={{
            borderRadius: 5,
            backgroundColor: '#ffffff',
            padding: '4px 15px',
            font: 'Poppins normal 500 14px',
            lineHeight: ' 21px',
            margin: '12px',
            fontSize: '10px',
            color: '#343744',
          }}
        >
          {'+'}
          Add Data
        </MUIButton>
      </Grid>
    </div>
  );
}

export default Button;

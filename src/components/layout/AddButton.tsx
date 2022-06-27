import { Button, Grid, Icon } from '@mui/material';
import React from 'react';

function AddButton({ onClick }: any) {
  return (
    <div>
      <Grid item>
        <Button
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
        </Button>
      </Grid>
    </div>
  );
}

export default AddButton;

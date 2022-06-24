import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

function StudentSummary() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Top Grade
          </Typography>
          <Typography variant='h5' component='div'>
            A
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default StudentSummary;

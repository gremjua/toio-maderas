import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading = () => {
    return (
        <Box
            display="flex"
            width={'100%'}
            height={'100vh'}
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default Loading;

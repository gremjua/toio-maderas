import { Box, Typography } from '@material-ui/core';
import React from 'react';
import ViewProductsButton from './ViewProductsButton';

const NoData = ({ message }) => {
    return (
        <Box
            display="flex"
            width={'100%'}
            height={'100vh'}
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
        >
            <Typography variant="h6">{message}</Typography>
            <ViewProductsButton />
        </Box>
    );
};

export default NoData;

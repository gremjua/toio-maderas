import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import React from 'react';

const ViewProductsButton = () => {
    return (
        <Button component={RouterLink} to="/" variant="outlined">
            Ver productos
        </Button>
    );
};

export default ViewProductsButton;

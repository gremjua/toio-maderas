import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';

const initialValues = {
    buyerName: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    emailConfirm: '',
    phone: '',
};

const requiredValidation = (field, value) => {
    if (typeof value === 'string') {
        return value.trim() === '' ? `${field} es requerido` : null;
    } else {
        return value ? null : `${field} es requerido`;
    }
};

const nameValidation = (fieldName, fieldValue) => {
    if (/[^a-zA-Z -]/.test(fieldValue)) {
        return 'Caracteres inválidos';
    }
    if (fieldValue.trim().length < 3) {
        return `${fieldName} debe contener al menos tres caracteres`;
    }
    return null;
};

const emailValidation = (email) => {
    if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return null;
    }
    return 'Por favor ingrese un email válido';
};

const emailConfirmValidation = (email, emailConfirm) =>
    email === emailConfirm ? null : 'El email y su confirmación son diferentes';

const numberValidation = (field, value) => {
    return typeof parseInt(value) === 'number' ? null : `El campo ${field} debe ser un número`;
};

const phoneValidation = (phone) =>
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(phone) || !phone
        ? null
        : 'Por favor ingrese un teléfono válido';

const validate = {
    buyerName: (name) => requiredValidation('Nombre', name) || nameValidation('Nombre', name),
    address1: (name) => requiredValidation('Calle', name),
    address2: (num) =>
        requiredValidation('Número de calle', num) || numberValidation('Número de calle', num),
    address3: (name) => requiredValidation('Datos adicionales', name),
    city: (name) => requiredValidation('Localidad', name),
    state: (name) => requiredValidation('Estado/Provincia/Región', name),
    zip: (num) =>
        requiredValidation('Código postal', num) || numberValidation('Código postal', num),
    email: (email) => requiredValidation('Email', email) || emailValidation(email),
    emailConfirm: (email) => requiredValidation('Email', email),
    phone: (phone) => phoneValidation(phone),
};

const UserForm = ({ handlePurchase }) => {
    const validateForm = (values) => {
        let errors = Object.keys(values).reduce((errors, field) => {
            const error = validate[field](values[field]);
            return {
                ...errors,
                ...(error && { [field]: error }),
            };
        }, {});
        if (!errors.emailConfirm) {
            const error = emailConfirmValidation(values.email, values.emailConfirm);
            errors = { ...errors, ...(error && { emailConfirm: error }) };
        }
        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            validate={validateForm}
            onSubmit={(values, { setSubmitting }) => {
                handlePurchase(values);
                setSubmitting(false);
            }}
        >
            {({ submitForm, isSubmitting }) => (
                <Form>
                    <Typography variant="h6" gutterBottom>
                        Llená tus datos para el envío
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                required
                                id="buyerName"
                                name="buyerName"
                                label="Nombre completo"
                                fullWidth
                                autoComplete="given-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                component={TextField}
                                required
                                id="address1"
                                name="address1"
                                label="Calle"
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                component={TextField}
                                required
                                id="address2"
                                name="address2"
                                label="Número"
                                type="number"
                                fullWidth
                                autoComplete="shipping address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                component={TextField}
                                required
                                id="address3"
                                name="address3"
                                label="Datos adicionales (piso, depto)"
                                fullWidth
                                autoComplete="shipping address-line3"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                component={TextField}
                                required
                                id="city"
                                name="city"
                                label="Localidad"
                                fullWidth
                                autoComplete="shipping address-level2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                component={TextField}
                                required
                                id="state"
                                name="state"
                                label="Estado/Provincia/Región"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field
                                component={TextField}
                                required
                                id="zip"
                                name="zip"
                                label="Zip / Código postal"
                                type="number"
                                fullWidth
                                autoComplete="shipping postal-code"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                required
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                required
                                id="emailConfirm"
                                name="emailConfirm"
                                label="Confirma tu email"
                                fullWidth
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                component={TextField}
                                id="phone"
                                name="phone"
                                label="Teléfono"
                                fullWidth
                                autoComplete="tel-local"
                            />
                        </Grid>
                    </Grid>
                    <Box padding="2em" display="flex" justifyContent="center" alignItems="center">
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={submitForm}
                            disabled={isSubmitting}
                        >
                            Realizar compra
                        </Button>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};

export default UserForm;

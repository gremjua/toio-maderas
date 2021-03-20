import { Divider, Grid, TextField, Typography } from '@material-ui/core';

const UserForm = ({ handleInputChange }) => {
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Llená tus datos para el envío
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="buyerName"
                        name="buyerName"
                        label="Nombre completo"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Calle"
                        fullWidth
                        autoComplete="shipping address-line1"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address2"
                        name="address2"
                        label="Número"
                        fullWidth
                        autoComplete="shipping address-line2"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address3"
                        name="address3"
                        label="Datos adicionales (piso, depto)"
                        fullWidth
                        autoComplete="shipping address-line3"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Localidad"
                        fullWidth
                        autoComplete="shipping address-level2"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="state"
                        name="state"
                        label="Estado/Provincia/Región"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Código postal"
                        fullWidth
                        autoComplete="shipping postal-code"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="e-mail"
                        fullWidth
                        autoComplete="email"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email-confirm"
                        name="email-confirm"
                        label="Confirma tu e-mail"
                        fullWidth
                        autoComplete="email"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="phone"
                        name="phone"
                        label="Teléfono"
                        fullWidth
                        autoComplete="tel-local"
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default UserForm;

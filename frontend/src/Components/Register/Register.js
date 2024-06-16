import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useUserAuth } from '../../context/UserAuthContext';
import backgroundImage from '../../assets/register-bg.jpg'; // Stellen Sie sicher, dass der Pfad korrekt ist
import { useNavigate } from 'react-router-dom'; // useNavigate aus react-router-dom importieren

const Register = () => {
  const { register } = useUserAuth();
  const { handleSubmit, register: formRegister, formState: { errors } } = useForm();
  const navigate = useNavigate(); // useNavigate verwenden

  const onSubmit = async (data) => {
    try {
      await register(data.email, data.password, data.username); // Hinzufügen des Benutzernamens zur Registrierung
      alert('Erfolgreich registriert! Sie werden zur Startseite weitergeleitet.'); // Beispiel für eine Bestätigungsmeldung
      navigate('/'); // Weiterleitung zur Startseite nach erfolgreicher Registrierung
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      alert('Fehler bei der Registrierung. Bitte versuchen Sie es erneut.'); // Beispiel für Fehlermeldung
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#fff' }}>
          Registrieren
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...formRegister('username', { required: 'Benutzername ist erforderlich' })}
                fullWidth
                label="Benutzername"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...formRegister('email', { required: 'Email ist erforderlich' })}
                fullWidth
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: '5px', mt: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...formRegister('password', { required: 'Passwort ist erforderlich' })}
                fullWidth
                label="Passwort"
                type="password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: '5px', mt: 2 }}
              />
            </Grid>
          </Grid>
          <Box mt={4}>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ borderRadius: '25px' }}>
              Registrieren
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Register;
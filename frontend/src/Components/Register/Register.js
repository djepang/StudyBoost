import React from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useUserAuth } from '../../context/UserAuthContext'; // Stellen Sie sicher, dass der Pfad korrekt ist
import { useNavigate } from 'react-router-dom'; // useNavigate aus react-router-dom importieren

const Register = () => {
  const { register } = useUserAuth();
  const { handleSubmit, register: formRegister, formState: { errors } } = useForm();
  const navigate = useNavigate(); // useNavigate verwenden

  const onSubmit = async (data) => {
    try {
      await register(data.email, data.password, data.username); // Hinzufügen des Benutzernamens zur Registrierung
      alert('Erfolgreich registriert! Sie werden zur Startseite weitergeleitet.'); // Beispiel für eine Bestätigungsmeldung
      navigate('/Home'); // Weiterleitung zur Startseite nach erfolgreicher Registrierung
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      alert('Fehler bei der Registrierung. Bitte versuchen Sie es erneut.'); // Beispiel für Fehlermeldung
    }
  };

  return (
    <div>
      <Header />
    <div>
    <Box
      sx={{
        backgroundSize: 'cover',
        minHeight: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px',
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h1" align="center" gutterBottom sx={{ color: '#fff' }}>
          Registrieren
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <TextField
                {...formRegister('username', { required: 'Benutzername ist erforderlich' })}
                fullWidth
                label="Benutzername"
                variant="outlined"
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                {...formRegister('email', { required: 'Email ist erforderlich' })}
                fullWidth
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: '10px', mt: 4 }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                {...formRegister('password', { required: 'Passwort ist erforderlich' })}
                fullWidth
                label="Passwort"
                type="password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
                sx={{ backgroundColor: '#fff', borderRadius: '10px', mt: 4}}
              />
            </Grid>
          </Grid>
          <Box mt={3}>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ borderRadius: '12px' }}>
              Registrieren
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
    </div>
    <Footer />
  </div>
  
  );
};

export default Register;
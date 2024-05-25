import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';

const topics = [
    'Ahorro e Inversión', 'Criptomonedas', 'Estafa y Fraude', 'Familias', 'Finanzas', 'Hipotecas'
];

const CardsEnd: React.FC = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                paddingTop: { xs: '75%', md: '56.25%' }, // Adjusted aspect ratio for responsiveness
                                borderRadius: '10px',
                                overflow: 'hidden'
                            }}
                        >
                            <video
                                src="/videoFondo.mp4"
                                autoPlay
                                loop
                                muted
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            />
                        </Box>
                    </Grid>
                    

                    <Grid item xs={12} md={6}>
                    <Typography variant="h5" color="red" gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: { xs: "0.8rem", md: "1rem" },
                        textAlign: { xs: 'center', md: 'left' } 

                    }}>
                    TEMAS
                </Typography>
                        <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontFamily: 'Poppins, sans-serif',
                                textAlign: { xs: 'center', md: 'left' } 
                            }}
                        >

                            Infórmate sobre los temas que más te interesan
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: 2,
                                mt: 2,
                                justifyContent: { xs: 'center', md: 'flex-start' } 
                            }}
                        >
                            {topics.map((topic, index) => (
                                <Button
                                    key={index}
                                    variant="contained"
                                    sx={{
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        fontFamily: 'Poppins, sans-serif',
                                        backgroundColor: '#1E88E5',
                                        color: '#ffffff',
                                        minWidth: '170px',
                                        '&:hover': {
                                            backgroundColor: '#1565C0'
                                        }
                                    }}
                                >
                                    {topic}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CardsEnd;

import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const Hero: React.FC = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: "#ffffff" }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "2rem", md: "3rem" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            Empoderando tu Futuro Financiero
                        </Typography>
                        <Typography
                            variant="h5"
                            component="p"
                            gutterBottom
                            sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: { xs: "1rem", md: "1.5rem" },
                                textAlign: { xs: "center", md: "left" },
                            }}
                        >
                            Descubre herramientas, consejos y recursos para tomar el control
                            de tus finanzas personales y alcanzar tus metas.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        }}
                    >
                        <Box sx={{ width: "100%", position: "relative" }}>
                            <img
                                src="/prueba.jpg"
                                alt="Hero"
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    bottom: { xs: '5%', md: '10%' },
                                    left: { xs: '-5%', md: '-5%' },
                                    p: 2,
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                    fontFamily: 'Poppins, sans-serif',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                    width: { xs: '37%', md: 'auto' },
                                    height: { xs: '25%', md: 'auto' },
                                }}
                                elevation={3}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexGrow: 1,
                                    }}
                                >
                                    <img
                                        src="/analysis-icon.png"
                                        alt="Analysis Icon"
                                        style={{ height: 50, maxWidth: "100%" }}
                                    />
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Análisis
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontFamily: "Poppins, sans-serif" }}
                                    >
                                        Reporte de gastos
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: { xs: '5%', md: '10%' },
                                    right: { xs: '-2%', md: '-5%' },
                                    p: 2,
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                    fontFamily: 'Poppins, sans-serif',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                    width: { xs: '37%', md: 'auto' },
                                    height: { xs: '25%', md: 'auto' },

                                }}
                                elevation={3}
                            >
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Objetivos
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontFamily: "Poppins, sans-serif" }}
                                    >
                                        Ahorrar un 20% más
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexGrow: 1,
                                    }}
                                >
                                    <img
                                        src="/iconbank.png"
                                        alt="Goal Icon"
                                        style={{ height: 50, maxWidth: "100%" }}
                                    />
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;

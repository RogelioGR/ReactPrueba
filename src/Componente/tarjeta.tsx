import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar } from '@mui/material';
import SavingsIcon from '@mui/icons-material/Savings';
import FlagIcon from '@mui/icons-material/Flag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';


const data = [
    { icon: <SavingsIcon />, title: "Mis Ahorros", description: "Conoce cuánto dinero podrás acumular en un determinado plazo.", bgColor: "#0F87DF" },
    { icon: <FlagIcon />, title: "Mis objetivos", description: "Conoce cuánto dinero deberás ahorrar para conseguir tus objetivos de capital.", bgColor: "#D00E1C" },
    { icon: <TrendingUpIcon />, title: "Mi estado ahorro-inversión", description: "Evalúa tu comportamiento respecto al ahorro y la inversión.", bgColor: "#0EDDCE" },
    { icon: <CreditCardIcon />, title: "Mis Deudas", description: "Calcula tu límite de endeudamiento con esta herramienta.", bgColor: "#F17B23" },
    { icon: <AccountBalanceWalletIcon />, title: "Mi presupuesto", description: "Crea presupuestos que te permita llevar un control sobre tu dinero.", bgColor: "#D90E83" },
    { icon: <ShoppingCartIcon />, title: "Mis caprichos", description: "Conoce cuánto se puede ahorrar si eliminamos o reducimos gastos.", bgColor: "#321998" },
];

const FinanceTools = () => {
    return (
        <Box p={4}>
            <Container>
                <Typography variant="h5" align="center" color="red" gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: { xs: "0.8rem", md: "1rem" },

                    }}>
                    HERRAMIENTAS
                </Typography>
                <Typography variant="h4" align="center" gutterBottom
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                        fontSize: { xs: "1.4rem", md: "3rem" },

                    }}>
                    Utiliza nuestras herramientas para aprender a manejar tus finanzas.
                </Typography>
                <Box py={4}>
                    <Grid container spacing={3}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ padding: '20px', boxShadow: 3 ,  borderRadius: 4}}>
                                    <CardContent>
                                        <Avatar sx={{ backgroundColor: item.bgColor, margin: '0 auto 10px auto' }}>
                                            {item.icon}
                                        </Avatar>
                                        <Typography variant="h6" align="center"
                                            sx={{
                                            fontWeight: "bold",
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: { xs: "0.8rem", md: "1rem" },
                    
                                        }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" align="center" color="textSecondary"
                                            sx={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: { xs: "0.8rem", md: "0.8rem" },
                                        }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default FinanceTools;
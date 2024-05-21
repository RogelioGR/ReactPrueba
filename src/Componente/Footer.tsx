import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2" color="text.secondary" align="left">
              © {new Date().getFullYear()} Educacion Financiera. Derechos reservados.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

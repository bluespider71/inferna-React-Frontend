import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <div class="footer">
            <b> Follow us on </b>
            <div class="icons">
                <Link href="https://www.instagram.com/inferna.io/" target="_blank" class="social"><i
                    class="fab fa-instagram"></i></Link>
                <Link href="https://twitter.com/astroinferna" target="_blank" class="social"><i
                    class="fab fa-twitter-square"></i></Link>
                <Link href="https://linkedin.com/company/astroinferna/" target="_blank" class="social"><i
                    class="fab fa-linkedin"></i></Link>
                <Link href="https://www.instagram.com/inferna.io/" target="_blank" class="social"><i
                    class="fab fa-telegram"></i></Link>
                <Link href="https://twitter.com/astroinferna" target="_blank" class="social"><i class="fab fa-discord"></i></Link>
            </div>
        </div>
    );
};

export default Footer;

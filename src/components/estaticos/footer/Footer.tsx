import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Typography, Grid, Link, Box } from '@material-ui/core';
import './Footer.css'
import { WhatsApp } from '@mui/icons-material';




function Footer() {
    return (

        <>
            <Grid className='class="w3hubs-footer' container direction="row" justifyContent="center" alignItems="center">

                <footer className="footer-distributed">

                    <div className="footer-left cursor logo">



                        <p className="footer-company-about">
                            <span>Siga as nossas redes</span>
                        </p>

                        <div className="footer-icons">
                           <a href="https://github.com/HenriqueMarts"> <FacebookIcon /></a> 
                           <a href="https://github.com/HenriqueMarts"> <InstagramIcon /></a> 
                           <a href="https://github.com/HenriqueMarts"> <LinkedInIcon /></a> 
                           <a href="https://github.com/HenriqueMarts"> <TwitterIcon /></a> 

                        </div>

                        <p className="footer-company-name">Hertz Company © 2022</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>Est. Itanhangá 1755</span> Jacarépagua, Rio de Janeiro</p>
                        </div>

                        <div>
                            <i className="fa fa-phone"></i>
                            <p>+55(21)97957-9347</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="contato.hertz.ecommerce@gmail.com">contato.hertz.ecommerce@gmail.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>Sobre a Empresa</span>
                            Somos uma StatUp no ramo de energia limpa, temos como misão a acessibilidade de energia renovável para todos!
                        </p>



                    </div>

                </footer>
            </Grid>
        </>
    )
}

export default Footer;
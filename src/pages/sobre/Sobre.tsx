import { Grid } from "@mui/material";
import Avatar from '@material-ui/core/Avatar'
import React from "react";
import './Sobre.css'
import FotoFran from '../img/letraFran.png'
import FotoTay from '../img/letraTai.png'

function Sobre() {
    return (
        <Grid className="container">
            <Grid item xs={12} paddingX={5}>
                <h1>
                    Sobre nós
                </h1> <p>
                    A  HERTZ é uma empresa de engenharia elétrica que oferece diversas estratégias com base na gestão inteligente da energia elétrica, atuando com responsabilidade e ética profissional e empresarial.

                    O corpo técnico da empresa é composto por eletricistas, eletrotécnicos e engenheiros, que asseguram conformidade técnica, qualidade e o menor custo de implementação.

                    A empresa presta assessoria durante todas as etapas de negociação, sendo uma parceira dos clientes que buscam uma relação de confiança e fidelidade.
                </p>
            </Grid>
            

            <Grid xs={12} className='img'>
            </Grid>
        </Grid>
    );
}

export default Sobre;
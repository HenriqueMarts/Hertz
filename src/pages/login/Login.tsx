import React, { useState, ChangeEvent, useEffect }  from 'react';
import { Button, Grid, Input, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css'

function Login() {

    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>({
        usuario: '',
        senha: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            navigate('/home');
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await login('/auth/logar', userLogin, setToken)
            alert('Usuario logado com sucesso!')
        } catch (erro) {
            alert('Dados incorretos!')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' >
                <Box marginTop={5} marginRight={100}>
                <div className='div1'>
  <h4 className="title">Entrar</h4>
                  <form onSubmit={onSubmit}>
                    <div >
                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    </div>
                    <div>
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                    </div> 
                        <Box marginTop={2} textAlign='center' className='bnt'>
                            <Button  type='submit'>
                                Logar
                            </Button>
                        </Box>
                    </form>

                    <Box  className='btn-link' display='flex' justifyContent='center' marginTop={2}>
                        <Box >
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography><Link to='/cadastrar'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                        </Box>
                        
                    </Box></div>
                </Box>
            </Grid>
            
       
    );
}

export default Login;
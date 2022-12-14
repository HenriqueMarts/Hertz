import React from "react";
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import { Button, FormControl, Input, InputAdornment, InputLabel, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Logo from "../../../pages/img/logo.png"


function Navbar() {

  const [token, setToken] = useLocalStorage('token');
  const navigate = useNavigate();

  function goLogout() {
    setToken('')
    navigate("/login")
  }

  return (
    <>
      <AppBar position="static" className="fund">
        <Toolbar variant="dense">
          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className='cursor logo'>
                <div ><img src={Logo} /></div>
              </Box>
            </Link>

            <Link to="/sobre" className="text-decorator-none">
              <Box mx={1} className='cursor meio'>
                <button className="cta"><span className="hover-underline-animation"> Sobre </span></button>
              </Box>
            </Link>

            <Link to="/produtos" className="text-decorator-none">
              <Box mx={1} className='cursor meio'>
                <button className="cta"><span className="hover-underline-animation"> Produtos </span></button>
              </Box>
            </Link>

            <Link to="/cadastrarProdutos" className="text-decorator-none">
              <Box mx={1} className='cursor meio'>
                <button className="cta"><span className="hover-underline-animation"> Cadastrar Produtos </span></button>
              </Box>
            </Link>

            <Link to="/categorias" className="text-decorator-none">
              <Box mx={1} className='cursor meio'>
                <button className="cta"><span className="hover-underline-animation"> Categorias </span></button>
              </Box>
            </Link>

            <Link to="/cadastrarCategoria" className="text-decorator-none">
              <Box mx={1} className='cursor meio'>
                <button className="cta"><span className="hover-underline-animation"> Cadastrar Categorias </span></button>
              </Box>
            </Link>

            <Box mx={1} className='cursor meio' onClick={goLogout}>

              <button className="cta"><span className="hover-underline-animation"> Sair</span></button>
            </Box>

          </Box>

        </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar;
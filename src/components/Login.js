import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../index';
// import firebase from "firebase/compat/app";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


function Login() {
  const { auth } = useContext(Context);

  const login = async () => {        
      const provider = new GoogleAuthProvider()
      const { user } = await signInWithPopup(auth, provider)
      console.log(user);
  };
  return ( 
    <Container>
      <Grid container
        style={{height: window.innerHeight - 50}}
        alignItems={'center'}
        justifyContent={"center"}
        >
          <Grid style={{width:400, background:'#1976d2'}}
            container
            alignItems={'center'}
            direction={'column'}
          >
            <Box p={5}>
              <Button onClick={login} variant="contained">Войти c помощью Google</Button>
            </Box>
          </Grid>
      </Grid>
    </Container>
   );
}

export default Login;
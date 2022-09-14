import './App.css';
import { amber } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[500],
      },
      secondary: {
        main: '#F2CC8F',
      }

    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{maxWidth: 350, color: 'white', backgroundColor: 'black'}}>
        <CardMedia sx={{maxWidth: 150}} component='img' scale='0.5' image='https://play-lh.googleusercontent.com/-u-oG-Ni_pco9h7zc3CQl-lFkKJjztO3RGZMjnbaDiznnbXoMQZYUjITHN0BVxYHBg'></CardMedia>
        <CardContent>Hello</CardContent>
      </Card>
      <Box class='boxed' type='form'>
          
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
      <h1>Hello There!</h1>
      <Button variant='outlined' color='warning'>dsad</Button>
      <Button variant='contained' color='secondary'>Pnsa</Button>

    </ThemeProvider>    

    
    
  );
}

export default App;

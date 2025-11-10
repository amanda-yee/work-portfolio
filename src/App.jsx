import Home from './components/Home'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
      typography: {
        fontFamily: 'DotGothic16, monospace, sans-serif', 
      },
    });

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App

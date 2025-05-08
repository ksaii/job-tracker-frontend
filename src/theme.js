import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2962FF', // A modern, vibrant blue
    },
    secondary: {
      main: '#448AFF', // A slightly lighter blue for accents
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White paper for cards
    },
    text: {
      primary: '#212121', // Dark gray text
      secondary: '#424242', // Slightly lighter gray text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 'bold' },
    h6: { fontSize: '1.2rem', fontWeight: 'normal' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#82B1FF', // A lighter, more vibrant blue for dark mode
    },
    secondary: {
      main: '#448AFF',
    },
    background: {
      default: '#121212', // Dark gray background
      paper: '#1e1e1e', // Darker gray for cards
    },
    text: {
      primary: '#eeeeee', // Off-white text
    },
  },
  typography: lightTheme.typography,
});
export default lightTheme;
export { darkTheme };

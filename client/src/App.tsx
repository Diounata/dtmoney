import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      
      
      <GlobalStyles />
    </ThemeProvider>
  );
}

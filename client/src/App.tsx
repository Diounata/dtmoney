import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';

import { Header } from './components/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      
      <GlobalStyles />
    </ThemeProvider>
  );
}

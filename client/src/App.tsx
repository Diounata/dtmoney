import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';

import { Header } from './components/Header';
import { CardsContainer } from './components/Header/styles';
import { Card } from './components/Card';
import { MoneyListing } from './components/MoneyListing/';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <CardsContainer>
        <Card type="INCOME" />
        <Card type="OUTCOME" />
        <Card type="TOTAL" />
      </CardsContainer>

      <main>
        <MoneyListing />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  );
}

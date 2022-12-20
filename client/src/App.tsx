import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import theme from './theme';

import { Header } from './components/Header';
import { CardsContainer } from './components/Header/styles';
import { Card } from './components/Card';
import { MoneyListing } from './components/MoneyListing/';
import { CreateTransactionModal } from './components/CreateTransactionModal';

import { ModalProvider } from './contexts/ModalContext';
import { TransactionProvider } from './contexts/TransactionContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <TransactionProvider>
          <Header />

          <CardsContainer>
            <Card type="income" />
            <Card type="outcome" />
            <Card type="total" />
          </CardsContainer>

          <main>
            <MoneyListing />
          </main>

          <CreateTransactionModal />
          <GlobalStyles />
        </TransactionProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

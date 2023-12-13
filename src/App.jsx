import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import InputField from './components/InputField';
import InputTextarea from './components/InputTextarea';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <InputTextarea />
      <InputField />
    </ThemeProvider>
  );
}

export default App;

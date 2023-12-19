import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import HomePage from './pages/HomePage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionFeedPage from './pages/QuestionFeedPage';
import AnswerPage from './pages/AnswerPage';
import UserProvider from './utils/contexts/user';
import QuestionsProvider from './utils/contexts/questions';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserProvider>
        <QuestionsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/list" element={<QuestionListPage />} />
              <Route path="/post/:id" element={<QuestionFeedPage />} />
              <Route path="/post/:id/answer" element={<AnswerPage />} />
            </Routes>
          </BrowserRouter>
        </QuestionsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;

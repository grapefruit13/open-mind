import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import GlobalStyle from './GlobalStyle';
import UserProvider from './utils/contexts/UserProvider';
import QuestionsProvider from './utils/contexts/QuestionsProvider';
import ShareButtonProvider from './utils/contexts/ShareButtonProvider';

const HomePage = lazy(() => import('./pages/HomePage'));
const QuestionListPage = lazy(() => import('./pages/QuestionListPage'));
const QuestionFeedPage = lazy(() => import('./pages/QuestionFeedPage'));
const AnswerPage = lazy(() => import('./pages/AnswerPage'));

export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <QuestionsProvider>
          <ShareButtonProvider>
            <BrowserRouter>
              <Suspense>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/list" element={<QuestionListPage />} />
                  <Route path="/post/:id" element={<QuestionFeedPage />} />
                  <Route path="/post/:id/answer" element={<AnswerPage />} />
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </ShareButtonProvider>
        </QuestionsProvider>
      </UserProvider>
    </>
  );
}

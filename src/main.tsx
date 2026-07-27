import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TitleUpdater from './components/TitleUpdater.tsx';
import App from './App.tsx';
import './index.css';
import './styles/animations.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TitleUpdater />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);

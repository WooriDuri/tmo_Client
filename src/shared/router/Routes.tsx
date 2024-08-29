import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import ChampListPage from '@/pages/ChampListPage';
import ChampDetailPage from '@/pages/ChampDetailPage';
import ChampVersusPage from '@/pages/ChampVersusPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomePage />} />
      <Route path='/champ-list' element={<ChampListPage />} />
      <Route path='/champ/:id' element={<ChampDetailPage />} />
      <Route path='/champ/:id/versus/:vid' element={<ChampVersusPage />} />
    </Route>
  )
);

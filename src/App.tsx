import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import getArticles from 'libs/api/getArticles';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ProjectsScreen from './screens/ProjectsScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    loader: async () => getArticles(),
  },
  {
    path: '/about',
    element: <AboutScreen />,
    loader: async () => 'hello',
  },
  {
    path: '/articles',
    element: <ArticlesScreen />,
    loader: async () => getArticles(),
  },
  {
    path: '/projects',
    element: <ProjectsScreen />,
    loader: async () => 'hello',
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;

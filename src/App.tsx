import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ArticlesScreen from './screens/ArticlesScreen';
import ArticleViewerScreen from './screens/ArticleViewerScreen';
import ProjectsScreen from './screens/ProjectsScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
  {
    path: '/about',
    element: <AboutScreen />,
  },
  {
    path: '/article/:articleId',
    element: <ArticleViewerScreen />,
  },
  {
    path: '/articles',
    element: <ArticlesScreen />,
  },
  {
    path: '/projects',
    element: <ProjectsScreen />,
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;

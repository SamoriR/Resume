import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    loader: async () => 'hello',
  },
  {
    path: '/projects',
    element: <ProjectsScreen />,
    loader: async () => 'hello',
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;

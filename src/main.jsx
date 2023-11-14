import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Error from './pages/Error';
import Hero from './pages/Hero';
import Bio from './pages/Bio';
import ResumeMain from './pages/ResumeMain';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Hero />,
          },
          {
            path: '/Bio',
            element: <Bio />,
          },
          {
            path: '/Resume',
            element: <ResumeMain />,
          },
          {
            path: '/Portfolio',
            element: <Portfolio />,
          },
          {
            path: '/Contact',
            element: <Contacts />,
          },
        ],
      },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);

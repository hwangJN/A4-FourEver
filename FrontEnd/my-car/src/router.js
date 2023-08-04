import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Mycar from './mycar/Mycar';
import Trim from './mycar/routers/Trim';
import Archiving from './archiving/Achiving';
import Mychiving from './mychiving/Mychiving';
import Engine from './mycar/routers/Engine';
import WheelDrive from './mycar/routers/WheelDrive';
import Login from './login/Login';
import fetchOption from './api';
import fetchData from './api';
import BodyType from './mycar/routers/BodyType';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'mycar',
        element: <Mycar />,
        children: [
          {
            path: 'trim',
            children: [
              {
                path: 'model',
                loader: fetchData,
                element: <Trim />,
              },
              {
                path: 'engine',
                // loader: fetchOption,
                element: <Engine />,
              },
              {
                path: 'bodytype',
                // loader: fetchOption,
                element: <BodyType />,
              },
              {
                path: 'wheeldrive',
                // loader: fetchOption,
                element: <WheelDrive />,
              },
            ],
          },
        ],
      },
      {
        path: 'achieving',
        element: <Archiving />,
        children: [],
      },
      {
        path: 'mychiving',
        element: <Mychiving />,
        children: [],
      },
    ],
  },
]);

export default router;

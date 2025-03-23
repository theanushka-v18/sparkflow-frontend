import { createBrowserRouter } from 'react-router-dom';
import { RoutePaths } from './routePath';
import Layout from '../layouts/Layout';
import Home from '../pages/Home/Home';
import Courses from '../pages/Courses/Courses';
import Lab from '../pages/Lab/Lab';
import CommunitySupport from '../pages/CommunitySupport/CommunitySupport';
import InternshipPortal from '../pages/InternshipPortal/InternshipPortal';
import BecomeAnAffiliate from '../pages/BecomeAnAffiliate/BecomeAnAffiliate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // The shared layout component
    children: [
      {
        path: RoutePaths.home,
        element: <Home />,
      },
      {
        path: RoutePaths.courses,
        element: <Courses />,
      },
      {
        path: RoutePaths.lab,
        element: <Lab />,
      },
      {
        path: RoutePaths.internshipPortal,
        element: <InternshipPortal />,
      },
      {
        path: RoutePaths.becomeAnAffiliate,
        element: <BecomeAnAffiliate />,
      },
      {
        path: RoutePaths.communitySupport,
        element: <CommunitySupport />,
      },
    ],
  },
]);

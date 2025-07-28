// routes.ts
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  isProtected?: boolean;
  allowedRoles?: string[];
  title?: string;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    isProtected: true,
    title: 'Home'
  },
  {
    path: '/login',
    element: <Login />,
    title: 'Login'
  },
  // ... other routes
];

export const renderRoutes = (isAuthenticated: boolean, userRole: string) => {
  return routes.map((route) => {
    if (route.isProtected && !isAuthenticated) {
      return {
        ...route,
        element: <Navigate to="/login" state={{ from: route.path }} replace />
      };
    }
    if (route.allowedRoles && !route.allowedRoles.includes(userRole)) {
      return {
        ...route,
        element: <Navigate to="/unauthorized" replace />
      };
    }
    return route;
  });
};
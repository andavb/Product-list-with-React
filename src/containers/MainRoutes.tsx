import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

//Containers
const NavBar = React.lazy(() => import('../components/NavBar'));
const ProductsPage = React.lazy(() => import('./ProductsPage'));
const NotFound = React.lazy(() => import('./NotFoundPage'));

const Loading = () => <p>Loading ...</p>;

const MainRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading... </div>}>
        <NavBar />
        <Router>
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<ProductsPage />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </React.Suspense>
        </Router>
      </Suspense>
    </div>
  );
};
export default MainRoutes;

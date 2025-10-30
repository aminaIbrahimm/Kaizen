import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Dashboard /> }, // make Dashboard the default route
        { path: 'dashboard', element: <Dashboard /> },
      ],
    },
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App

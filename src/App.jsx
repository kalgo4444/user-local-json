import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Home from './pages/home/Home'
import Student from './pages/student/Student'
import NotFound from './pages/notFound/NotFound'

const App = () => {
  return (
    <>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: '/student/:id',
              element: <Student />,
            },
          ],
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ])}
    </>
  )
}

export default React.memo(App)

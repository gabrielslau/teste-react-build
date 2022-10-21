import React from 'react'
import { Switch } from 'react-router-dom'
import loadable from '@loadable/component'
import SigaWebRoute from './SigaWebRoute'

const PageHome = loadable(() => import('./Pages/PageHome'))
const Page1 = loadable(() => import('./Pages/Page1'))
const Page2 = loadable(() => import('./Pages/Page2'))

const AppRouter = () => {
  return (
    <Switch>
      <SigaWebRoute
        titulo='Página inicial'
        path='/'
        component={PageHome}
        exact
      />

      <SigaWebRoute
        titulo='Página 1'
        path='/page-1'
        component={Page1}
        exact
      />

      <SigaWebRoute
        titulo='Página 2'
        path='/page-2'
        component={Page2}
        exact
      />
    </Switch>
  )
}

export default AppRouter

import React from 'react'
import { NavLink, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouter from './AppRouter'
import AppForm from './AppForm'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  className='navbar-item'
                  activeClassName='is-active'
                  to='/'
                  exact
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className='navbar-item'
                  activeClassName='is-active'
                  to='/page-1'
                  exact
                >
                  Page 1
                </NavLink>
              </li>

              <li>
                <NavLink
                  className='navbar-item'
                  activeClassName='is-active'
                  to='/page-2'
                  exact
                >
                  Page 2
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <AppForm />

        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App

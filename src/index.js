import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  const $app = document.getElementById('app')

  if ($app) {
    ReactDOM.render(
      <App />,
      $app
    )
  }
})

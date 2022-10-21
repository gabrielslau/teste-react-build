import React, { ReactElement, useEffect } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { LoadableComponent } from '@loadable/component'

interface ISigaWebRoute extends RouteProps {
  titulo?: string,
  exibir?: boolean,
  funcionalidade?: string,
  funcionalidadeTipoAcesso?: number,
  component: React.FunctionComponent<RouteProps> | LoadableComponent<RouteProps>
}

const HeaderTitle = (props: { titulo?: string }): null => {
  useEffect(() => {
    if (props.titulo) {
      window.document.title = 'SIGA - ' + props.titulo
      return
    }

    window.document.title = 'SIGA - ' + window.location.pathname
  }, [])

  return null
}

const SigaWebRoute = (props: ISigaWebRoute): ReactElement => {
  const { component: Component, ...rest } = props

  return (
    <Route
      {...rest}
      render={routeProps => (
        <>
          <HeaderTitle titulo={props.titulo} />
          <Component {...routeProps} />
        </>
      )}
    />
  )
}

export default SigaWebRoute

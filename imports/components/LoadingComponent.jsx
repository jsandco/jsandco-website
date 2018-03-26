import React                from 'react'
import {
  Loader,
  Dimmer
} from "semantic-ui-react"

const LoadingComponent = ({ message }) =>
  <Dimmer active>
    <Loader content={ message || "Chargement en cours"}/>
  </Dimmer>;

export default LoadingComponent

import React, {useContext} from 'react'
import './styles/Shield.css'
import { ShieldContext } from '../context/shield/shieldContext';

export const Shield = (props) => {

  const {shield, hide} = useContext(ShieldContext)

  if(!shield.visible){
    return null
  }

  return (<div id="shield"></div>)
}



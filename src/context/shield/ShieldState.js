import React, {useReducer} from 'react'
import { ShieldContext } from './shieldContext';
import { shieldReducer } from './shieldReducer';
import { SHOW_SHIELD, HIDE_SHIELD } from '../types'

export const ShieldState = ({children}) => {
	const [state, dispatch] = useReducer(shieldReducer, {visible:false})

	const show = () => dispatch({type: SHOW_SHIELD})
	const hide = () => dispatch({type: HIDE_SHIELD})

	return (
		<ShieldContext.Provider value={{show, hide, shield: state}}>
			{children}
		</ShieldContext.Provider>
	)
}


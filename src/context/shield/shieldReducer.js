import { SHOW_SHIELD, HIDE_SHIELD } from '../types'

const handlers = {
  [SHOW_SHIELD]: state => ({...state, visible: true}),
  [HIDE_SHIELD]: state => ({...state, visible: false}),
  DEFAULT: state => state
}

export const shieldReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT

  return handle(state, action)
}
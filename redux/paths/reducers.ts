import {START_PATHNAME, SET_CURRENT_PATHNAME} from './constants'
import {ReduxActions} from "../../interfaces/default";

const INIT_STATE = {
	startPathname: '',
	currentPathname: ''
}

type State = { startPathname: string, currentPathname: string }

const Paths = (state: State = INIT_STATE, action: ReduxActions) =>
{
	switch (action.type)
	{
		case START_PATHNAME:
			return {...state, startPathname: action.payload}

		case SET_CURRENT_PATHNAME:
			return {...state, currentPathname: action.payload}

		default:
			return {...state}
	}
}

export default Paths

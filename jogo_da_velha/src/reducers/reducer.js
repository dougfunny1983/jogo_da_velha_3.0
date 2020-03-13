import { GET_A_CLICK, RELOADER } from '../actions/action';

export const intialState = { squares: Array(9).fill(null), selected: true };
export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_A_CLICK:
      return {
        ...state,
        squares: [...state.squares],
        selected: !state.selected,
      };
      case RELOADER:
      return {
        squares: Array(9).fill(null),
        selected: true,
      };
    default:
      return state;
  }
};

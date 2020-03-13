import GET_A_CLICK from "../actions/action";

const intialState = { squares: Array(9).fill(null), selected: true };
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_A_CLICK:
      return { ...state,  
        squares: [...state.squares],
        selected: !state.selected
    };
    default:
      return state;
  }
};
export default reducer;

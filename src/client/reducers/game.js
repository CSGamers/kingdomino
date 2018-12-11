import * as types from '../actions/actionTypes';
  


const initialState = {
  unusedPieces: [],
  currPieces: [],
  nextPieces: [],
  board: [
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
  ]
}


  const gameReducer = (state = initialState, action) => {

    switch (action.type) {
      case types.PLACE_PIECE: {
        console.log('action', action);

        const newBoard = JSON.parse(JSON.stringify(state.board));


        return {
          ...state,
          board: newBoard,
        }
      }

      default: 
        return state
    }
  }

export default gameReducer;
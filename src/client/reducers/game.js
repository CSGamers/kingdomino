import * as types from '../actions/actionTypes';
  


const initialState = {
  unusedPieces: [],
  currPieces: [],
  nextPieces: [],
  currPlayer: '',
  board1: [
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {},
  ],
  board2: [
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

      case types.SHUFFLE_PIECES: {
        console.log('action', action);

        const nums = Array.apply(null, {length: 49}).map(Number.call, Number);

        function shuffle(a) {
          for (let i = a.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * (i + 1));
              [a[i], a[j]] = [a[j], a[i]];
          }
          return a;
        }
        
        const shuffledNums = shuffle(nums);

        return {
          ...state,
          unusedPieces: shuffledNums,
        }

      }

      default: 
        return state
    }
  }

export default gameReducer;
import * as types from '../actions/actionTypes';
  


const initialState = {
  unusedPieces: [],
  currPieces: [],
  nextPieces: [],
  currPlayer: '',
  pieceToPlay: [],
  boards: {
    board1: [
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {color: 'black'}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
    ],
    board2: [
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {color: 'black'}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {},
    ]
  }
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
        nums.shift();

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

      case types.POPULATE_NEXT: {
        console.log('action', action);

        const leftOverPieces = state.unusedPieces.slice();

        const next4 = leftOverPieces.splice(-4);

        return {
          ...state,
          unusedPieces: leftOverPieces,
          nextPieces: next4,
        }
      }

      case types.POPULATE_CURR: {
        console.log('action', action);

        return {
          ...state,
          currPieces: state.nextPieces,
          nextPieces: [],
        }
      }

      case types.QUEUE_PIECE: {
        console.log('action', action);

        let currPieces = state.currPieces.slice();
        let pieceToPlay = currPieces.shift();

        return {
          ...state,
          currPieces: currPieces,
          pieceToPlay: pieceToPlay
        }
      }

      case types.CHOOSE_STARTING_PLAYER: {
        console.log('action', action);
        let rand = Math.floor(Math.random() * Math.floor(2) + 1);

        return {
          ...state,
          currPlayer: rand,
        }
      }

      default: 
        return state
    }

    
  }

export default gameReducer;
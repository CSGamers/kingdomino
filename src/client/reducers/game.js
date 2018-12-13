import * as types from '../actions/actionTypes';
import DOMINOS from '../DOMINOS.json'
import { chooseStartingPlayer } from '../actions/actions';
  


const initialState = {
  unusedPieces: [],
  currPieces: [],
  nextPieces: [],
  currPlayer: '',
  pieceToPlay: { piece: 0, orientation: 'horizontal', inverted: false },
  message: `Click Start to Begin`,
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
      case types.TALLY_SCORE: {
        console.log('action', action);

        const newBoards = JSON.parse(JSON.stringify(state.boards));

        function tallyBoardScore(board) {
          let total = 0;

          for (let i = 0; i < 49; i++) {
            let count = 0;
            let crowns = 0;
            if (!board[i].seen && board[i].color !== 'black') checkPiece(i);

            function checkPiece(num) {
              board[num].seen = true;
              if (board[num].color) {
                count += 1;
                crowns += board[num].crowns

                if (board[num+1] && !board[num+1].seen) {
                  if (board[num+1].color === board[num].color) {
                    checkPiece(num+1);
                  }
                }
                if (board[num-1] && !board[num-1].seen) {
                  if (board[num-1].color === board[num].color) {
                    checkPiece(num-1);
                  }
                }
                if (board[num-7] && !board[num-7].seen) {
                  if (board[num-7].color === board[num].color) {
                    checkPiece(num-7);
                  }
                }
                if (board[num+7] && !board[num+7].seen) {
                  if (board[num+7].color === board[num].color) {
                    checkPiece(num+7);
                  }
                }
              }
            }
            total += (count * crowns)
          }
          return total;
        }

        let player1Score = tallyBoardScore(newBoards.board1);
        let player2Score = tallyBoardScore(newBoards.board2);

        console.log('scores', player1Score, player2Score);

        let winner;
        if (player1Score === player2Score) winner = 'DRAW';
        else if (player1Score > player2Score) winner = 'PLAYER 1 WINS';
        else winner = 'PLAYER 2 WINS';

        console.log(winner);
        alert(winner);

        return {
          ...state,
          winner: winner,
        }
      }

      case types.PLACE_PIECE: {
        console.log('action', action);
        console.log('target', action.payload)
        const target = action.payload.target.split('-');
        const id = action.payload.id;
        const board = target[0];
        const square = Number(target[1]);

        const newBoards = JSON.parse(JSON.stringify(state.boards));
        let toUpdate;
        if (state.pieceToPlay.orientation === 'horizontal' && (square % 7 < 6) && (square < 23 || square > 24)) {
          toUpdate = [square, square + 1]
        } else if (state.pieceToPlay.orientation === 'vertical' && square < 42 && square !== 24 && square != 17) {
          toUpdate = [square, square + 7]
        } else alert('Invalid Move');

        let newSquares;
        state.pieceToPlay.inverted ? newSquares = [`${id}b`, `${id}a`] : newSquares = [`${id}a`, `${id}b`]
        const colors = [DOMINOS[newSquares[0]].color, DOMINOS[newSquares[1]].color];
        // console.log(colors);
        // console.log(newSquares, toUpdate)
        
        let pieceToPlay = JSON.parse(JSON.stringify(state.pieceToPlay));

        function colorMatch(brd, pc, clr) {
          let isMatch = [false, false, false, false];
          if (pc % 7 > 0 && newBoards[brd][pc - 1].color) {
            if (newBoards[brd][pc - 1].color === clr || newBoards[brd][pc - 1].color === 'black') isMatch[0] = true;
          }
          if (pc % 7 < 6 && newBoards[brd][pc + 1].color) {
            if (newBoards[brd][pc + 1].color === clr || newBoards[brd][pc + 1].color === 'black') isMatch[1] = true;
          }
          if (pc > 6 && newBoards[brd][pc - 7].color) {
            if (newBoards[brd][pc - 7].color === clr || newBoards[brd][pc - 7].color === 'black') isMatch[2] = true;
          }
          if (pc < 41 && newBoards[brd][pc + 7].color) {
            if (newBoards[brd][pc + 7].color === clr || newBoards[brd][pc + 7].color === 'black') isMatch[3] = true;
          }
          return (isMatch.includes(true)) ? true : false;
        }

        if (!newBoards[board][toUpdate[0]].color && 
            !newBoards[board][toUpdate[1]].color && 
            (colorMatch(board, toUpdate[0], colors[0]) || colorMatch(board, toUpdate[1], colors[1]))) {
          newBoards[board][toUpdate[0]] = DOMINOS[newSquares[0]];
          newBoards[board][toUpdate[1]] = DOMINOS[newSquares[1]];
          pieceToPlay = { piece: 0, orientation: 'horizontal', inverted: false }
        } else alert('Invalid Move')

        let player;
        if (state.currPlayer === 1) player = 2;
        else player = 1;

        let message = `Player ${player} - It\'s Your Turn`;


        return {
          ...state,
          boards: newBoards,
          pieceToPlay: pieceToPlay,
          currPlayer: player,
          message: message
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

      case types.SKIP_PIECE: {
        console.log('action', action);

        let currPieces = state.currPieces.slice();
        let pieceToPlay = JSON.parse(JSON.stringify(state.pieceToPlay));
        pieceToPlay.piece = currPieces.shift();
        let player;
        if (state.currPlayer === 1) player = 2;
        else player = 1;  

        let message = `Player ${player} - It\'s Your Turn`;

        return {
          ...state,
          currPieces: currPieces,
          pieceToPlay: pieceToPlay,
          currPlayer: chooseStartingPlayer,
          message: message,
        }
      }

      case types.CHANGE_ORIENTATION: {
        console.log('action', action);

        let pieceToPlay = JSON.parse(JSON.stringify(state.pieceToPlay));
        pieceToPlay.orientation === 'vertical' ? (pieceToPlay.orientation = 'horizontal', pieceToPlay.inverted = !pieceToPlay.inverted) : pieceToPlay.orientation = 'vertical';

        return {
          ...state,
          pieceToPlay: pieceToPlay
        }
      }      

      case types.CHOOSE_STARTING_PLAYER: {
        console.log('action', action);
        let rand = Math.floor(Math.random() * Math.floor(2) + 1);
        let message = `Player ${rand} - It\'s Your Turn`

        return {
          ...state,
          currPlayer: rand,
          message: message,
        }
      }

      default: 
        return state
    }

    
  }

export default gameReducer;
import * as types from './actionTypes';

export const placePiece = targetObj => ({
  type: types.PLACE_PIECE,
  payload: targetObj
})

export const shufflePieces = pieces => ({
  type: types.SHUFFLE_PIECES,
  payload: pieces,
})

export const populateNext = unusedPieces => ({
  type: types.POPULATE_NEXT,
  payload: unusedPieces
})

export const populateCurr = nextPieces => ({
  type: types.POPULATE_CURR,
  payload: nextPieces
})

export const skipPiece = pieceToPlay => ({
  type: types.SKIP_PIECE,
  payload: pieceToPlay
})

export const changeOrientation = pieceToPlay => ({
  type: types.CHANGE_ORIENTATION,
  payload: pieceToPlay
})

export const chooseStartingPlayer = currPlayer => ({
  type: types.CHOOSE_STARTING_PLAYER,
  payload: currPlayer
})

export const loginUser = user => ({
  type: types.LOGIN_USER,
  payload: user
});
export const signOutUser = user => ({
  type: types.SIGN_OUT_USER,
});
export const tallyScore = boards => ({
  type: types.TALLY_SCORE,
  payload: boards
})

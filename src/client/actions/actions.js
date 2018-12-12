import * as types from './actionTypes';

export const placePiece = piece => ({
  type: types.PLACE_PIECE,
  payload: piece,
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

export const queuePiece = pieceToPlay => ({
  type: types.QUEUE_PIECE,
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
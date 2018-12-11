import * as types from './actionTypes';

export const placePiece = piece => ({
  type: types.PLACE_PIECE,
  payload: piece,
})
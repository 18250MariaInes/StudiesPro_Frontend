import * as types from '../types/selectedProvider';


export const selectedProvider = index => ({
  type: types.PROVIDER_SELECTED,
  payload: index, 
});
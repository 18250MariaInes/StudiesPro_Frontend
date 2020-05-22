import * as types from '../types/providers';


export const startFetchingProviders = () => ({
  type: types.PROVIDERS_FETCH_STARTED,
});
export const completeFetchingProviders = (entities, order) => ({
  type: types.PROVIDERS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingProviders = error => ({
  type: types.PROVIDERS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingProvider = provider => ({
  type: types.PROVIDER_ADD_STARTED,
  payload: provider,
});
export const completeAddingProvider = (oldId, provider) => ({
  type: types.PROVIDER_ADD_COMPLETED,
  payload: {
    oldId,
    provider,
  },
});
export const failAddingProvider = (oldId, error) => ({
  type: types.PROVIDER_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingProvider = id => ({
  type: types.PROVIDER_REMOVE_STARTED,
  payload: {
    id,
  },
});
export const completeRemovingProvider = () => ({
  type: types.PROVIDER_REMOVE_COMPLETED,
});
export const failRemovingProvider = (id, error) => ({
  type: types.PROVIDER_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});
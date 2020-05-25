import * as types from '../types/materials';


export const startFetchingMaterials = () => ({
  type: types.MATERIALS_FETCH_STARTED,
});
export const completeFetchingMaterials = (entities, order) => ({
  type: types.MATERIALS_FETCH_COMPLETED,
  payload: {
    entities,
    order,
  },
});
export const failFetchingMaterials = error => ({
  type: types.MATERIALS_FETCH_FAILED,
  payload: {
    error,
  },
});

export const startAddingMaterial = material => ({
  type: types.MATERIAL_ADD_STARTED,
  payload: material,
});

export const completeAddingMaterial = (oldId, material) => ({
  type: types.MATERIAL_ADD_COMPLETED,
  payload: {
    oldId,
    material,
  },
});

export const failAddingMaterial = (oldId, error) => ({
  type: types.MATERIAL_ADD_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startRemovingMaterial = id => ({
  type: types.MATERIAL_REMOVE_STARTED,
  payload: {
    id,
  },
});

export const completeRemovingMaterial = () => ({
  type: types.MATERIAL_REMOVE_COMPLETED,
});

export const failRemovingMaterial = (id, error) => ({
  type: types.MATERIAL_REMOVE_FAILED,
  payload: {
    id,
    error,
  },
});
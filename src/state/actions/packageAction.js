import { PackageAdd , PackageEdit , PackageRemove , PackageById , PackageGetAll } from './actionType';


export const getAll = () => ({
  type: PackageGetAll,
});

export const getById = (id) => ({
  type: PackageById ,
  payload: id,
});

export const add = (item) => ({
  type: PackageAdd,
  payload: item,
});

export const remove = (id) => ({
  type: PackageRemove ,
  payload: id,
});

export const edit = (item) => ({
  type: PackageEdit,
  payload: item,
});

import {PackageGetAll , PackageGetById , PackageAdd , PackageEdit ,PackageRemove} from './ActionType'
//getAll

export const getAll = () =>({
    type:PackageGetAll
})

//getById

export const getById = id =>({
    type:PackageGetById ,
    payload:id
})

//add

export const add = item =>({
    type:PackageAdd,
    payload:item
})

//remove

export const remove = id => ({
    type:PackageRemove,
    payload:id
})

//edit

export const edit = item => ({
    type:PackageEdit,
    payload:item
})
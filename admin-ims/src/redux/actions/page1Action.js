import * as type from '../const/index'

export const AddPfm1Action = (data) => {
    return { type: type.ADD_PFM_1, payload: data }
}

export const DeletePfm1Action = (id) => {
    return { type: type.DELETE_PFM_1, payload: id }
}

export const FetchPfm1Action = (data) => {
    return { type: type.FETCH_PFM_1, payload: data }
}
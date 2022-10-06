import * as type from '../const/index'

export const AddPfm3Action = (data) => {
    return { type: type.ADD_PFM_3, payload: data }
}

export const FetchPfm3Action = (data) => {
    return { type: type.FETCH_PFM_3, payload: data }
}

import * as type from '../const/index'

export const AddPfmsAction = (data) => {
    return { type: type.ADD_PFM, payload: data }
}
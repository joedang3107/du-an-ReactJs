import * as type from '../const/index'

export const FetchUserAction = (data) => {
    return { type: type.FETCH_USER, payload: data}
}
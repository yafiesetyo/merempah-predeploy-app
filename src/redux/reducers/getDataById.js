import { FETCH_BY_ID } from "../actions/index";

const getDataById = (state='',action) => {
    switch(action.type){
        case FETCH_BY_ID:
            return 'hello world'
        default:
            return state
    }   
}

export default getDataById
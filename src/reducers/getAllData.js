import product from "../dummy/products.json";
import { FETCH_ALL_DATA } from "../actions/index";

const getAllData = (state=[],action) => {
    switch(action.type){
        case FETCH_ALL_DATA:
            return {
                loading : false,
                data : []
            }
        default:
            return state
    }
}

export default getAllData
import product from "../../dummy/products.json";
import { FETCH_ALL_DATA } from "../actions/index";

console.log(product);

const getAllData = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        loading: false,
        data: [...state, ...product],
      };
    default:
      return state;
  }
};

export default getAllData;

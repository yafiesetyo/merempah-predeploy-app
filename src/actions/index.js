export const FETCH_ALL_DATA = "FETCH_ALL_DATA"
export const FETCH_BY_ID = "FETCH_BY_ID"
export const FETCH_TOP_8 = "FETCH_TOP_8"

export function fetchData (){
    return{
        type : FETCH_ALL_DATA
    }
}

export function fetchByID (id) {
    return{
        type: FETCH_BY_ID,
        Id : id
    }
}

export function fetchTop8 (column){
    return{
        type:FETCH_TOP_8,
        count : 8,
        searchBy : column
    }
}


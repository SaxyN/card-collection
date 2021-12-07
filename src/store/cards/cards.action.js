export const LOAD_INVENTORY_DATA = "LOAD_INVENTORY_DATA";

export const loadInventoryData = (data) => {
    return (dispatch) => {
        // console.log(data);
        dispatch({ type: LOAD_INVENTORY_DATA, payload: data })
    }
}
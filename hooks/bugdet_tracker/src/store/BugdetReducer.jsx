function BugdetReducer(currentValue, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [
                ...currentValue, 
                { 
                    name: action.payload.name, 
                    price: action.payload.price, 
                    type: action.payload.type 
                }
            ];
        case "DELETE_ITEM":
            return currentValue.filter((item) => item.name !== action.payload.name);
        case "RESET":
            return [];
        default:
            return currentValue;
    }
}

export default BugdetReducer;

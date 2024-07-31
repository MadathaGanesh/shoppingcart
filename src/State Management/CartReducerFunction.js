const CartReducerFunction = (state, action) => {
  switch (action.type) {
    case "Add":
      const existingItem = state.find(
        (item) => item.id === action.productProp.id
      );
      if (existingItem) {
        return state.map((item) =>
          item.id === action.productProp.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.productProp, quantity: 1 }];

    case "Delete":
      return state.filter((item) => item.id !== action.payload.id);

    case "Increase":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "Decrease":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      );

    default:
      return state;
  }
};

export default CartReducerFunction;

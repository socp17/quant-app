const initialState = {
  'graph1.x': 'key_stats.price_to_book',
  'graph1.y': 'key_stats.price_to_earnings_growth',
  'graph1.z': 'price_histories.price',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_SET': {
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    }
    default: return state;
  }
}

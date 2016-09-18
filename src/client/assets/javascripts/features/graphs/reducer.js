const initialState = {
  '1': {
    isFetching: false,
    isInvalidated: false,
    data: {
      x: [1, 2, 3],
      y: [2, 3, 4],
    },
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_SET': {
      const match = action.payload.id.match(/graph(\d+)\./);
      if (match) {
        const graphId = match[1];
        return {
          ...state,
          [graphId]: {
            ...state[graphId],
            isInvalidated: true,
          },
        };
      } else {
        return state;
      }
    }

    case 'FETCH_GRAPH': {
      switch (action.status) {
        case 'error': return {
          ...state,
          [action.payload.id]: {
            isFetching: false,
            isInvalidated: false,
            error: action.payload.error,
            trace: action.payload.error.trace,
          }
        };

        case 'success': return {
          ...state,
          [action.payload.id]: {
            isFetching: false,
            isInvalidated: false,
            data: action.payload.data,
          }
        };

        case 'pending': return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            isFetching: true,
            isInvalidated: false,
          }
        };

        default: {
          console.error(`action status ${action.status} not supported`);
          return state;
        }
      }
    }

    default: return state;
  }
}

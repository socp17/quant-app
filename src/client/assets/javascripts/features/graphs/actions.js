import { getScatter } from 'common/api';

export const fetchScatter = ({ x, y, z }) => (dispatch) => {
  getScatter({ x, y, z })
    .then((result) => {
      dispatch({
        type: 'FETCH_GRAPH',
        status: 'success',
        payload: {
          id: 1,
          data: result,
        }
      });
    })
    .catch((e) => {
      dispatch({
        type: 'FETCH_GRAPH',
        status: 'error',
        payload: {
          id: 1,
          error: e,
        },
      })
    })

  return dispatch({
    type: 'FETCH_GRAPH',
    status: 'pending',
    payload: {
      id: 1,
    },
  });
}

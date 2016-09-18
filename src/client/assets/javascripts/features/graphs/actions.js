import { getScatter } from 'common/api';

export const fetchScatter = ({ x, y, z, start, end }) => (dispatch) => {
  getScatter({ x, y, z, start, end })
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
      console.error(e && e.stack);
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
      params: { x, y, z, start, end },
    },
  });
}

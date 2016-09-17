import request from './request';

export function getScatter({
  x, y, z, start, end
}) {
  return request.post('api/graphs/scatter', {
    start,
    end,
    x,
    y,
    z,
  })
}

export function getHeatMap({
  x, y, z, start, end
}) {
  return request.post('api/graphs/heatmap', {
    start,
    end,
    x,
    y,
    z,
  })
}

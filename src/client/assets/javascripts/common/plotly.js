var Plotly = require('plotly.js/lib/core');

// Load in the trace types for pie, and choropleth
Plotly.register([
  require('plotly.js/lib/bar'),
  require('plotly.js/lib/box'),
  require('plotly.js/lib/heatmap'),
  require('plotly.js/lib/histogram'),
  require('plotly.js/lib/histogram2d'),
  require('plotly.js/lib/histogram2dcontour'),
  require('plotly.js/lib/pie'),
  require('plotly.js/lib/contour'),
  require('plotly.js/lib/scatterternary'),
  require('plotly.js/lib/scatter'),
]);

module.exports = Plotly;

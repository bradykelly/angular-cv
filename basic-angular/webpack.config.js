module.exports = {
  resolve: {
    alias: {
      path: 'path-browserify'
    },
    fallback: {
      "url": require.resolve("url/")
    },
    fallback: { "stream": require.resolve("stream-browserify") },
    fallback: { "os": require.resolve("os-browserify/browser") },
    fallback: { "os": false },
    fallback: {"assert": false},
    fallback: { "constants": false },
  }
};

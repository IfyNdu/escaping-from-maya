module.exports = api => {

  api.cache(true);

  return {
    plugins: [
      require.resolve('@babel/plugin-proposal-class-properties'),
      require.resolve('@babel/plugin-transform-runtime'),
      require.resolve('@babel/plugin-transform-async-to-generator'),
      require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
      require.resolve('@babel/plugin-proposal-optional-chaining')
    ],
    presets: [
      require.resolve('@babel/preset-env'),
      [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic'
        }
      ]
    ]
  };
};

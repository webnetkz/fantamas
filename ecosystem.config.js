module.exports = {
  apps: [
    {
      name: 'client',
      cwd: '/home/rot/fantamas/client',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 3000
      }
    },
    {
      name: 'server',
      script: '/home/rot/fantamas/server/index.js',
      args: 'index.js',
      env: {
        PORT: 5000,
        HOST: '0.0.0.0'
      }
    }
  ]
};

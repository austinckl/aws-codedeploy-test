module.exports = {
  apps: [
    {
      name: 'aws-codedeploy',
      script: './app.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
}
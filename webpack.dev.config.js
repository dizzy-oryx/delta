const devConfig = coreConfig => {
  coreConfig.devServer = {
    compress: true,
    port: 8080,
    open: true
  }

  return coreConfig
}

export default devConfig

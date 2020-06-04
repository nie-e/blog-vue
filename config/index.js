const Config = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://api.guaiwola.com' : 'http://127.0.0.1:3000',
  staticPath: 'cdn.guaiwola.com'
}

export default Config

namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test',

    REACT_APP_AUTH0_CLIENTID: string,
    REACT_APP_AUTH0_DOMAIN: string,
  }
}
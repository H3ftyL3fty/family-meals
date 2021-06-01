namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test',

    REACT_APP_API_URL: string,
    REACT_APP_AUTH0_AUDIENCE: string,
    REACT_APP_AUTH0_CLIENTID: string,
    REACT_APP_AUTH0_DOMAIN: string,
  }
}

declare type Maybe<T> = T | null | undefined;
declare type Nullable<T> = T | null;
declare type Optional<T> = T | undefined;

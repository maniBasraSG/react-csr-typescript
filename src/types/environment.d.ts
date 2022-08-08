declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      MODE: string;
      BASE_API: string;
      SENTRY: string;
    }
  }
}

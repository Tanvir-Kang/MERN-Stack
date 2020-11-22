export interface IHttpService {
  getRequest: (url: string) => Promise<any>;
}
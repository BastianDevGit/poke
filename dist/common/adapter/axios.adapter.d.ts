import { HttpAdapter } from "../interfaces/http-adapter.interface";
export declare class AxiosAdapter implements HttpAdapter {
    private axios;
    s: any;
    get<T>(url: string): Promise<T>;
}

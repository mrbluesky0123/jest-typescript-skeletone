import axios from 'axios'
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import jsConvert from "js-convert-case"
let start: string = "string";
console.log(start); 




export const sum = (a: number, b: number): number => a + b;

export const example = async (name: string): Promise<string> => {
    axios.interceptors.request.use(<T>(config: InternalAxiosRequestConfig<T>) => {
        console.log("axios-request-config =>", config);

        // case 변환
        const convertedData = jsConvert.snakeKeys(config.data);
        console.log("##!!!!!!## ", convertedData);
        config.data = convertedData === null? undefined : convertedData as typeof config.data;

        return config;
    }, (error: any) => {
        console.log("axios-request-error =>", error);

        return Promise.reject(error);
    });

    axios.interceptors.response.use(<T, D>(response: AxiosResponse<T, D>) => {
        console.log("axios-response =>", response);

        // case 변환
        const convertedData = jsConvert.camelKeys(response.data);
        console.log("#### ", convertedData);
        response.data = convertedData as typeof response.data;
        
        return response.data;
    }, (error: any) => {
        console.log("axios-response-error", error);

        return Promise.reject(error);
    });
    const request: {snake_case: string, how_long: number} = {
        snake_case: "snake_case",
        how_long: 10
    }
    const result: {snake_case: string, how_long: number} = await axios.post(`http://cfe83c5d-4adf-443d-a4bc-aa616c909349.mock.pstmn.io/testapi/post`, request)
    console.log("#@@@#@#@#@#@#@# ", result);
    return result.snake_case;
}
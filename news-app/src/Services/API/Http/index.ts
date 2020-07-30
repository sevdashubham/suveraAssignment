// #region Global Imports
import "isomorphic-unfetch";
import getConfig from "next/config";
import axios from 'axios';
// #endregion Global Imports

// #region Interface Imports
import { HttpModel } from "@Interfaces";
// #endregion Interface Imports

const {
    publicRuntimeConfig: { PROXY_MODE, API_URL },
} = getConfig();

axios.defaults.baseURL = `${API_URL}${PROXY_MODE}`
axios.defaults.withCredentials = true
axios.defaults.headers.common['Content-Type'] = 'application/json'

export const Http = {
    Request: async <A>(
        methodType: string,
        url: string,
        params?: HttpModel.IRequestQueryPayload,
        payload?: HttpModel.IRequestPayload
    ): Promise<A> => {
        return new Promise((resolve, reject) => {
            axios
                .post(url, params)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        return resolve(response.data);
                    }
                    return reject(response);
                })
                .catch(error => reject(error))
        });
    },
};

import axios, { AxiosRequestConfig } from "axios";

import { Constants } from "./constants";
import { 
    ProductResponse,
    RefreshAccessTokenRequestBody, 
    RefreshAccessTokenResponse,
    Vehicle
} from "./interfaces";

export default class TeslaAPI {

    protected refreshToken: string = "";
    protected accessToken: string = "";
    protected accessTokenExpiresIn: number = 0;

    /**
     * Retrieves the version of the `@qualiture/tesla-api` package
     * @returns Version of the `@qualiture/tesla-api` package
     */
    public getVersion() : string {
        const pjson = require("../package.json");

        return pjson.version;
    }

    public getRefreshedAccessToken(refreshToken: string) : Promise<RefreshAccessTokenResponse> {
        const body: RefreshAccessTokenRequestBody = {
            grant_type: Constants.REFRESH_TOKEN.REQUEST_BODY.GRANT_TYPE,
            client_id: Constants.REFRESH_TOKEN.REQUEST_BODY.CLIENT_ID,
            scope: Constants.REFRESH_TOKEN.REQUEST_BODY.SCOPE,
            refresh_token: refreshToken
        };
        
        return new Promise((resolve, reject) => {
            axios.post(Constants.REFRESH_TOKEN.ENDPOINT, body)
                .then((response) => {
                    const data: RefreshAccessTokenResponse = response.data;

                    this.accessToken = data.access_token;
                    this.accessTokenExpiresIn = data.expires_in;

                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    public getVehicle() : Promise<Vehicle> {
        return new Promise((resolve, reject) => {
            const config = this.getAxiosConfig();

            axios.get(Constants.PRODUCT.ENDPOINT, config)
                .then((response) => {
                    const data: ProductResponse = response.data;
                    const vehicle = data.response[0];

                    resolve(vehicle);
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    private getAxiosConfig() : AxiosRequestConfig {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`
            }
        };

        return config;
    }

}

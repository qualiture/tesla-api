import axios, { AxiosError } from "axios";
import { IRefreshAccessTokenRequestBody, IRefreshAccessTokenResponse } from "./interfaces";
import { Constants } from "./constants";

export default class Authorization {

    protected refreshToken: string = "";
    protected accessToken: string = "";
    protected accessTokenExpiresIn: number = 0;

    constructor(accessToken?: string) {
        if (accessToken) {
            this.accessToken = accessToken;
        }
    }

    public getRefreshedAccessToken(refreshToken: string) : Promise<IRefreshAccessTokenResponse> {
        const body: IRefreshAccessTokenRequestBody = {
            grant_type: Constants.REFRESH_TOKEN.REQUEST_BODY.GRANT_TYPE,
            client_id: Constants.REFRESH_TOKEN.REQUEST_BODY.CLIENT_ID,
            scope: Constants.REFRESH_TOKEN.REQUEST_BODY.SCOPE,
            refresh_token: refreshToken
        };
        
        return new Promise((resolve, reject) => {
            axios.post(Constants.REFRESH_TOKEN.ENDPOINT, body)
                .then((response) => {
                    const data: IRefreshAccessTokenResponse = response.data;

                    this.accessToken = data.access_token;
                    this.accessTokenExpiresIn = data.expires_in;

                    resolve(data);
                }).catch((err: AxiosError) => {
                    reject(err.response?.data);
                });
        });
    }

    // #region Getters / Setters
    public getAccessToken() : string {
        return this.accessToken;
    }

    public setAccessToken(accessToken: string) : void {
        this.accessToken = accessToken;
    }

    public getAccessTokenExpiresIn() : number {
        return this.accessTokenExpiresIn;
    }
    // #endregion
}

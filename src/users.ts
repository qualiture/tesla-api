import axios, { AxiosRequestConfig } from "axios";
import { Constants } from "./constants";
import { IUser, IUserResponse } from "./interfaces";

export default class Users {

    public static getUser(config: AxiosRequestConfig) : Promise<IUser>{
        return new Promise((resolve, reject) => {
            axios.get(Constants.USER.ENDPOINT, config)
                .then((response) => {
                    const data: IUserResponse = response.data;
                    const user = data.response;

                    resolve(user);
                }).catch((err) => {
                    reject(err);
                });
        });
    }
}

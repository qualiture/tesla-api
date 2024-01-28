import { AxiosRequestConfig } from "axios";

import { 
    IRefreshAccessTokenResponse,
    IUser,
    IVehicle
} from "./interfaces";
import Authorization from "./auth";
import Users from "./users";
import Vehicle from "./vehicle";

export default class TeslaAPI {

    protected auth: Authorization;

    constructor(accessToken: string) {
        this.auth = new Authorization(accessToken);

    }

    /**
     * Retrieves the version of this package
     * @returns Version of the `@qualiture/tesla-api` package
     */
    public getPackageVersion() : string {
        const pjson = require("../package.json");

        return pjson.version;
    }

    /**
     * Refreshes the access token using the refresh token
     * @param refreshToken The refresh token
     * @returns Object with access token and expiration
     */
    public getRefreshedAccessToken(refreshToken: string) : Promise<IRefreshAccessTokenResponse> {
        return this.auth.getRefreshedAccessToken(refreshToken);
    }

    /**
     * Gets user details
     * @returns
     */
    public getUser() : Promise<IUser> {
        return Users.getUser(this.getAxiosConfig());
    }

    /**
     * Retrieves all vehicle details for the current owner. Data is retrieved from Tesla servers (so not from car itself)
     * @returns Array of vehicles
     */
    public getOwnerVehicles() : Promise<IVehicle[]> {
        return Vehicle.getOwnerVehicles(this.getAxiosConfig());
    }

    /**
     * Retrieves all vehicle data and configuration. Data is retrieved from the vehicle itself, specified by the `vehicleId` parameter
     * @param vehicleId Value of `IVehicle.id`
     * @returns 
     */
    public getVehicleData(vehicleId: number) {
        return Vehicle.getVehicleData(vehicleId, this.getAxiosConfig());
    }

    private getAxiosConfig() : AxiosRequestConfig {
        const config: AxiosRequestConfig = {
            headers: {
                Authorization: `Bearer ${this.auth.getAccessToken()}`
            }
        };

        return config;
    }

}

import util from "node:util";

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Constants } from "./constants";
import { IVehicle, IProductResponse, IVehicleData, IVehicleDataResponse } from "./interfaces";

export default class Vehicle {

    /**
     * Returns an array of vehicles for the current owner.
     * The owner is determined by the bearer token provided inside the `config` object
     * @param config 
     * @returns An array of vehicles for the current owner
     */
    public static getOwnerVehicles(config: AxiosRequestConfig) : Promise<IVehicle[]>{
        return new Promise((resolve, reject) => {
            axios.get(Constants.PRODUCT.ENDPOINT, config)
                .then((response) => {
                    const data: IProductResponse = response.data;
                    const vehicles = data.response.filter((product): product is IVehicle => !!product);

                    resolve(vehicles);
                }).catch((err: AxiosError) => {
                    reject(err.response?.data);
                });
        });
    }

    /**
     * Returns all vehicle data and vehicle configuration
     * @param vehicleId `id` of the vehicle (NB: This is *not* `vehicle_id`)
     * @param config 
     * @returns A rollup of all vehicle data plus configuration
     */
    public static getVehicleData(vehicleId: number, config: AxiosRequestConfig) : Promise<IVehicleData>{
        return new Promise((resolve, reject) => {
            const vehicleDataEndpoint = util.format(Constants.VEHICLE_DATA.ENDPOINT, vehicleId);

            axios.get(vehicleDataEndpoint, config)
                .then((response) => {
                    const data: IVehicleDataResponse = response.data;

                    resolve(data.response);
                }).catch((err: AxiosError) => {
                    reject(err.response?.data);
                });
        });
    }
    
}

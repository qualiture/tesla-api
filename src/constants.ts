const ApiConstants = {

    BASE_URL: {
        AUTH     : "https://auth.tesla.com/oauth2/v3",
        OWNER_API: "https://owner-api.teslamotors.com/api/1"
    },

    ENDPOINT: {
        TOKEN        : "/token",
        USERS        : "/users/me",
        PRODUCTS     : "/products?orders=true",
        VEHICLE_DATA : "/vehicles/%d/vehicle_data?endpoints=%s"   // %d = IVehicle's 'id' value, %s = location_data
    }

} as const;

const Constants = {

    REFRESH_TOKEN: {
        REQUEST_BODY: {
            GRANT_TYPE: "refresh_token",
            CLIENT_ID : "ownerapi",
            SCOPE     : "openid email offline_access"
        },
        ENDPOINT: ApiConstants.BASE_URL.AUTH + ApiConstants.ENDPOINT.TOKEN
    },

    USER: {
        ENDPOINT: ApiConstants.BASE_URL.OWNER_API + ApiConstants.ENDPOINT.USERS
    },

    PRODUCT: {
        ENDPOINT: ApiConstants.BASE_URL.OWNER_API + ApiConstants.ENDPOINT.PRODUCTS
    },

    VEHICLE_DATA: {
        ENDPOINT: ApiConstants.BASE_URL.OWNER_API + ApiConstants.ENDPOINT.VEHICLE_DATA,
        DEFAULT_PARAMETERS: "drive_state%3Bvehicle_state",
        LOCATION_DATA_PARAMETER: "%3Blocation_data"
    }

} as const;

export { Constants };
const ApiConstants = {

    BASE_URL: {
        AUTH     : "https://auth.tesla.com/oauth2/v3",
        OWNER_API: "https://owner-api.teslamotors.com/api/1"
    },

    ENDPOINT: {
        TOKEN        : "/token",
        USERS        : "/users/me",
        PRODUCTS     : "/products?orders=true",
        VEHICLE_DATA : "/vehicles/%d/vehicle_data"   // %d = IVehicle's 'id' value
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
        LOCATION_DATA_PARAMETER: "location_data"
    }

} as const;

export { Constants };
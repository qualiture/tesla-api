const ApiConstants = {

    BASE_URL: {
        AUTH     : "https://auth.tesla.com/oauth2/v3",
        OWNER_API: "https://owner-api.teslamotors.com/api/1"
    },

    ENDPOINT: {
        TOKEN   : "/token",
        PRODUCTS: "/products?orders=true"
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

    PRODUCT: {
        ENDPOINT: ApiConstants.BASE_URL.OWNER_API + ApiConstants.ENDPOINT.PRODUCTS
    }

} as const;

export { Constants };
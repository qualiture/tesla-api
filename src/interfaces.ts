
// #region Tokens
export interface RefreshAccessTokenRequestBody {
    grant_type:    string;
    client_id:     string;
    scope:         string;
    refresh_token: string;
};

export interface RefreshAccessTokenResponse {
    access_token:  string;
    refresh_token: string;
    id_token:      string;
    expires_in:    number;
    token_type:    string;
};
// #endregion

// #region Products
export interface ProductResponse {
    response: Vehicle[];
    count:    number;
};

export interface Vehicle {
    id:                        number;
    user_id:                   number;
    vehicle_id:                number;
    vin:                       string;
    color:                     null;
    access_type:               string;
    display_name:              string;
    option_codes:              null;
    cached_data:               string;
    granular_access:           GranularAccess;
    tokens:                    string[];
    state:                     string;
    in_service:                boolean;
    id_s:                      string;
    calendar_enabled:          boolean;
    api_version:               number;
    backseat_token:            null;
    backseat_token_updated_at: null;
    ble_autopair_enrolled:     boolean;
    vehicle_config:            VehicleConfig;
    command_signing:           string;
    release_notes_supported:   boolean;
};

export interface GranularAccess {
    hide_private: boolean;
}

export interface VehicleConfig {
    can_accept_navigation_requests: boolean;
    can_actuate_trunks:             boolean;
    car_special_type:               string;
    car_type:                       string;
    charge_port_type:               string;
    cop_user_set_temp_supported:    boolean;
    dashcam_clip_save_supported:    boolean;
    default_charge_to_max:          boolean;
    driver_assist:                  string;
    ece_restrictions:               boolean;
    efficiency_package:             string;
    eu_vehicle:                     boolean;
    exterior_color:                 string;
    exterior_trim_override:         string;
    front_drive_unit:               string;
    has_air_suspension:             boolean;
    has_ludicrous_mode:             boolean;
    has_seat_cooling:               boolean;
    headlamp_type:                  string;
    interior_trim_type:             string;
    motorized_charge_port:          boolean;
    paint_color_override:           string;
    plg:                            boolean;
    pws:                            boolean;
    rear_drive_unit:                string;
    rear_seat_heaters:              number;
    rear_seat_type:                 number;
    rhd:                            boolean;
    roof_color:                     string;
    seat_type:                      number;
    spoiler_type:                   string;
    sun_roof_installed:             number;
    supports_qr_pairing:            boolean;
    third_row_seats:                string;
    timestamp:                      number;
    trim_badging:                   string;
    use_range_badging:              boolean;
    utc_offset:                     number;
    webcam_selfie_supported:        boolean;
    webcam_supported:               boolean;
    wheel_type:                     string;
};
// #endregion


// #region Error
export interface IErrorResponse {
    response:          null;
    error:             string;
    error_description: string;
}
// #endregion

// #region Tokens
export interface IRefreshAccessTokenRequestBody {
    grant_type:    string;
    client_id:     string;
    scope:         string;
    refresh_token: string;
};

export interface IRefreshAccessTokenResponse {
    access_token:  string;
    refresh_token: string;
    id_token:      string;
    expires_in:    number;
    token_type:    string;
};
// #endregion

// #region Products
export interface IProductResponse {
    response: Array<IVehicle | IEnergyProduct>;
    count:    number;
};

export interface IEnergyProduct {
    energy_site_id:          number;
    resource_type:           string;
    id:                      string;
    asset_site_id:           string;
    solar_power:             number;
    solar_type:              string;
    sync_grid_alert_enabled: boolean;
    breaker_alert_enabled:   boolean;
    components:              IComponents;
}

export interface IComponents {
    battery:     boolean;
    solar:       boolean;
    solar_type:  string;
    grid:        boolean;
    load_meter:  boolean;
    market_type: string;
}

export interface IVehicle {
    id:                        number;
    user_id:                   number;
    vehicle_id:                number;
    vin:                       string;
    color:                     null;
    access_type:               string;
    display_name:              string;
    option_codes:              null;
    cached_data:               string;
    granular_access:           IGranularAccess;
    tokens:                    string[];
    state:                     string;
    in_service:                boolean;
    id_s:                      string;
    calendar_enabled:          boolean;
    api_version:               number;
    backseat_token:            null;
    backseat_token_updated_at: null;
    ble_autopair_enrolled:     boolean;
    vehicle_config:            IVehicleConfig;
    command_signing:           string;
    release_notes_supported:   boolean;
};

export interface IGranularAccess {
    hide_private: boolean;
}

export interface IVehicleConfig {
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

// #region User
export interface IUserResponse {
    response: IUser;
}

export interface IUser {
    email:             string;
    full_name:         string;
    profile_image_url: string;
}
// #endregion

// #region Vehicle Data
export interface IVehicleDataResponse {
    response: IVehicleData;
}

export interface IVehicleData {
    id:                        number;
    user_id:                   number;
    vehicle_id:                number;
    vin:                       string;
    color:                     null;
    access_type:               string;
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
    charge_state:              IChargeState;
    climate_state:             IClimateState;
    drive_state:               IDriveState;
    gui_settings:              IGUISettings;
    vehicle_config:            IVehicleConfig;
    vehicle_state:             IVehicleState;
}

export interface IChargeState {
    battery_heater_on:                     boolean;
    battery_level:                         number;
    battery_range:                         number;
    charge_amps:                           number;
    charge_current_request:                number;
    charge_current_request_max:            number;
    charge_enable_request:                 boolean;
    charge_energy_added:                   number;
    charge_limit_soc:                      number;
    charge_limit_soc_max:                  number;
    charge_limit_soc_min:                  number;
    charge_limit_soc_std:                  number;
    charge_miles_added_ideal:              number;
    charge_miles_added_rated:              number;
    charge_port_cold_weather_mode:         null;
    charge_port_color:                     string;
    charge_port_door_open:                 boolean;
    charge_port_latch:                     string;
    charge_rate:                           number;
    charger_actual_current:                number;
    charger_phases:                        null;
    charger_pilot_current:                 number;
    charger_power:                         number;
    charger_voltage:                       number;
    charging_state:                        string;
    conn_charge_cable:                     string;
    est_battery_range:                     number;
    fast_charger_brand:                    string;
    fast_charger_present:                  boolean;
    fast_charger_type:                     string;
    ideal_battery_range:                   number;
    max_range_charge_counter:              number;
    minutes_to_full_charge:                number;
    not_enough_power_to_heat:              boolean;
    off_peak_charging_enabled:             boolean;
    off_peak_charging_times:               string;
    off_peak_hours_end_time:               number;
    preconditioning_enabled:               boolean;
    preconditioning_times:                 string;
    scheduled_charging_mode:               string;
    scheduled_charging_pending:            boolean;
    scheduled_charging_start_time:         null;
    scheduled_charging_start_time_app:     number;
    scheduled_charging_start_time_minutes: number;
    scheduled_departure_time:              null;
    supercharger_session_trip_planner:     boolean;
    time_to_full_charge:                   number;
    timestamp:                             number;
    trip_charging:                         boolean;
    usable_battery_level:                  number;
    user_charge_enable_request:            null;
}

export interface IClimateState {
    allow_cabin_overheat_protection:             boolean;
    battery_heater:                              boolean;
    battery_heater_no_power:                     boolean;
    bioweapon_mode:                              boolean;
    cabin_overheat_protection:                   string;
    climate_keeper_mode:                         string;
    cop_activation_temperature:                  string;
    defrost_mode:                                number;
    driver_temp_setting:                         number;
    fan_status:                                  number;
    hvac_auto_request:                           string;
    inside_temp:                                 number;
    is_auto_conditioning_on:                     boolean;
    is_climate_on:                               boolean;
    is_front_defroster_on:                       boolean;
    is_preconditioning:                          boolean;
    is_rear_defroster_on:                        boolean;
    left_temp_direction:                         number;
    max_avail_temp:                              number;
    min_avail_temp:                              number;
    outside_temp:                                number;
    passenger_temp_setting:                      number;
    remote_heater_control_enabled:               boolean;
    right_temp_direction:                        number;
    seat_heater_left:                            number;
    seat_heater_right:                           number;
    side_mirror_heaters:                         boolean;
    supports_fan_only_cabin_overheat_protection: boolean;
    timestamp:                                   number;
    wiper_blade_heater:                          boolean;
}

export interface IDriveState {
    active_route_destination?:          string;
    active_route_latitude:              number;
    active_route_longitude:             number;
    active_route_miles_to_arrival?:     number;
    active_route_minutes_to_arrival?:   number;
    active_route_traffic_minutes_delay: number;
    gps_as_of:                          number;
    heading:                            number;
    latitude:                           number;
    longitude:                          number;
    native_latitude:                    number;
    native_location_supported:          number;
    native_longitude:                   number;
    native_type:                        string;
    power:                              number;
    shift_state:                        null;
    speed:                              null;
    timestamp:                          number;
}

export interface GranularAccess {
    hide_private: boolean;
}

export interface IGUISettings {
    gui_24_hour_time:       boolean;
    gui_charge_rate_units:  string;
    gui_distance_units:     string;
    gui_range_display:      string;
    gui_temperature_units:  string;
    gui_tirepressure_units: string;
    show_range_units:       boolean;
    timestamp:              number;
}

export interface IVehicleConfig {
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
}

export interface IVehicleState {
    allow_authorized_mobile_devices_only: boolean;
    api_version:                          number;
    autopark_state_v2:                    string;
    autopark_style:                       string;
    calendar_supported:                   boolean;
    car_version:                          string;
    center_display_state:                 number;
    dashcam_clip_save_available:          boolean;
    dashcam_state:                        string;
    df:                                   number;
    dr:                                   number;
    fd_window:                            number;
    feature_bitmask:                      string;
    fp_window:                            number;
    ft:                                   number;
    homelink_device_count:                number;
    homelink_nearby:                      boolean;
    is_user_present:                      boolean;
    last_autopark_error:                  string;
    locked:                               boolean;
    media_info:                           IMediaInfo;
    media_state:                          IMediaState;
    notifications_supported:              boolean;
    odometer:                             number;
    parsed_calendar_supported:            boolean;
    pf:                                   number;
    pr:                                   number;
    rd_window:                            number;
    remote_start:                         boolean;
    remote_start_enabled:                 boolean;
    remote_start_supported:               boolean;
    rp_window:                            number;
    rt:                                   number;
    santa_mode:                           number;
    sentry_mode:                          boolean;
    sentry_mode_available:                boolean;
    service_mode:                         boolean;
    service_mode_plus:                    boolean;
    smart_summon_available:               boolean;
    software_update:                      ISoftwareUpdate;
    speed_limit_mode:                     SpeedLimitMode;
    summon_standby_mode_enabled:          boolean;
    timestamp:                            number;
    tpms_hard_warning_fl:                 boolean;
    tpms_hard_warning_fr:                 boolean;
    tpms_hard_warning_rl:                 boolean;
    tpms_hard_warning_rr:                 boolean;
    tpms_last_seen_pressure_time_fl:      number;
    tpms_last_seen_pressure_time_fr:      number;
    tpms_last_seen_pressure_time_rl:      number;
    tpms_last_seen_pressure_time_rr:      number;
    tpms_pressure_fl:                     number;
    tpms_pressure_fr:                     number;
    tpms_pressure_rl:                     number;
    tpms_pressure_rr:                     number;
    tpms_rcp_front_value:                 number;
    tpms_rcp_rear_value:                  number;
    tpms_soft_warning_fl:                 boolean;
    tpms_soft_warning_fr:                 boolean;
    tpms_soft_warning_rl:                 boolean;
    tpms_soft_warning_rr:                 boolean;
    valet_mode:                           boolean;
    valet_pin_needed:                     boolean;
    vehicle_name:                         string;
    webcam_available:                     boolean;
}

export interface IMediaInfo {
    audio_volume:           number;
    audio_volume_increment: number;
    audio_volume_max:       number;
}

export interface IMediaState {
    remote_control_enabled: boolean;
}

export interface ISoftwareUpdate {
    download_perc:         number;
    expected_duration_sec: number;
    install_perc:          number;
    status:                string;
    version:               string;
}

export interface SpeedLimitMode {
    active:            boolean;
    current_limit_mph: number;
    max_limit_mph:     number;
    min_limit_mph:     number;
    pin_code_set:      boolean;
}
// #endregion

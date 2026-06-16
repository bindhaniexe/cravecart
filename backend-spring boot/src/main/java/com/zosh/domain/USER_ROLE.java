package com.zosh.domain;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum USER_ROLE {

    ROLE_CUSTOMER,
    ROLE_RESTAURANT_OWNER,
    ROLE_RESTAURANT_MANAGER,
    ROLE_ADMIN;

    @JsonCreator
    public static USER_ROLE fromValue(String value) {
        for (USER_ROLE role : values()) {
            if (role.name().equalsIgnoreCase(value)) {
                return role;
            }
        }
        throw new IllegalArgumentException("Invalid role: " + value);
    }
}

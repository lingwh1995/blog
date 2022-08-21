package org.openatom.endpoint;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.context.annotation.Configuration;


@Configuration
@Endpoint(id = "custom")
public class CoustomEndpoint {

    @ReadOperation
    public String endpointByGet() {
        return "{\"x\":\"Hello Actuator\"}";
    }
}

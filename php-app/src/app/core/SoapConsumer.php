<?php

class SoapConsumer {
    private $client;
    public function __construct($options = array('trace' => 1)) {
        $this->client = new SoapClient(SOAP_WSDL, $options);
        $header_username = new SoapHeader(SOAP_WSDL, 'Username', SOAP_USERNAME);
        $header_password = new SoapHeader(SOAP_WSDL, 'ApiKey', SOAP_PASSWORD);
        $this->client->__setSoapHeaders([$header_username, $header_password]);
    }
    public function request($function_name, $request_params = array()) {
        return $this->client->__soapCall($function_name, $request_params);
    }
}
package models;

import repositories.ApiKeyRepository;

import java.sql.ResultSet;
import java.sql.Timestamp;

public class Log implements Model{
    private String ip;
    private Timestamp timestamp;
    private String methodCalled;
    private String parameters;

    private String requester;
    private String endpoint;

    public Log() {

    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public Timestamp getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Timestamp timestamp) {
        this.timestamp = timestamp;
    }

    public String getMethodCalled() {
        return methodCalled;
    }

    public void setMethodCalled(String methodCalled) {
        this.methodCalled = methodCalled;
    }

    public String getParameters() {
        return parameters;
    }

    public void setParameters(String parameters) {
        this.parameters = parameters;
    }

    public String getRequester() {
        return requester;
    }

    public void setRequester(String requester) {
        this.requester = requester;
    }
    public void setRequesterWithUsername(String username) {
        System.out.println(username);
        this.requester = ApiKeyRepository.getInstance().getApiKeyFromUsername(username).getApiId();
    }

    public String getEndpoint() {
        return endpoint;
    }

    public void setEndpoint(String endpoint) {
        this.endpoint = endpoint;
    }

    @Override
    public void setAttributes(ResultSet resultSet) {

    }

}

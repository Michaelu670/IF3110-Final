package handlers;

import com.sun.net.httpserver.HttpExchange;
import models.Log;
import repositories.LogRepository;

import javax.xml.namespace.QName;
import javax.xml.soap.*;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;
import java.net.InetSocketAddress;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

public class Logger implements SOAPHandler<SOAPMessageContext> {

    @Override
    public boolean handleMessage(SOAPMessageContext context) {
        Boolean outbound = (Boolean) context
                .get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);
        if ((outbound == null) || outbound) {
            return true;
        }

        Log log = new Log();
        try {
            SOAPHeader header = context.getMessage().getSOAPHeader();
            if (header != null) {
                Iterator<?> i = header.getChildElements();
                String username = null;
                while (i.hasNext()) {
                    SOAPHeaderElement e = (SOAPHeaderElement) i.next();
                    if (e.getElementName().getLocalName().equals("Username")) {
                        username = e.getValue();
                    }
                }
                log.setRequesterWithUsername(username);
                if (log.getRequester() == null) {
                    return false;
                }
            }
            else {
                return false;
            }

            String endpoint = ((QName) context.get(MessageContext.WSDL_SERVICE)).getLocalPart();
            String description = ((QName) context.get(MessageContext.WSDL_OPERATION)).getLocalPart();
            log.setEndpoint(endpoint);
            log.setMethodCalled(description);

            HttpExchange httpExchange = (HttpExchange)context.get("com.sun.xml.internal.ws.http.exchange");
            InetSocketAddress remoteAddress = httpExchange.getRemoteAddress();
            String ip = remoteAddress.getHostName();
            log.setIp(ip);

            SOAPBody soapBody = context.getMessage().getSOAPBody();
            Iterator<?> children = soapBody.getChildElements();
            StringBuilder parameters = new StringBuilder();
            while(children.hasNext()) {
                try {
                    SOAPBodyElement soapBodyElement = (SOAPBodyElement) children.next();
                    Iterator<?> grandChildren = soapBodyElement.getChildElements();
                    while (grandChildren.hasNext()) {
                        try {
                            SOAPBodyElement params = (SOAPBodyElement) grandChildren.next();
                            System.out.println(params.getElementName().getLocalName()
                                    + ": " + params.getValue());
                            parameters.append(params.getElementName().getLocalName()).append(": ").append(params.getValue()).append("\n");
                        } catch (Exception e) {

                        }
                    }
                } catch(Exception e) {

                }
            }
            log.setParameters(parameters.toString());

            LogRepository.getInstance().insertLog(log);
        }
        catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }
    @Override
    public Set<QName> getHeaders() {
        return null;
    }

    @Override
    public boolean handleFault(SOAPMessageContext context) {
        return false;
    }

    @Override
    public void close(MessageContext context) {

    }
}

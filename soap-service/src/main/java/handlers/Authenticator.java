package handlers;

import repositories.ApiKeyRepository;

import javax.xml.namespace.QName;
import javax.xml.soap.SOAPHeader;
import javax.xml.soap.SOAPHeaderElement;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;
import java.util.Iterator;
import java.util.Set;

public class Authenticator implements SOAPHandler<SOAPMessageContext> {
    @Override
    public boolean handleMessage(SOAPMessageContext context) {
        Boolean outbound = (Boolean) context
                .get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);
        if ((outbound == null) || outbound) {
            return true;
        }
        try {
            System.out.println(context.getMessage().getSOAPHeader());
            SOAPHeader header = context.getMessage().getSOAPHeader();
            if (header != null) {
                Iterator<?> i = header.getChildElements();
                String username = null;
                String apiKey = null;
                while (i.hasNext()) {
                    SOAPHeaderElement e = (SOAPHeaderElement) i.next();
                    System.out.println(e.getElementName().getLocalName() + ": " + e.getValue());
                    if (e.getElementName().getLocalName().equals("ApiKey")) {
                        apiKey = e.getValue();
                    }
                    if (e.getElementName().getLocalName().equals("Username")) {
                        username = e.getValue();
                    }
                }
                return Authorize(username, apiKey);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }



        return true;
    }

    @Override
    public boolean handleFault(SOAPMessageContext context) {
        return false;
    }

    private boolean Authorize(String username, String apiKey) {
        return username != null &&
                apiKey != null &&
                ApiKeyRepository.getInstance().isApiKeyValid(username, apiKey);
    }

    @Override
    public void close(MessageContext context) {

    }

    @Override
    public Set<QName> getHeaders() {
        return null;
    }
}

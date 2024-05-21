package handlers;

import javax.xml.namespace.QName;
import javax.xml.ws.handler.MessageContext;
import javax.xml.ws.handler.soap.SOAPHandler;
import javax.xml.ws.handler.soap.SOAPMessageContext;
import java.util.Set;

public class MainHandler implements SOAPHandler<SOAPMessageContext> {
    @Override
    public boolean handleMessage(SOAPMessageContext context) {
        Authenticator authenticator = new Authenticator();
        boolean success = authenticator.handleMessage(context);
        if (!success) {
            System.out.println("Failed request due to authentication");
            return false;
        }

        Logger logger = new Logger();
        success = logger.handleMessage(context);
        if (!success) {
            return false;
        }

        return true;
    }

    @Override
    public boolean handleFault(SOAPMessageContext context) {
        return false;
    }

    @Override
    public Set<QName> getHeaders() {
        return null;
    }

    @Override
    public void close(MessageContext context) {

    }
}

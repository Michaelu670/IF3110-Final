import services.WalletServiceImpl;

import javax.xml.ws.Endpoint;
public class App {
    public static final String url = "http://0.0.0.0:8067/service";
    public static void main(String[] args) {
        try {
            Endpoint.publish(url, new WalletServiceImpl());
            System.out.println("Endpoint has been published at " + url);
            System.out.println("WSDL: "+ url + "?wsdl");
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }
}

public class Logger {

    // Single instance
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger object created.");
    }

    // Returns the only instance
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}
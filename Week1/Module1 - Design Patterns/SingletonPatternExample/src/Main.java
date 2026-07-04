public class Main {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Application Started");
        logger2.log("Application Running");

        if (logger1 == logger2) {
            System.out.println("Only one Logger object exists.");
        } else {
            System.out.println("Multiple Logger objects exist.");
        }
    }
}
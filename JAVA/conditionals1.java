// program that charecters as a input and print either 1,0,-1
// 1 if (A-Z)
// O IF (a-z)
// -1 if not alphabate

import java.util.Scanner;

public class conditionals1 {
    public static void main(String[] args) {
        System.out.println("Enter a character: ");
        
        char ch;
        Scanner input = new Scanner(System.in);
            ch = input.next().charAt(0);
            
            if ((ch >= 'A' && ch <= 'Z')) {
                System.out.println("The character is an uppercase letter.");
            } else if (ch >= 'a' && ch <= 'z') {
                System.out.println("The character is a lowercase letter.");
            } else {
                System.out.println("The character is neither an uppercase nor a lowercase letter.");
            }
        input.close();
    }
}

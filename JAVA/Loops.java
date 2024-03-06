public class Loops{
    public static void main(String[] args) {
        int i=0;
        while(i<5){
            System.out.println("hello");
            i= i+1;
        }

        int b=0;
        do{
            System.out.println("hiiii");
            b++;
        }
        while (b<0) ;
        System.out.println("after loop");


        for(int j=0; j<5; j++){
            System.out.println("nani");
        }

        int a=2;
        for(int k=1;k<=10;k++){
            System.out.println(a+"*"+k+"="+a*k);
        }
    }
}
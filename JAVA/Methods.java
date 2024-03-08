public class Methods{
    public static void main(String[] args) {
        Methods m = new Methods();
        m.sayHello();
        int k= m.multiplyNumbers(2,3);
        System.out.println(k);
        m.addNumbers(22,33);
    }



    void sayHello(){
        System.out.println("Hello");
    }


    int multiplyNumbers(int a, int b){
        int x= a*b;
        return x;
        // System.out.println(x);
    }

    void addNumbers(int a,int b){
        System.out.println(a+b);
    }
}
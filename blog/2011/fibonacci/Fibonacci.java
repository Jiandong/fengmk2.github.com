public class Fibonacci {
  public static int fib(int n) {
    if (n < 2) {
      return 1;
    } else {
     return fib(n - 1) + fib(n - 2);
    }
  }

  public static void main(String[] args) {
    System.out.print(fib(40) + "\n");
  }
}
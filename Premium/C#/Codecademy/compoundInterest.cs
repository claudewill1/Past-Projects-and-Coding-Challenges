using System;

namespace Review
{
  class Program
  {
    static void Main(string[] args)
    {
      /* use this space to write your own short program! 
      Here's what you learned:

      DATA TYPES: int, double
      ARITHMETIC OPERATORS: +, -, *, /
      INCREMENT/DECREMENT: ++, --
      MODULO: % 
      BUILT-IN METHODS: Abs, Pow, Sqrt, Floor, Ceiling, Min, Max

      Good luck! */
      double total = 0, interestRate, years, annualCompound, Amount;
      Console.Write("Enter the initial amount : ");
      Amount = Convert.ToDouble(Console.ReadLine());
      Console.Write("Enter the interest rate : ");
      interestRate = Convert.ToDouble(Console.ReadLine())/100;
      Console.Write("Enter the number of years : ");
      years = Convert.ToDouble(Console.ReadLine());
      Console.Write("Enter the amount of times interest will be compounded : ");
      annualCompound = Convert.ToDouble(Console.ReadLine());
      for(int t = 1; t < years; t++){
        total = Amount * Math.Pow((1+interestRate/annualCompound),(annualCompound * t));
        Console.Write("Your total for year {0} is {1:F0}.\n",t,total);
      }

      Console.ReadLine();
    }
  }
}
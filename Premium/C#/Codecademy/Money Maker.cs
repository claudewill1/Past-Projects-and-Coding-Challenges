using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
        /* Update to use U.S. coinage amounts */
      Console.WriteLine("Welcome to Money Maker!");
      Console.WriteLine("Enter the amount to convert to coins:");     string amountAsString = Console.ReadLine();
      double amountAsDouble = Convert.ToDouble(amountAsString);
      Console.WriteLine($"{amountAsDouble} cents is equal to...");   
      int goldCoin = 10;
      int silverCoin = 5;

      //find maximum number of gold coins that fit in the amount
      double goldCoins = Math.Floor(amountAsDouble/goldCoin);

      //find remaining amount
      double remainder = amountAsDouble%goldCoin;

      //Find maximum amount of silver coins that fit in remainder
      double silverCoins = Math.Floor(remainder/silverCoin);
      remainder = remainder%silverCoin;

      //Print out all coins
      Console.WriteLine($"Gold coins: {goldCoins}\nSilver coins: {silverCoins}\nBronze coins: {remainder}");
    }
  }
}
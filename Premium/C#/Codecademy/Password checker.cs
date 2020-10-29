using System;
using System.Linq;
using System.Text.RegularExpressions;


namespace Review
{
    class Program
    {
        static void Main(string[] args)
        {
            /* use this space to write your own short program! 
            Here's what you learned:

            BOOL TYPE: bool variableName
            COMPARISON OPERATORS: ==, <, >, <=, >=
            LOGICAL OPERATORS: &&, ||, !

            Good luck! */
            
            Console.Write("enter a password: ");
            string password = Console.ReadLine();

            bool containsUppercase = password.Any(char.IsUpper);
            bool containsLowercase = password.Any(char.IsLower);
            bool containsSpecial = password.Any(ch=> ! char.IsLetterOrDigit(ch));
            bool containsDigits = password.Any(char.IsDigit);

            


            bool accepted = (containsUppercase && containsSpecial && containsDigits);
            
            if (accepted)
            {
                Console.WriteLine("Accepted");
            } else
            {
                Console.WriteLine("Try Again");
            }

           


            Console.ReadLine();

        }


    }
}
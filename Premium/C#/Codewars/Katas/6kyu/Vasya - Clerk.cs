/*The new "Avengers" movie has just been released! There are a lot of people at 
the cinema box office standing in a huge line. Each of them has a single 100, 50 
or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single 
person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no 
money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the 
bills he has at hand at that moment. Otherwise return NO.

Examples:
Line.Tickets(new int[] {25, 25, 50}) // => YES 
Line.Tickets(new int[] {25, 100}) // => NO. Vasya will not have enough money to give change to 100 dollars
Line.Tickets(new int[] {25, 25, 50, 50, 100}) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/
using System;
public class Line
{
    public static string Tickets(int[] peopleInLine)
    {
        int c25 = 0;
        int c50 = 0;

        for(var i = 0; i < peopleInLine.Length; i++) 
        {
            if(peopleInLine[i] == 25)
            {
                c25 += 1;
            } 
            if(peopleInLine[i] == 50)
            {
                c25 -= 1; c50 += 1;
            }
            if(peopleInLine[i] == 100)
            {
                if(c50 == 0 && c25 >= 3)
                {
                    c25 -= 3;
                } else {
                    c25 -= 1; c50 -= 1;
                }
            }
            if(c25 < 0 || c50 < 0)
            {
                return "NO";
            }
        }
        return "YES";
    }
}
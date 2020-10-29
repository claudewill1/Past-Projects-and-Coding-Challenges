using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleGame
{
    class Game : SuperGame
    {

        public new static void UpdatePosition(string key, out int x, out int y)
        {
            x = 0;
            y = 0;
            /*If up arrow pressed: y--
              down arrow pressed y++ 
              left arrow pressed x++
              right arrow pressed x--
            */
            switch (key)
            {
                case "UpArrow":
                    y--;                    
                    break;
                case "DownArrow":
                    y++;
                    break;
                case "RightArrow":
                    x--;
                    break;
                case "LeftArrow":
                    x++;
                    break;
                default:
                    x = 0;
                    y = 0;
                    break;
            }
        }
        public new static char UpdateCursor(string keyPressed)
        {

            switch (keyPressed)
            {
                case "LeftArrow":
                    return '<';
                case "RightArrow":
                    return '>';
                case "UpArrow":
                    return '^';
                case "DownArrow":
                    return 'v';
                default:
                    return '<';


            }
        }
        public new static int KeepInBounds(int coordinate, int maxValue)
        {
            
            if (coordinate < 0)
            {
                return 0; //If player hits right or bottom edge, teleport to opposite side
            } 
            else if (coordinate >= maxValue)
            {
                return maxValue - 1; // if hits left or top edge port to opposite side
            }
            else
            {
                return coordinate; // if player isn't hitting barrier continue as normal
            }
        }
        public new static bool DidScore(int charX, int charY, int fruitX, int fruitY)
        {
            return (charX == fruitX && charY == fruitY) ? true : false;
        }
    }
}

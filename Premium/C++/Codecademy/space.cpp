#include <iostream>
/* Little Mac is an interplanetary space boxer, who is trying to win championship belts for various weight categories on other planets within the solar system.

Write a space.cpp program that helps him keep track of his target weight by:

    It should ask him what his earth weight is.
    Ask him to enter a number for the planet he wants to fight on.
    It should then compute his weight on the destination planet.
*/
int main() {
  int planetNumber;
  double earthWeight, spaceWeight;
  // Ask the user for their earth weight
  std::cout << "Enter your earth weight: ";
  std::cin >> earthWeight;
  // ask the user for the number of the planet they want to visit
  std::cout << "Which planet would you like to fight on? (Venus 1, Mars 2, Jupiter 3, Saturn 4, Uranus 5, Neptune 6) ";
  std::cin >> planetNumber;
  // use switch case statement to output their weight for the selected planet.
  switch(planetNumber){
        case 1:
            std::cout << "Your weight on Venus is: " << (earthWeight * 0.78) << "\n";
            break;
        case 2:
            std::cout << "Your weight on Mars is: " << (earthWeight * 0.39) << "\n";
            break;
        case 3:
            std::cout << "Your weight on Jupiter is: " << (earthWeight * 2.65) << "\n";
            break;
        case 4:
            std::cout << "Your weight on Saturn is: " << (earthWeight * 1.17) << "\n";
            break;
        case 5:
            std::cout << "Your weight on Uranus is: " << (earthWeight * 1.05) << "\n";
            break;
        case 6:
            std::cout << "Your weight on Neptune is: " << (earthWeight * 1.23) << "\n";
            break;
        default:
            break;

    }
   
  
}
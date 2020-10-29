/*Define a function needs_water() that accepts:
  An int number of days since the previous watering
  A bool value is_succulent. (A value of true would indicate that the plant is a succulent.)
*/
#include <iostream>

// Define needs_water() here:
std::string needs_water(int days, bool is_succulent){
 return (is_succulent == false && days > 3)? "Time to water the plant.": (is_succulent == true && days <= 12)? "Don't water the plant!" : (is_succulent == true && days >= 13)?"Go ahead and give the plant a little water." : "Don't water the plant!";
}

int main() {
  
  std::cout << needs_water(10, false) << "\n";
  
}
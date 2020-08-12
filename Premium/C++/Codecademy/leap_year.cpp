#include <iostream>

int main() {
  
  int year;

  // ask user for current year
  std::cout << "Enter a year: ";
  std::cin >> year;
  // check if year is less than 1000 or greater than 9999 if true it is an invalid
  // entry
  if(year < 1000 && year > 9999){
      std::cout << "Invalid entry.\n";
  }/* if the year modulo 4 equals 0 and year modulo 100 not equal 0 or year modulo equal 0
    year is a leap year*/ else if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
      std::cout << year << " is a leap year.\n";
  } else {
      std::cout << year << " is not a leap year.\n";
  }
  
}
#include <iostream>

int main() {
  
  double pesos, reais, soles;
  double dollars;

  // ask the user to input number of Colombian pesos
  std::cout << "Enter number of Colombian Pesos: ";
  std::cin >> pesos;
  // ask for number of Brazilian Reais
  std::cout << "Enter number of Brazilian Reais: ";
  std::cin >> reais;

  // ask for number of Peruvian Soles
  std::cout << "Enter number of Peruvian Soles: ";
  std::cin >> soles;

  /* 1 Colombian Peso equals
     0.00027 United States Dollar.
     1 Brazilian Real equals
     0.19 United States Dollar.
     1 Sol equals
     0.29 United States Dollar. */
  double peso_conversion_rate = 0.00027;
  double reais_conversion_rate = 0.19;
  double sol_conversion_rate = 0.29;

  dollars = (peso_conversion_rate * pesos) + (reais_conversion_rate * reais) * (sol_conversion_rate * soles);
     
  // output the total amount of money in dollars
  std::cout << "US Dollars = $" << dollars << "\n";
}
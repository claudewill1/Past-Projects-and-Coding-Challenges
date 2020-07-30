#include <iostream>

int main() {
    
    int dog_age = 6;

    int early_years,later_years, human_years;

    // the first two years
    early_years = 21;
    // the following years
    later_years = (dog_age-2)*4;
    // dogs age in human years
    human_years = early_years + later_years;

    std::cout << "My name is Harry! Ruff ruff, I am " << human_years << 
    " years old in human years.\n";
}
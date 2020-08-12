#include <iostream>
#include <cstdlib>
#include <ctime>

int main() {
  // output MAGIC 8-BALL
  std::cout << "MAGIC 8-BALL\n";

  // generate a random number and assign it to
  // variable named answer
  srand(time(NULL));
  int answer = std::rand() % 10;

  

  if(answer == 0){
    std::cout << "It is certain.\n";

  } else if (answer == 1){
    std::cout << "It is decidely so.\n";
  } else if (answer == 2){
    std::cout << "Yes - definitely.\n";
  } else if (answer == 3){
    std::cout << "As I see it, yes.\n";
  } else if (answer == 4){
    std::cout << "Most likely.\n";
  } else if (answer == 5){
    std::cout << "You may rely on it.\n";
  } else if (answer == 6){
    std::cout << "Ask again later.\n";
  } else if (answer == 7) {
    std::cout << "Cannot predict now.\n";
  } else if (answer == 8) {
    std::cout << "My reply is no.\n";
  } else {
    std::cout << "Very doubtful.\n";
  }
}
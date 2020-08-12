/* This program is a variant of paper, rock, scissors, that uses two extra actions Lizard and Spock. The purpose of adding two more options to the game is that it reduces the probability of a tie. In Rock Paper Scissor games there is a 75-80% probability of a tie */
#include <iostream>
#include <stdlib.h>
#include <ctime>

int main() {
  // Live long and prosper
  

  srand (time(NULL));

  int computer = rand() % 3 + 1;

  int user = 0;

  std::cout << "====================\n";
  std::cout << "rock paper scissors!\n";
  std::cout << "====================\n";

  std::cout << "1) ✊\n";
  std::cout << "2) ✋\n";
  std::cout << "3) ✌️\n";
  std::cout << "4) lizard\n";
  std::cout << "5) spock\n\n";

  std::cout << "shoot! ";

  int rock = 1;
  int paper = 2;
  int scissors = 3;
  int lizard = 4;
  int spock = 5;
  
  // store users input
  std::cin >> user;

  
  
  /* 
    rock > scissors
    scissors > paper
    paper > rock
    lizard > spock
    spock > scissors
    scissors > lizard
    paper > spock
    spock > rock
    rock > lizard
  */

  std::cout << "computer: " << computer << "\n\n";

  
  if(user == rock && computer == scissors){
    std::cout << "You Win!\n";
  } else if (user == scissors && computer == paper) {
    std::cout << "You Win!\n";
  } else if (user == paper && computer == rock) {
    std::cout << "You Win!\n";
  } else if (user == lizard && computer == spock) {
    std::cout << "You Win!\n";
  } else if (user == spock && computer == scissors) {
    std::cout << "You Win!\n";
  } else if (user == scissors && computer == lizard) {
    std::cout << "You Win!\n";
  } else if (user == paper && computer == spock) {
    std::cout << "You Win!\n";
  } else if (user == spock && computer == rock) {
    std::cout << "You Win!\n";
  } else if (user == rock && computer == lizard) {
    std::cout << "You Win!\n";
  } else if (user == computer) {
    std::cout << "Tie!\n";
  } else {
    std::cout << "You Lose!\n";
  }
}
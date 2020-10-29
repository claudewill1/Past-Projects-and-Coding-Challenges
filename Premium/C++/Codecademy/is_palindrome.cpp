/* Define a function is_palindrome() that takes:
    An std::string parameter text.

    the function should return:
        true if text is palindrome
        false if text is not a palindrome
*/
#include <iostream>
#include <string.h>

bool is_palindrome(std::string text){
    std::string reverseS = "";

    for(int i = text.size() - 1; i >= 0; i--) reverseS.push_back(text[i]);

    return (reverseS == text) ? true : false;
}

int main() {
  
  std::cout << is_palindrome("madam") << "\n";
  std::cout << is_palindrome("ada") << "\n";
  std::cout << is_palindrome("lovelace") << "\n";
  
}
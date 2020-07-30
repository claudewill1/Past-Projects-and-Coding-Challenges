/*Quadratic Formula

In algebra, a quadratic equation is an equation having the form:

ax2+bx+c=0ax^2 + bx + c = 0ax2+bx+c=0

Graphing, we get the curve below:

Graph

The corresponding x values are the x-intercepts of the graph, while a, b, and c
 are constants.

Write a C++ program called quadratic.cpp that solves the quadratic equation for 
the x‘s:

x=−b±b2−4ac2ax = \frac{-b\pm\sqrt{b^2-4ac}}{2a}x=2a

−b±b2−4ac

​​ */
#include <iostream>
#include <cmath>

int main() {
    double a, b, c;

    // get value for a
    std::cout << "Enter a: ";
    std::cin >> a;

    // get value for b
    std::cout << "Enter b: ";
    std::cin >> b;

    // get value for c
    std::cout << "Enter c: ";
    std::cin >> c;

    // declare variables to hold roots 1 and 2
    double root1, root2;

    // calculate root1
    root1 = (-b + std::sqrt(b*b - 4*a*c))/(2*a);

    // calculate root2
    root2 = (-b - std::sqrt(b*b - 4*a*c))/(2*a);

    // output root 1 and 2
    std::cout << "Root 1 is " << root1 << "\n";
    std::cout << "Root 2 is " << root2 << "\n";
}
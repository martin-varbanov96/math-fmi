#include <iostream>

using namespace std;

int main()
{
    int a = 5;
    int* b = &a;
    cout << b << endl; // prints address of a


    int c = *b;
    a++;

    cout << c << endl; // prints value of a

    int* d = &a;
    *d = 12;
    cout << a << endl << *b; // prints value of d
}

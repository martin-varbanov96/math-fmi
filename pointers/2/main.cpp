#include <iostream>

using namespace std;

int main()
{
    int a = 5;
    int* pa = &a;

    cout << pa << endl;
    cout << *++pa << endl;
    cout << *pa++ << endl;
    cout << *pa << endl;
}

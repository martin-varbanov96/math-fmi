#include <iostream>

using namespace std;

int main()
{

    //define array with n elements
    int n = 12;
    int* arrN = new int[n];
    cout << arrN << endl;

    //going over array values with pointers
    int arr[5] = {4, 3, 2, 1, 0};
    int* current = &arr[0];
    cout << *current<< endl;
    cout << *++current << endl;
    cout << *--current <<endl;
    cout << *(current + 2) << endl;
    cout << *current << endl;
    cout << (*current) + 2<< endl; //Wrong!!
    cout << *current << endl;

}

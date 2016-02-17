#include <iostream>
#include <limits>
#include <iomanip>


using namespace std;

int main()
{

    //Sum way:
    cout << "This is the sum way";
    double result = 1;
    double fct = 1.0;
    for(int i = 1; i <= 10; i++){
        fct *= i;
        result += 1/fct;
        cout << setprecision(100)<< result << endl;
    }

    /*
    double result;
    for(int i = 1; i <= 100; i++){
        result = (1 + 1/i) ^ i;
        cout << numeric_limits<double>::result;
    }
    */
}

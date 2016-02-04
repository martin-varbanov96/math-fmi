#include <iostream>
#include <math.h>
#include <cmath>

/*
Зад.3. Да се напише рекурсивна функция, която проверява дали дадена цифра k участва в десетичния запис на число n.
*/
using namespace std;

int numDigits(int number)
{
    int digits = 0;
    if (number < 0) digits = 1; // remove this line if '-' counts as a digit
    while (number) {
        number /= 10;
        digits++;
    }
    return digits;
}


bool isContained(int k, int n){
    int digit = numDigits(k);
    int powValue = 1;
    for(int i = 0; i < digit; i++){
        powValue *= 10;
    }
    int checker = n % powValue;
    if(checker == k){
        return 1;
    }
    if(n == 0){
        return 0;
    }
    return isContained(k, n/10);
}
int main()
{
    int k;
    cin >> k;
    int n;
    cin >> n;
    bool result = isContained(k, n);
    if(result == 1){
        cout << "True!!";
    }
    else{
        cout << "False";
    }
}

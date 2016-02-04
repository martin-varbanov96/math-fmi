#include <iostream>

/*
Зад.1. Да се напише функция, която проверява дали цифрите в десетичния запис на дадено число са в нарастващ ред.
*/
using namespace std;

int main()
{
    int a;
    int n;
    int falseCounter = 0;
    cin >> a;
    int temp = a;
    while(temp != 0){
        temp /= 10;
        n++;
    }
    int* arr = new int[n];
    for(int i = 0; i < n; i++){
        arr[i] = (a%10);
        a /= 10;
        if(i != 0){
            if(arr[i-1] < arr[i]){
                falseCounter++;
                break;
            }
        }
    }
    if(falseCounter == 0){
        cout << "Yes";
    }
    else{
        cout << "No";
    }

}

#include <iostream>


/*
Зад.4. Да се напише рекурсивна функция, която
приема като аргументи масив и неговата дължина. Нека а
е сумата от елементите на всички четни позиции, а b- сумата от\
елементите на всички нечетни такива на дадения масив. Функцията да връща като резултат a-b.
*/
using namespace std;
int getResult(int* arr, int index, int max, int sum){
    if(index == max){
        return sum;
    }
    if(index % 2 == 0){
        sum += arr[index];
        return getResult(arr, index+1, max, sum);
    }
    sum -= arr[index];
    return getResult(arr, index + 1, max, sum);
}
int main()
{
    int n;
    cout << "Enter length: ";
    cin >> n;
    int* arr=new int[n];
    for(int i = 0; i < n; i++){
        cout << "Enter array value: ";
        cin >> arr[i];
    }
    int result = getResult(arr, 0, n, 0);
    cout << result;
}

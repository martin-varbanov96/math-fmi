#include <iostream>
/*
Зад.2. Нека А е матрица m x n с целочислени елементи, където m є [1;30] и n є [1;20].
 Да се напише функция, която намира индекса
на реда, в който съществува елемент, равен на сумата  на останалите елементи на реда.
Ако такъв ред не съществува, функцията да връща като резултат -1.
*/
using namespace std;
int getIndex(int** a, int m, int n){
    int tempSum = 0;
    for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            for(int k = 0; k < n; k++){
                if(j != k){
                    tempSum += a[i][k];
                }
            }
            if(tempSum == a[i][j]){
                return i;
            }
            tempSum = 0;

        }
    }
    return -1;
}
int main()
{
    int m = 50;
    int n = 50;
    cout << "Enter m" << endl;
    while(m > 20 || m < 1){
            cin >> m;
    }
    cout << "Enter n";
    while(n > 30 || n < 1){
            cin >> n;
    }
    int** a = new int*[m];
	for (int i = 0; i < m; i++){
		a[i] = new int[n];
	}
	for(int i = 0; i < m; i++){
        for(int j = 0; j < n; j++){
            cin >> a[i][j];
        }
	}
	int result = getIndex(a, m, n);
	cout << result;

}

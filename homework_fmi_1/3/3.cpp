// 3.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include<iostream>
using namespace std;


/*
Зад. 3. Да се напише програма, която въвежда
от клавиатурата естествено число n и масив от
цели числа с дължина n. Да се намери броят на отрицателните числа в този масив.
*/
int main(){
	int n = 0;
	cout << "Enter array length: ";
	cin >> n;
	cout << "\n";
	int count = 0;
	int *arr = new int[n];

	for (int i = 0; i < n; i++)
	{
		cout << "Enter number: ";
		cin >> arr[i];
		cout << "\n";

		if (arr[i] < 0){
			count++;
		}
	}
	cout << count << "\n";
	
}


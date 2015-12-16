// 2.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include<iostream>
using namespace std;

/*
Зад. 2. Едно число ще наричаме “съвършено”, ако 
е равно на сумата от делителите си, които са по- малки от самото него.
Да се напише програма, която по въведени две естествени 
числа от клавиатурата, да извежда на екрана всички “съвършени” числа между тях.
*/

bool perfectNumber(int number)
{
	int i;
	int sum = 0;
	for (i = 1; i <= number / 2; i++)
	{
		if (number%i == 0)
		{
			sum += i;
		}
	}
	if (sum == number)
		return i;
	else
		return 0;
}

int main()
{



	int start = 0;
	int end = 0;
	bool result = false;

	cout << "Enter start number: ";
	cin >> start;
	cout << "\n";

	cout << "Enter end number: ";
	cin >> end;
	cout << "\n";

	for (int i = start; i <= end; i+=2){
		result = perfectNumber(i);
		if (result == 1){
			cout << i << "\t";
		}
	}

	cout << "End";
}


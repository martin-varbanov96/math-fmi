// homework_fmi_1.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include<iostream>
using namespace std;

/*
Зад. 1. Да се напише програма, която въвежда от клавиатурата
естествено число и извежда на екрана сумата на цифрите му и тяхното произведение.
*/

int main(){
	int  num = 0;
	int sum = 0;
	int multip = 1;
	int temp = 0;
	cout << "Enter number: ";
	cin >> num;

	while (num > 0){
		cout << num << "\n";
		temp = num % 10;
		sum += temp;
		multip *= temp;
		num /= 10;
	}

	cout << "sum is: " << sum << "\n";
	cout << "multiplication is: " << multip << "\n";

	
}
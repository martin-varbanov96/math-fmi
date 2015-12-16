// 4.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include<iostream>
using namespace std;

/*
Зад. 4. Да се напише програма, която извежда на екрана всички двуцифрени числа със сума от цифрите просто число.
*/
bool isPrime(int num)
{
	if (num <= 1)
		return false;
	else if (num == 2)
		return true;
	else if (num % 2 == 0)
		return false;
	else
	{
		bool prime = true;
		int divisor = 3;
		double num_d = static_cast<double>(num);
		int upperLimit = static_cast<int>(sqrt(num_d) + 1);

		while (divisor <= upperLimit)
		{
			if (num % divisor == 0)
				prime = false;
			divisor += 2;
		}
		return prime;
	}
}
int main(){
	int temp = 0;
	bool simple = false;

	for (int i = 10; i <= 99; i++){
		temp = i % 10;
		temp += i / 10;
		simple = isPrime(temp);
		if (simple == 1){
			cout << i << "\n";
		}
	}
}

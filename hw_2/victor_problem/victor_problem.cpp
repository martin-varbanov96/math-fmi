// victor_problem.cpp : Defines the entry point for the console application.
//
/*
Important:   Your program must contain at least two functions: the main() function 
that will perform the input and output operations, and the second function that will contain the problem solution.
1.	Write a program that reads a sequence of positive numbers and prints out their binary numeral
system representations (example: 3, 8 are represented by 11, 1000).
*/

#include "stdafx.h"
#include "iostream"
#include <cmath>
using namespace::std;

int getBianry(int var){
	string temp = 0;
	while (var != 0){
		temp = (var % 2 == 0 ? "0" : "1" ) + temp; 
		var /= 2;
	}
	return temp;
}
int main(){
	int n = 0;
	cin >> n;
	int temp = 0;
	for (int i = 0; i < n; i++){
		cin >> temp;
		cout << getBianry(temp);
	}
}
// hw_2.cpp : Defines the entry point for the console application.
//
/*
���.1.�� �� ������ ��������, ����� ������� �� ������������
���������� ����� n � ������������ �� ��� n - ����� �������.����������
�� ��������� ���� ���������� �� ������������ � 0.
*/


//TODO- check for explisity

//How to return a array from a function ?

#include "stdafx.h"
#include "iostream"
#include <cmath>
using namespace::std;

int main()
{
	int n = 0;
	cout << "Enter n";
	cin >> n;
	double result = 0;
	int* a = new int[n];
	int* b = new int[n];
	for (int i = 0; i < n; i++){
		cout << "Enter a value= ";
		cin >> a[i];

		cout << "Enter b value= ";
		cin >> b[i];
		result += a[i] * b[i];
	}
	if (result != 0){
		cout << "The product is: " << result;
	}
	return 0;
}


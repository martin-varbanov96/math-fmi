// 3.cpp : Defines the entry point for the console application.
//
/*
���.3.  �� �� ������ ��������, ����� ������� �� ������������ 
������� � ���������� �� ��������� �������. ���������� �� ��������� 
���� ��������� � �����- ��������� (������ �������� ��� ������� �������� �� ����) � ��� �, �� ������� �� ������ ������� ������������.
*/

#include "stdafx.h"
#include "iostream"
#include <cmath>
using namespace::std;

int main(){
	int n = 0;
	cout << "Enter n= ";
	cin >> n;
	int** a = new int*[n];
	for (int i = 0; i < n; i++){
		a[i] = new int[n];
	}
	int count = 0;
	int product = 1;
	for (int i = 0; i < n; i++){
		for (int j = 0; j < n; j++){
			cout << "Enter matrix value= ";
			cin >> a[i][j];
			if (i > j){
				if (a[i][j != 0]){
					count++;
				}
			}
			if (i == j){
				product *= a[i][j];
			}
		}
	}
	if (count == 0){
		cout << product;
	}
	for (int i = 0; i < n; i++){
		delete[] a[i];
	}
	delete[] a;
}
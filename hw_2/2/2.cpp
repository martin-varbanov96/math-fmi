// 2.cpp : Defines the entry point for the console application.
//
/*
���.2.  �� �� ������ ��������, ����� 
������� �� ������������ ���������� ����� n � n �� ���� ���� �����. ���������� �� 
������� ������������ ����� �, ������, �� ������� n-�� ����� ��� � �������.
*/


#include "stdafx.h"
#include "iostream"
#include <cmath>
using namespace::std;

int main(){
	int n = 0;
	cout << "Enter n= ";
	cin >> n;
	int count = 0;
	int max = 0;
	int p = 0;
	int temp = 0;
	int* arr = new int[n];
	for (int i = 0; i < n; i++){
		cin >> arr[i];
	}
	for(int i = 0; i < n; i++){
		for (int j = 0; j < n; j++){
			if (arr[i] == arr[j]){
				count++;
			}
			if ((count == arr[i]) && (max < arr[i])){
				temp = max;
				max = arr[i];
			}
			if (count > arr[i]){
				max = temp;
			}
		}
		count = 0;
	}
	cout << max;
}
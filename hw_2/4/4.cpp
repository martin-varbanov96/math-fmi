// 4.cpp : Defines the entry point for the console application.
//
/*
Зад.4.  Да се напише програма, която да проверява дали въведена (като в зад.3) квадратна матрица е симетрична.
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
	for (int i = 0; i < n; i++){
		for (int j = 0; j < n; j++){
			cout << "Enter matrix value= ";
			cin >> a[i][j];			
		}
	}
	int count = 0;
	for (int i = 0; i < n; i++){
		for (int j = 0; j < n; j++){
			if ( a[i][j] != a[j][i]){
				count++;
				//How can I break all the for loops?!
			}
		}
	}
	if (count == 0){
		cout << "Matrix is semetric";
	}
	else{
		cout << "Matrix is not semetric";
	}
	
	for (int i = 0; i < n; i++){
		delete[] a[i];
	}
	delete[] a;
}

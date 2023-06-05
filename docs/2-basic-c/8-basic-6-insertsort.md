---
title: Basic Problem 5. "Insert Sort"
---

เรียนรู้ algorithm เบื่องต้น

โจทย์คือ ให้เลขมา `n` ตัวแล้วต้องการให้เราเรียงเลขจากน้อยไปมาก

ตัวอย่าง

```
input_1:
5
2 5 3 1 6

output_1:
1 2 3 5 6

---
input_2:
12
3 9 4 1 7 1 5 9 8 7 6 2

output_2:
1 1 2 3 4 5 6 7 7 8 9 9
```

เฉลย

```cpp
// bubble_sort.c
#include <stdio.h>

// สลับค่าที่ตำแหน่ง a และ b
void swap(int* a, int *b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

int main() {
  // รับ input
  int n, arr[100]; scanf("%d", &n);
  for (int i = 0; i < n; ++i) scanf("%d", &arr[i]);

  // --- bubble_sort begin ---
  // เรียง โดยเลือกเอาตัวเล็กสุดจาก [l..n] มาใส่ที่ l แล้วขยับ l
  for (int l = 0; l < n; ++l) {
    for (int r = l + 1; r < n; ++r) {
      if (arr[r] < arr[l]) {
        // swap
        int tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
      }
    }
  }
  // --- bubble_sort end ---

  // แสดง output
  for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
}
```

เฉลยแบบที่เขียนแยก function

```cpp
// bubble_sort_func.c
#include <stdio.h>

// สลับค่าที่ตำแหน่ง a และ b
void swap(int* a, int *b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

// --- bubble_sort begin ---
void bubble_sort(int n, int* arr) {
 for (int l = 0; l < n; ++l) {
    for (int r = l + 1; r < n; ++r) {
      if (arr[r] < arr[l]) {
        swap(&arr[l], &arr[r]);
}}}}
// --- bubble_sort end ---

int main()
  // input
  int n, arr[100]; scanf("%d", &n);
  for (int i = 0; i < n; ++i) scanf("%d", &arr[i]);

  bubble_sort(n, arr); // เรียกการทำงานข้างบน

  // output
  for (int i = 0; i < n; ++i) printf("%d ", arr[i]);
}
```

---
title: Basic Program 4. "Fibonucci"
---

เรียนรู้การ loop

<!-- TODO add image -->

```c
// fib.c
#include <stdio.h>

int main() {
  int a = 0, b = 1;
  int i = 0;
  while (i <= 10) {
    printf("fib(%d) = %d\n", i, a);
    int tmp = a;
    a = a + b;
    b = tmp;
    i += 1;
  }
}
```

ได้ผลลัพท์เป็น

```text
fib(0) = 0
fib(1) = 1
fib(2) = 1
fib(3) = 2
fib(4) = 3
fib(5) = 5
fib(6) = 8
fib(7) = 13
fib(8) = 21
fib(9) = 34
fib(10) = 55
```

### อะไรคือ `while (i <= 10) {}`

`while` _(while loop)_ เป็นการบอกว่า ในขณะที่ condition ยังเป็นจริงอยู่ ให้ทำงานข้่างในวงไปเรื่อยๆ (ทำซ้ำไปเรื่อง ถ้าเงื่อนไขยังจริงอยู่)

```cpp
while (condition) {
  ...
}
```

ตัวอย่างในชีวิตจริงเช่น

```cpp
while (ยังไม่อิ่ม) {
  กินข้าวเพิ่ม
}
```

```cpp
while (ยังไม่ถึงเส้นชัย) {
  เดินต่อไป
}
```

![image](https://github.com/krist7599555/ocom/assets/19445033/0696dcda-6d90-468a-a60b-30bac7a321b1)

เป็นรูปแบบการทำ loop แบบวนซ้ำ

### อะไรคือ `i += 1`

ความหมายเหมือน `i = i + 1` แต่เขียนสั้นกว่า

นอกจากนั้นยังมีย่อกว่านี้อีกคือ `++i`, `--i` และ `i++`, `i--`

> ```cpp
> i = 3;
> assert(++i == 4);
> assert(i == 4);
> ```

> ```cpp
> j = 3;
> assert(j++ == 3);
> assert(j == 4);
> ```

### Pattern การวนซ้ำด้วย `for loop`

ถ้าสังเหตุการวนด้านบน เราจะเห็นรูปแบบว่า

- เราประกาศ `int i = 0;` ก่อน _(initial state)_
- แล้ววนซ้ำเมื่อ `i <= 10` _(check valid)_
- ในการทำซ้ำแต่งละครั้ว ก็ให้เพิ่ม i ขึ้นเรื่อยๆ `i += 1;` _(update)_

รูปแบบ `init, checkvalid, update` นี้จะเกิดขึ้นบ่อยๆมากเขาเลยสร้าง syntax ที่ชื่อว่า `for` ขึ้นมาเพิ่มยุบรวม 3 ตัวนี้

```cpp
//  เขียนแบบใช้ while
init;
while (check_valid) {
  ...
  update;
}
```

```cpp
// เขียนแบบใช้ for
for (init; check_valid; update) {
  ...
}
```

เราแปลงโคดด้านบนเป็น `for` และยุบ `+=`

```cpp
// fib.c
#include <stdio.h>

int main() {
  int a = 0, b = 1;
  int i = 0;
  // --- fib begin ---
  while (i <= 10) {
    printf("fib(%d) = %d\n", i, a);
    int tmp = a;
    a = a + b;
    b = tmp;
    i += 1;
  }
  // --- fib end ---
}
```

เป็น

```cpp
// fib_forloop.c
#include <stdio.h>

int main() {
  int a = 0, b = 1;
  int i = 0;
  // --- fib begin ---
  for (int i = 0; i <= 10; i += 1) {
    printf("fib(%d) = %d\n", i, a);
    int tmp = a;
    a += b;
    b = tmp;
  }
  // --- fib end ---
}
```

### ลองตั้ง function ในการสลับค่าดู (ยากเกินไปข้ามก่อนได้)

`function` คือก้อนชุดคำสั่งที่รับ input แล้วสร้าง output. (I -> O)

![image](https://github.com/krist7599555/ocom/assets/19445033/65931fa9-8ee7-47b3-82de-4ba2ee53a2cf)

```cpp
#include <stdio.h>

// สลับค่าที่ตำแหน่ง a และ b
void swap(int* a, int *b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

int main() {
  int a = 0, b = 1;
  int i = 0;
  for (int i = 0; i <= 10; i += 1) {
    printf("fib(%d) = %d\n", i, a);
    b += a;
    swap(&a, &b);
  }
}
```

ตัวอย่างข้างบนได้เพิ่ม function `void swap(int* a, int *b)`

- input ที่รับตำแหน่งที่ทด 2 ตำแหล่ง
- output แก้ไขให้ค่าของ a, b ให้สลับกัน

### อะไรคือ `int*` (ยากเกินไปข้ามก่อนได้)

- `int* a` คือ Pointer หมายถึงตำแหน่งของกระดาษทด ที่ตรงนั้นควรจะทดเลขจำนวนเต็มได้ 1 ค่า.
- สามารถใช้ `*a` เพื่อแปลงจะตำแหน่ง เป็นค่าที่ทดไว้แทน
- `&a` คือ ตำแหน่งบนกระดาษทดของตัวแปร `a`

เรื่องที่เราพูดๆกันอยู่นี้เรียกว่า `Pointer` เป็นเรื่องที่น่าสนใจดี แต่ข้อเสียตือ bug ได้ง่าย

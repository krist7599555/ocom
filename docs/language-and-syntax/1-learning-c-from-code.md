---
title: เขียนโปรแกรมภาษา c แบบง่ายสุดๆ
---

แนะนำให้เริ่มจากภาษา c ก่อนนะ แล้วเราจะขยับไป cpp แบบสบายใจขึ้น

## Basic Program 1. "Hello World!"

```c
// hello.c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

ให้ลองรันคำสั้งนี้ก่อนจะได้ผลลัพท์ว่า

```text
"Hello World!"
```

ถือว่าเป็นเบื่องต้น

แต่ทำไมแค่แสดงผลถึงใช้โคดหลายส่วนจัง?

### อะไรคือ `#include <stdio.h>`

#### อะไรคือ `#include`

`#include` เป็นคำสั้งโหลดชุดคำสั้งมาใช้ โดยวิธีการทำงานคือ copy-paste file [`stdio.h`](https://github.com/gcc-mirror/gcc/blob/f66e0a94ad7bc18538c8207fc2c86b62e4a51bb2/fixincludes/tests/base/stdio.h#L74-L76) ไว้ข้างบนเฉยๆเลย

#### อะไรคือ `stdio.h`

`stdio.h` เป็นไฟล์ภาษา c นี้แหละ ที่ทำหน้าที่รับ input แล้วก็แสดงผล

`stdio` มากจาก standart input output

ในที่นี้เราใช้ function [👉 `printf` จาก stdio.h (อยากให้กดดู)](https://github.com/gcc-mirror/gcc/blob/f66e0a94ad7bc18538c8207fc2c86b62e4a51bb2/fixincludes/tests/base/stdio.h#L74-L76)

> `function` แปลว่าชุดคำสั้งทำงาน ที่สามารถรับ input และได้ผลลัพท์ output ได้ เช่น `sum(1, 3) == 3`, `abs(-9) == 9`.
>
> ถ้าเป็นทาง math จะเขียนได้หลายแบบเช่นกัน เช่น `x → f(x)`, `y = f(x) = ax + b`, `f: x, y → sqrt(x^2 + y^2)`

สังเกตุว่า `printf` มีการ implement เป็น

```cpp
// stdio.h
extern int printf( const char *, __gnuc_va_list );
```

คือบอกว่า printf รับค่าตัวแรกเป็น `const char*` และตัวถัดมาเป็น `__gnuc_va_list` แล้ว return ค่ากลับไปเป็น `int` แต่ไม่ได้มีการ implement จริงๆอยู่ตรงนั้น (`extern` = external implementation)

> `char` มาจาก Character แปลว่า ตัวอักษร
>
> `char*` ในที่นี้หมายถึง Character หลายๆตัว เลยหมายถึงคำ CharSequence/Word/Sentense/Text/Paragraph/String
>
> จากคำสั้ง `printf("Hello World!")` คำว่า
>
> `"Hello World!"` จึงมาจาก `['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0']` เป็น CharSequence

นี้แหละคือความเท่ของ `.h` (header file) คือเป็นไฟล์ที่ช่วยบอกว่า จะมีของหน้าตาแบบไหนชื่ออะไร แต่ยังไม่จำเป็นต้องเขียนวิธีการทำงานลงไปก็ได้

สาเหตุที่ `printf` ไม่ได้เขียนการทำงานจริงไว้ เพราะว่าระบบปฏิบัติการ(OS) ต่างกัน การจัดเก็บ memory ต่างกัน มีวิธีการจองพื้นที่แตกต่างกัน การจะให้ hardware ต่างกันมันทำงานเป๊ะๆเหมือนกันเลยเป็นไปได้ยาก เลยให้ hardware แต่ละเครื่องไป implement วิธีการ `printf` ที่ได้ผลลัพท์ตาม spec ที่ให้ไปก็พอ

1. > นอกจาก `#include <stdio.h>` แล้วยังมี `#include "stdio.h"` ด้วยนะเป็นการบอกว่า
   >
   > - `#include <ของมาตรฐาน>`
   > - `#include "ของเขียนเอง"`
1. > - ภาษา c ใช้โคดเป็น `.c` ใช้ headerเป็น `.h`
   > - ภาษา cpp ใช้โคดเป็น `.cpp` ใช้ headerเป็น `.hpp`
1. > เมื่อใช้ภาษา cpp ที่มี function ใหม่กว่า เขาเลยสร้าง include ใหม่ให้เป็นระบบมากขึ้น ตาม [C library](https://cplusplus.com/reference/clibrary). แต่ก็ยังใช้ #include แบบเก่าได้อยู่
   > |c|cpp|function ทีใช้บ่อย|
   > |-|-|-|
   > |`#include <stdio.h>`| [`#include <cstdio>`](https://cplusplus.com/reference/cstdio) |`scanf`, `printf`|
   > |`#include <string.h>`| [`#include <cstring>`](https://cplusplus.com/reference/cstring) |`strlen`, `memset`, `memcpy`|
   > |`#include <assert.h>`| [`#include <cassert>`](https://cplusplus.com/reference/cassert) |`assert`|
   > |`#include <math.h>`| [`#include <cmath>`](https://cplusplus.com/reference/cmath) |`pow`,`sqrt`,`hypot`,`ceil`,`floor`|
   > |`#include <stdlib.h>`| [`#include <cstdlib>`](https://cplusplus.com/reference/cstdlib) |`qsort`,`rand`, `abs`,`malloc`,`exit`,`atoi`|

### อะไรคือ `int main() {}`

เพราะโปรแกรมนึงสามารถทำงานได้หลายอย่าง เราเลยต้องระบบให้มันว่า งานแรกที่เริ่มทำคืออะไร ซึ่งกำหนดว่างานแรกที่ทำต้องชื่อว่า `main` เท่านั้น

ที่ใช้คำว่าชุดคำสั้งเพราะว่า `main` เป็น function ที่ต้องส่งค่า `int` กลับไป

> `int` มากจาก Integer แปลว่า จำนวนเต็ม

ในบรรทัดที่ `return 0;` เราก็ส่งค่า `int` กลับไปจริงๆมีค่าเป็น `0`. พร้อมกับจบการทำงานใน `main` ถือว่าโปรแกรมสิ้นสุดแล้ว

เลข `0` (program exit code / exit status) นี้หมายถึงสถานะสุดท้ายของโปรแกรมว่าจบการทำงานแบบใด

- `exit code == 0` แปลว่า จบการทำงานแบบปกติ
- `exit code != 0` แปลว่า เกิด error ทำให้ต้องจบการทำงาน

และเลข `exit code` อื่นๆก็มีความหมายเช่นกัน เช่นตัวอย่างจาก [reference for shell exit codes](https://tldp.org/LDP/abs/html/exitcodes.html)

| Exit Code Number | Meaning                                                      | Example                  | Comments                                                                                                        |
| ---------------- | ------------------------------------------------------------ | ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 0                | Success                                                      |                          |                                                                                                                 |
| 1                | Catchall for general errors                                  | let "var1 = 1/0"         | Miscellaneous errors, such as "divide by zero" and other impermissible operations                               |
| 2                | Misuse of shell builtins \(according to Bash documentation\) | empty_function\(\) \{\}  | Missing keyword or command, or permission problem \(and diff return code on a failed binary file comparison\)\. |
| 126              | Command invoked cannot execute                               | /dev/null                | Permission problem or command is not an executable                                                              |
| 127              | "command not found"                                          | illegal_command          | Possible problem with $PATH or a typo                                                                           |
| 128              | Invalid argument to exit                                     | exit 3\.14159            | exit takes only integer args in the range 0 \- 255 \(see first footnote\)                                       |
| 128\+n           | Fatal error signal "n"                                       | kill \-9 $PPID of script | $? returns 137 \(128 \+ 9\)                                                                                     |
| 130              | Script terminated by Control\-C                              | Ctl\-C                   | Control\-C is fatal error signal 2, \(130 = 128 \+ 2, see above\)                                               |
| 255\*            | Exit status out of range                                     | exit \-1                 | exit takes only integer args in the range 0 \- 255                                                              |

### อะไรคือ `printf`

`printf` เป็น function ที่ใช้แสดงค่า CharSequence และค่ารูปแบบอื่นๆออกมาทางหน้าจอ (standard output)

โดยที่สามารถกำหนด format ตามตัวอย่างข้างล่าง

```c
#include <stdio.h>

int main() {
  printf ("Characters: %c %c \n", 'a', 65);
  printf ("Decimals: %d %ld\n", 1977, 650000L);
  printf ("Preceding with blanks: %10d \n", 1977);
  printf ("Preceding with zeros: %010d \n", 1977);
  printf ("Some different radices: %d %x %o %#x %#o \n", 100, 100, 100, 100, 100);
  printf ("floats: %4.2f %+.0e %E \n", 3.1416, 3.1416, 3.1416);
  printf ("Width trick: %*d \n", 5, 10);
  printf ("%s \n", "A string");
  return 0;
}
```

หากรันโปรแกรมข้างบนจะแสดงค่า ทาง standard output ว่า

```text
Characters: a A
Decimals: 1977 650000
Preceding with blanks:       1977
Preceding with zeros: 0000001977
Some different radices: 100 64 144 0x64 0144
floats: 3.14 +3e+000 3.141600E+000
Width trick:    10
A string
```

สรุปย่อการ format การปริ้น

| printf format | output                                                                   | ตัวอย่าง   |
| ------------- | ------------------------------------------------------------------------ | ---------- |
| %c            | แสดงผลในรูปแบบของ Character                                              | 'a'        |
| %d            | แสดงผลในรูปแบบของ Integer/Decimal                                        | 789        |
| %f            | แสดงผลในรูปแบบของ Float (ทศนิยม)                                         | 3.14159265 |
| %.2f          | แสดงผลในรูปแบบของ Float (ทศนิยม) 2 ตำแหน่ง                               | 3.14       |
| %s            | แสดงผลในรูปแบบของ CharSequence                                           | "Hello"    |
| \n            | แสดงค่า NewLine (ขึ้นบรรทัดใหม่)                                         |            |
| \0            | ไม่แสดงค่า<br>แต่เป็นตัวสิ้นสุดของ CharSequence<br>ให้การแสดงผลสิ้นสุดลง |            |

---

## Basic Program 2. "Sum"

```c
// sum.c
#include <stdio.h>

int main() {
  int a = 0;
  int b = 0;
  scanf("%d %d", &a, &b);
  int c = a + b;
  printf("%d + %d = %d\n", a, b, c);
  return 0;
}
```

โปรแกรมที่รับตัวเลข 2 ตัวแล้วแสดงผลบวกในรูปแบบ เช่น

```text
> เมื่อรับค่า 5 7 จะแสดงผลเป็น
5 + 7 = 12
```

### ถ้าไม่ระบุอะไร โปรแกรมทำงานตามลำดับ จากบนลงล่าง

![image](https://github.com/krist7599555/ocom/assets/19445033/9257ae58-ceb3-474d-9c3e-c0513ac65cd3)

### อะไรคือ `int a = 0;`

`int a = 0;` เป็นการประกาศตัวแปร(variable) เปรียบเหมือนตัวทดในกระดาษทด ที่ถ้ากระดาษยังมีที่ว่างอยู่ เราก็จะใช้พื้นที่ว่างมาทดค่าได้

### อะไรคือ `scanf("%d %d", &a, &b);`

- ถ้า `printf` เป็นชุดคำสั้งการแสดงผล
- `scanf` ก็เป็นชุดคำสั้งในการรับค่าจากข้างนอกเข้ามา

ในที่นี้เรารับค่า `int` ตัวแรกใส่ตำแหน่งทด `a`

ในที่นี้เรารับค่า `int` ตัวที่สองใส่ตำแหน่งทด `b`

> ถ้าเราต้องการแค่จองพื้นที่ไว้ก่อนโดนไม่ต้องการระบุค่า สามารถเขียนเป็น `int a;` แบบนี้ได้

### อะไรคือ `int c = a + b;`

1. โปรแกรมจะดูค่าทด `a` แล้วจำไว้
1. โปรแกรมจะดูค่าทด `b` แล้วจำไว้
1. แล้วโปรแกรมจะเอาค่า `a` และ `b` ที่จำไว้มาบวกกันในใจ
1. แล้วทดผลลัพท์การบวกที่ได้ในตำแหน่งทด `c`

## Basic Program 3. "Odd Even"

โปรแกรมนี้จะรับค่า `a` มาแล้วเช็คว่าหาร 2 ลงตัวหรือเปล่า

- ถ้า หาร 2 ลงตัว (หาร 2 แล้วไม่เหลือเศษ ก็เป็นเลขคู่) ให้แสดงคำว่า `"even"`
- หรือถ้าหารไม่ลงตัว (เหลือเศษมากกว่า 0) ให้แสดง `"odd"`

```c
// sum.c
#include <stdio.h>

int main() {
  int a;
  scanf("%d", &a);
  if (a % 2 == 0) {
    printf("even\n");
  } else {
    printf("odd\n");
  }
  return 0;
}
```

### อะไรคือ `a % 2`

`%` เป็นเครื่องหมายชื่อ Modulo (หารเอาเศษ) เช่น

```text
0 % 3 == 0  เพราะว่า 0 เขียนในรูป 3x + 0 ได้
1 % 3 == 1  เพราะว่า 1 เขียนในรูป 3x + 1 ได้
2 % 3 == 2  เพราะว่า 2 เขียนในรูป 3x + 2 ได้
3 % 3 == 0  เพราะว่า 3 เขียนในรูป 3x + 0 ได้
4 % 3 == 1  เพราะว่า 4 เขียนในรูป 3x + 1 ได้
5 % 3 == 2  เพราะว่า 5 เขียนในรูป 3x + 2 ได้
6 % 3 == 0  เพราะว่า 6 เขียนในรูป 3x + 0 ได้
7 % 3 == 1  เพราะว่า 7 เขียนในรูป 3x + 1 ได้
8 % 3 == 2  เพราะว่า 8 เขียนในรูป 3x + 2 ได้
9 % 3 == 2  เพราะว่า 9 เขียนในรูป 3x + 2 ได้

100 % 3 == 1
35 % 4 == 3
5 % 1000 == 5
85 % 11 = 8
```

### อะไรคือ `==`

เครื่องหมาย `=` คือเช็คความเท่ากัน equal

การใช้ `a == 13` เป็นการเปรียบเทียบว่าค่าที่ทดๆไว้ที่ `a` มีค่าเท่ากับ `13` หรือไม่

มีผลลัพท์เป็น `bool` มีมีโอกาศเป็นได้สองค่าคือ

- เป็นจริง(`true`)
- เป็นเท็จ(`false`)

### อะไรคือ `if/else`

`if` เป็นการแสดงเงื่อนไขการทำ ให้ทำถ้าเงื่อนไขเป็นจริง. และถ้าไม่จริงก็ไปทำ `else` ต่อได้

```cpp
if (condition) {
  // ทำเมื่อ condition เป็นจริง
} else {
  // ทำเมื่อ condition เป็นเท็จ
}
```

![image](https://github.com/krist7599555/ocom/assets/19445033/25d09c39-a7bf-4121-81a0-b77e0f2147f6)

### ทำให้สั้นขึ้นด้วย `if/else` แบบย่อ (ternary operator)

<!--  -->

---

## Basic Program 3. "Fibonucci"

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

## Basic Problem 4. "Reverse Sentence"

รับประโยคภาษาอังกฤษมา แล้วให้ปริ้นคำย้อนจากหลังมาหน้า เช่น

```text
std_input: "sentence is a set of words that is complete in itself."
std_output: "itself. in complete is that words of set a is sentence"
```

```cpp
// reverse_sentence.cpp
#include <stdio.h>

char input[100]; // เตรียมกระดาษทด ขนาดใหญ่พอจะทดตัวอักษร 100 ตัวได้
int main() {

  int i = 0;
  // รับ input ทีละ 1 character ไปเรื่อยๆจนว่าจะ จบบรรทัด (\n = new line charactor, ขึ้นบรรทัดใหม่, เคาะ enter)
  while (scanf("%c", &input[i]) == 1 && input[i] != '\n') {
    i += 1;
  }
  int input_size = i; // ทดจำนวนอักษรของประโยคทั้งหมดไว้
  input[input_size] = '\0'; // ถ้าจะปริ้น %s จะให้ปริ้นจนถึงตัว \0
  for (int start = input_size - 1; start >= 0; start -= 1) { // ไล่ย้อนทำจากข้างหลัง
    if (input[start] == ' ') { // แสดงผลถ้าจบคำแล้ว (เจอ space)
      printf("%s ", &input[start + 1]);
      input[start] = '\0'; // กำหนดจุดสิ้นสุดการปริ้นใหม่
    } else if (start == 0) { // หรือแสดงผลถ้าเป็นตัวแรก
      printf("%s", &input[start]);
    }
  }
  printf("\n");
  return 0;
}
```

อธิบายเพิ่มเติมตามลำดับ

<!-- ใช้ box drawing ├─┴ https://en.wikipedia.org/wiki/Box-drawing_character -->

```python
ช่วง input
i  ━━━━━━┓
input = [?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━┓
input = [s,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━┓
input = [s,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━┓
input = [s,e,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━┓
input = [s,e,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━┓
input = [s,e,n,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━┓
input = [s,e,n,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━┓
input = [s,e,n,t,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,?,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,?,?,?,?,?,?]
i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (ค่าเป็น '\n' หยุดทำงานแค่นี้)
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,?,?,?,?,?,?]

i  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (ต่อมากำหนดให้เป็น '\0')
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]

ไล่ย้อนกลับมา

start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]

เจอ ' ' ปริ้นตั้งแต่ตัวที่ input[start+1] ไปจนเจอ '\0' เป็นคำว่า "itself."

start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (เจอ space ให้ปริ้น "itself.")
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n, ,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (กำหนดค่าเป็น '\0')
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (เจอ space ให้ปริ้น "in")
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (กำหนดค่าเป็น '\0')
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (เจอ space ให้ปริ้น "complete")
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s, ,c,o,m,p,l,e,t,e, ,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ (กำหนดค่าเป็น '\0')
input = [s,e,n,t,e,n,c,e, ,i,s, ,a, ,s,e,t, ,o,f, ,w,o,r,d,s, ,t,h,a,t, ,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━┓ (เจอ space ให้ปริ้น "a")
input = [s,e,n,t,e,n,c,e, ,i,s, ,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━━━━━━━┓ (กำหนดค่าเป็น '\0')
input = [s,e,n,t,e,n,c,e, ,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━┓ (เจอ space ให้ปริ้น "is")
input = [s,e,n,t,e,n,c,e, ,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━━━┓ (กำหนดค่าเป็น '\0')
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━━━━━━━━━┓
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━━━┓
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━┓
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
start  ━━┓ (เป็นตำแหน่ง space == 0 ให้ปริ้น "sentence")
input = [s,e,n,t,e,n,c,e,0,i,s,0,a,0,s,e,t,0,o,f,0,w,o,r,d,s,0,t,h,a,t,0,i,s,0,c,o,m,p,l,e,t,e,0,i,n,0,i,t,s,e,l,f,.,0,?,?,?,?,?]
```

### อะไรคือ `char input[100];`

`char input[100];` มันคือการประกาศ array หรือเตรียมพื้นที่ข้อมูลที่ข้อมูลอยู่ติดๆกัน. เปรียบเหมือนเตรียมกระดาษทด ขนาดใหญ่ๆยาวๆพอจะทดตัวอักษร 100 ตัวได้

เวลาเข้าถึงให้ใช้ operation `[]` เช่น `char[7]` เหมือน veriable ทั้วๆไปเลย

```cpp
// char[]
char str[20] = {'H', 'e', 'l', 'l', '0', '\0'};
char str[20] = "Hello"; // เขียนย่อๆ ได้เหมือนกัน
str[0] == 'H'
str[1] == 'e'
str[2] == 'l'
str[3] == 'l'
str[4] == '0'
str[5] == '\0'
str[-1] == ? หรือ error index out of bound
str[1000] == ? หรือ error index out of bound
```

1. > `char[]` มันถูกเรียกย่อๆว่า **`string`**
1. > operator `arr[x]` มีความหมายเดียวกันกับ `*(arr + x)` คือ
   >
   > - `arr` = ตำแหน่งใน memory ของพื้นที่ๆจองไว้ช่องแรก
   > - `arr + x` = ขยับตำแหน่งนั้นไป x ช่อง ได้ตำแหน่งใหม่ที่ขยับไป x
   > - `*(arr + x)` = แปลงจาก _ตำแหน่ง_ ให้เป็น _ค่า_
   > - `arr[x]` = ค่า ณ ตำแหน่งช่องที่ x
   >
   > เลยเป็นเหตุผลว่าทำไม index ถึงเริ่มที่ 0. เพราะว่า 0 เป็น identity การบวก
1. > ถ้าเราประกาศ `int arr[10]` เราจะได้ pointer ชี้ไปหา `int` ตัวแรกที่จองไว้
   >
   > เพราะงั้น `arr[0] == *arr` เกือบทุกกรณี

```cpp
// int[]
int factorial[20];
factorial[0] = 1;
for (int i = 1; i < 20; i += 1) {
  factorial[i] = i * factorial[i-1];
}
factorial[0] == 1
factorial[1] == 1
factorial[2] == 2
factorial[3] == 6
factorial[4] == 24
factorial[5] == 120
factorial[6] == 720
factorial[7] == 5040
factorial[8] == 40320
factorial[9] == 362880
factorial[10] == 3628800
factorial[11] == 39916800
factorial[12] == 479001600
factorial[13] == 1932053504 (ค่าควรเป็น         6227020800 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
factorial[14] == 1278945280 (ค่าควรเป็น        87178291200 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
factorial[15] == 2004310016 (ค่าควรเป็น      1307674368000 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
factorial[16] == 2004189184 (ค่าควรเป็น     20922789888000 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
factorial[17] == -288522240 (ค่าควรเป็น    355687428096000 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
factorial[18] == -898433024 (ค่าควรเป็น   6402373705728000 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
factorial[19] == 109641728  (ค่าควรเป็น 121645100408832000 แต่ว่า int เก็บได้ไม่เกิน 32 bit)
```

### การประกาศ array ประกาศหลายมิติได้นะ

```cpp
// int[][][]
int data[2][3]; // array หลายมิติ
ข้อมูลจะติดๆกันแบบนี้ [data[0][0], data[0][1], data[0][2], data[1][0], data[1][1], data[1][2]]
ข้อมูลจะติดๆกันแบบนี้ [
  data[0][0], data[0][1], data[0][2],
  data[1][0], data[1][1], data[1][2]
]
```

### ตัวอย่างการทำ array หลายมิติ (Advance เกินไปไม่ออกสอบ)

```cpp
ค่าทั้งหมดในนี้มีค่าเท่ากันสำหรับ `int data[X][Y];`
= data[i][j]
= *(data[0][i * Y + j])
= *(data[i] + j)
= *(data[0] + 3 * Y + j)
= *(&data[0][0] + 3 * Y + j)
= *(&**data + 3 * Y + j)
= (*&data)[i][j] // `&` แปลง variable เป็นตำแหน่ง และ `*` แปลงตำแหน่งกลับเป็นค่า
= (*&*&data)[i][j]
= (*&*&*&*&*&*&*&data)[i][j]
```

```cpp
ค่าทั้งหมดในนี้มีค่าเท่ากันสำหรับ `int data[X][Y][Z];`
= data[i][j][k]
= data[i][0][j*Z + k]
= data[0][i*Y][j*Z + k]
= data[0][0][i*Y*Z + j*Z + k]
= *(&data[0][0][0] + i*Y*Z + j*Z + k)
= *(&***data + i*Y*Z + j*Z + k)
= *(**data + i*Y*Z + j*Z + k)
```

### ลองเขียนใหม่โดยใช้ function จาก library มากขึ้น

function [`strlen` <https://cplusplus.com/reference/cstring/strlen>](https://cplusplus.com/reference/cstring/strlen/) เป็น function โง่ๆที่จะ `#include <string.h>` เอาหรือเขียนเองก็ได้

```cpp
#include <stdio.h>

// string length :: string -> int
// มีใน #include <string.h> เหมือนกัน
int strlen(char* c) {
  int i = 0;
  while (c[i] != '\0') i += 1;
  return i;
}

char input[100];
int main() {
  input[0] = ' ';
  fgets(input + 1, 100, stdin); // get line โดยเขียนค่าเริ่มจาก input[1..] (ไม่ต้องจำ ไม่ค่อยได้ใช้)
  int i = strlen(input); // get string length
  while (input[i - 1] == '\n') input[--i] = '\0'; // remove new line
  while (--i >= 0) {
    if (input[i] == ' ') {
      printf("%s ", input + i + 1);
      input[i] = '\0';
    }
  }
  printf("\n");
  return 0;
}
```

## Basic Problem 5. "Insert Sort"

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

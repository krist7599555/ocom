---
title: คำสั่งโปรแกรม แบบง่ายสุดๆ
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

`#include` เป็นคำสั้งโหลดชุดคำสั้งมาใช้ โดยวิธีการทำงานคือ แปะไฟล์ [`stdio.h <https://github.com/gcc-mirror/gcc/blob/master/fixincludes/tests/base/stdio.h>`](https://github.com/gcc-mirror/gcc/blob/f66e0a94ad7bc18538c8207fc2c86b62e4a51bb2/fixincludes/tests/base/stdio.h#L74-L76) ไว้ข้างบนเฉยๆเลย

#### อะไรคือ `stdio.h`

`stdio.h` เป็นไฟล์ภาษา c นี้แหละ ที่ทำหน้าที่รับ input แล้วก็แสดงผล

`stdio` มากจาก standart input output

ในที่นี้เราใช้ function [👉 printf จาก stdio.h (อยากให้กดดู)](https://github.com/gcc-mirror/gcc/blob/f66e0a94ad7bc18538c8207fc2c86b62e4a51bb2/fixincludes/tests/base/stdio.h#L74-L76)

สังเกตุว่า `printf` มีการ implement เป็น

```cpp
// stdio.h
extern int printf( const char *, __gnuc_va_list );
```

คือบอกว่า printf รับค่าตัวแรกเป็น `const char*` และตัวถัดมาเป็น `__gnuc_va_list` แล้ว return ค่ากลับไปเป็น `int` แต่ไม่ได้มีการ implement จริงๆอยู่ตรงนั้น

> `char` มาจาก Character แปลว่า ตัวอีกษร
>
> `char*` ในที่นี้หมายถึง Character หลายๆตัว เลยหมายถึงคำ CharSequence/Word/Sentense/Text/Paragraph/String
>
> จากคำสั้ง `printf("Hello World!")` คำว่า
>
> `"Hello World!"` จึงมาจาก `['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0']` เป็น CharSequence

นี้แหละคือความเท่ของ `.h` (header file) คือเป็นไฟล์ที่ช่วยบอกว่า จะมีของหน้าตาแบบไหนชื่ออะไร แต่ยังไม่จำเป็นต้องเขียนวิธีการทำงานลงไปก็ได้

สาเหตุที่ `printf` ไม่ได้เขียนการทำงานจริงไว้ เพราะว่าระบบปฏิบัติการ(OS) ต่างกัน การจัดเก็บ memory ต่างกัน มีวิธีการจองพื้นที่แตกต่างกัน การจะให้ hardware ต่างกันมันทำงานเป๊ะๆเหมือนกันเลยเป็นไปได้ยาก เลยให้ hardware แต่ละเครื่องไป implement วิธีการ `printf` ที่ได้ผลลัพท์ตาม spec ที่ให้ไปก็พอ

> นอกจาก `#include <stdio.h>` แล้วยังมี `#include "stdio.h"` ด้วยนะเป็นการบอกว่า
>
> - `#include <ของมาตรฐาน>`
> - `#include "ของเขียนเอง"`

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

`printf` เป็น functionที่ใช้แสดงค่า CharSequence และค่ารูปแบบอื่นๆออกมาทางหน้าจอ (standard output)

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

โปรแกรมนี้จะรับค่า `a` มาแล้วเช็คว่าหาร 2 ลงตัวหรือเปล่า

- ถ้า หาร 2 ลงตัว (หาร 2 แล้วไม่เหลือเศษ ก็เป็นเลขคู่) ให้แสดงคำว่า `"even"`
- หรือถ้าหารไม่ลงตัว (เหลือเศษมากกว่า 0) ให้แสดง `"odd"`

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

### อะไรคือ `if`

`if` เป็นการแสดงเงื่อนไขการทำ ให้ทำถ้าเงื่อนไขเป็นจริง

```cpp
if (condition) {
  // ทำเมื่อ condition เป็นจริง
} else {
  // ทำเมื่อ condition เป็นเท็จ
}
```

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

### อะไรคือ `i += 1`

ความหมายเหมือน `i = i + 1` แต่เขียนสั้นกว่า

### Pattern การวนซ้ำด้วย `for loop`

ถ้าสังเหตุการวนด้านบน เราจะเห็นรูปแบบว่า

- เราประกาศ `int i = 0;` ก่อน _(initial state)_
- แล้ววนซ้ำเมื่อ `i <= 10` _(check valid)_
- ในการทำซ้ำแต่งละครั้ว ก็ให้เพิ่ม i ขึ้นเรื่อยๆ `i += 1;` _(update)_

รูปแบบ `init, checkvalid, update` นี้จะเกิดขึ้นบ่อยๆมากเขาเลยสร้าง syntax ที่ชื่อว่า `for` ขึ้นมาเพิ่มยุบรวม 3 ตัวนี้

```cpp
init
while (check_valid) {
  ...
  update
}

แปลงจาก while กลายเป็น for

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
  while (i <= 10) {
    printf("fib(%d) = %d\n", i, a);
    int tmp = a;
    a = a + b;
    b = tmp;
    i += 1;
  }
}
```

เป็น

```cpp
// fib_forloop.c
#include <stdio.h>

int main() {
  int a = 0, b = 1;
  int i = 0;
  for (int i = 0; i <= 10; i += 1) {
    printf("fib(%d) = %d\n", i, a);
    int tmp = a;
    a += b;
    b = tmp;
  }
}
```

### ลองตั้ง function ในการสลับค่าดู

```cpp
// fib_forloop_swap.cpp
#include <stdio.h>

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

### อะไรคือ `int*`

- `int* a` คือตำแหน่งของกระดาษทด ที่ตรงนั้นควรจะทดเลขจำนวนเต็มได้ 1 ค่า.
- สามารถใช้ `*a` เพื่อแปลงจะตำแหน่ง เป็นค่าที่ทดไว้แทน
- `&a` คือ ตำแหน่งบนกระดาษทดของตัวแปร `a`

เรื่องที่เราพูดๆกันอยู่นี้เรียกว่า `Pointer` เป็นเรื่องที่น่าสนใจดี แต่ข้อเสียตือ bug ได้ง่าย

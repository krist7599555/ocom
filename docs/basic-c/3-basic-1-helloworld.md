---
title: Basic Program 1. "Hello World!"
---

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

## อะไรคือ `#include <stdio.h>`

### อะไรคือ `#include`

`#include` เป็นคำสั้งโหลดชุดคำสั้งมาใช้ โดยวิธีการทำงานคือ copy-paste file [`stdio.h`](https://github.com/gcc-mirror/gcc/blob/f66e0a94ad7bc18538c8207fc2c86b62e4a51bb2/fixincludes/tests/base/stdio.h#L74-L76) ไว้ข้างบนเฉยๆเลย

### อะไรคือ `stdio.h`

`stdio.h` เป็นไฟล์ภาษา c นี้แหละ ที่ทำหน้าที่รับ input แล้วก็แสดงผล

`stdio` มากจาก standart input output

ในที่นี้เราใช้ function [👉 `printf` จาก stdio.h (อยากให้กดดู)](https://github.com/gcc-mirror/gcc/blob/f66e0a94ad7bc18538c8207fc2c86b62e4a51bb2/fixincludes/tests/base/stdio.h#L74-L76)

> `function` แปลว่าชุดคำสั้งทำงาน ที่สามารถรับ input และได้ผลลัพท์ output ได้ เช่น<br>`sum(1, 3) == 3`, `abs(-9) == 9`.
>
> ถ้าเป็นทาง math จะเขียนได้หลายแบบเช่นกัน เช่น<br>`x → f(x)`, `y = f(x) = ax + b`, `f: x, y → sqrt(x^2 + y^2)`
>
> <img width="300" src="https://github.com/krist7599555/ocom/assets/19445033/3a62d816-a7bc-4209-b27d-5d694470e539">
>
> มีลักษณะการสร้างเป็น
>
> ![image](https://github.com/krist7599555/ocom/assets/19445033/56933c50-3338-4980-bafc-07d0e8825e12)

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
> จากคำสั้ง `printf("Hello World!")` คำว่า<br> > `"Hello World!"` จึงมาจาก `['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0']` เป็น CharSequence

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

## อะไรคือ `int main() {}`

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

## อะไรคือ `printf`

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

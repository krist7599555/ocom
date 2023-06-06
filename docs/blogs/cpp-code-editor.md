---
title: โปรแกรมพื้นฐานที่ใช้
---

บทความนี้ assume ว่าทุกคนไม่รู้จักการเรียนโคดเลย

โปรแกรมที่แนะนำให้ใช้ในการเริ่มค้นคือ

## Window ใช้ CodeBlock

Download <https://www.codeblocks.org/downloads/binaries/>

### Setup

1. setup codeblock เลือกแบบ `codeblocks-20.03mingw-setup.exe` [📺 youtube](https://www.youtube.com/watch?v=zIhhO2DcW2s)
1. ทำให้ใช้งาน `-std=c++14` ได้ [📺 youtube](https://www.youtube.com/watch?v=1sTXV7E6eJE)

เพราะสามารถใช้ได้ทั้ง window/macos/linux ได้ และไม่ต้องวุ่นวานในการติดตั้งภาษา c, c++ นัก

## Mac

ถ้าใช้ codeblock ได้ก็ใช้

ถ้าใช้ไม่ได้ให้ลง `VSCode` แล้วหัดใช้ terminal เสียนะ

Download <https://code.visualstudio.com>

1. Setup Visual Studio Code On Mac For C - C Programming [📺 youtube](https://www.youtube.com/watch?v=Ylax3ZAmP3M)
1. ถ้าจะใช้ c++ version 14 ให้พิมพ์ `g++ -std=c++14 ./main.cpp -o ./main` จะได้โปรแกรมชื่อ `main`
1. รัน `./main` เพื่อให้โปรแกรมนี้ทำงาน

> `gcc`, `g++`, `clang` เป็น compiler มีหน้าที่แปลงไฟล์ code ที่เราเขียนเป็น text ให้กลายเป็นชุดคำสั่ง binary ให้คอมอ่าน. เพราะฉะนั้น compile เสร็จแล้ว ก็ต้อง run ด้วย

## Basic Program

เริ่มจากสร้างไฟล์ `main.c` หรือ `main.cpp` ก็ได้

```c
// main.c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

```cpp
// main.cpp
#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}
```

แล้วลองรันดู จะแสดงผลคำว่า

```text
"Hello World!"
```

เย่

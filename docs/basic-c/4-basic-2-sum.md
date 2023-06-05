---
title: Basic Program 2. "Sum"
---

เรียนรู้กราทำงานตามลำดับ จากโจทย์คือ

รับ a และ b แสดงผล "$a + $b = $c"

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

## ถ้าไม่ระบุอะไร โปรแกรมทำงานตามลำดับ จากบนลงล่าง

![image](https://github.com/krist7599555/ocom/assets/19445033/9257ae58-ceb3-474d-9c3e-c0513ac65cd3)

## อะไรคือ `int a = 0;`

`int a = 0;` เป็นการประกาศตัวแปร(variable) เปรียบเหมือนตัวทดในกระดาษทด ที่ถ้ากระดาษยังมีที่ว่างอยู่ เราก็จะใช้พื้นที่ว่างมาทดค่าได้

## อะไรคือ `scanf("%d %d", &a, &b);`

ถ้า `printf` เป็นชุดคำสั้งการแสดงผล (output)<br>
`scanf` ก็เป็นชุดคำสั้งในการรับค่า (input) จากข้างนอกเข้ามา

ในที่นี้เรารับค่า `int` ตัวแรกใส่ตำแหน่งทด `a`

ในที่นี้เรารับค่า `int` ตัวที่สองใส่ตำแหน่งทด `b`

> ถ้าเราต้องการแค่จองพื้นที่ไว้ก่อนโดนไม่ต้องการระบุค่า สามารถเขียนเป็น `int a;` แบบนี้ได้โดยไม่ต้องมี `=`

### อะไรคือ `int c = a + b;`

1. โปรแกรมจะดูค่าทด `a` แล้วจำไว้
1. โปรแกรมจะดูค่าทด `b` แล้วจำไว้
1. แล้วโปรแกรมจะเอาค่า `a` และ `b` ที่จำไว้มาบวกกันในใจ
1. แล้วทดผลลัพท์การบวกที่ได้ในตำแหน่งทด `c`
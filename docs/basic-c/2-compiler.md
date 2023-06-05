---
title: C++ Compiler คืออะไร
---

> TLDR; Compiler คือโปรแกรมแปลงภาษาโคด ให้เป็นภาษาเครื่องที่ CPU เข้าใจ

Compiler คือโปรแกรมคอมพิวเตอร์ มันแปลภาษาการเขียนโปรแกรมระดับสูง (C, C++) เป็น binary execution สำหรับ CPU เฉพาะ.

![image](https://github.com/krist7599555/ocom/assets/19445033/c80bc323-542c-495d-af6b-4741280c8db1)

เพราะ CPU จริงๆแล้วคือ logic circuit การที่จะให้มันทำคำสั้งให้เข้าใจต้องกำหนดว่า ถ้าไฟ 4 เส้นแรกเป็น 0011 ให้เอาไฟ 4 เส้นหลังไปทำค่าอะไรต่อ ตัว bit ที่เป็นคำสั้งเพราะเรียกว่า operation code มีตั้งแต่ add, jump, shift, check และอื่นๆ.

ภาษา assembly ก็เอา operation code ตรงนี้แหละมาเขียนเป็นชื่อ function ให้เข้าใจง่าย.

แล้วต่อมาก็มีภาษา c ที่ก็แปลงกลับเป็น assembly แล้วก็แปลงกลับเป็น instruction set (operation code + params) แล้วแปลงกลับไปเป็นฟ้าหลายๆเส้นให้ logic gate ทำงาน



<img width="300" alt="image" src="https://github.com/krist7599555/ocom/assets/19445033/d3699220-cf58-47ea-9a9b-ad8bf1f0b856">

*CPU = logic gate*

<img width="300" alt="image" src="https://github.com/krist7599555/ocom/assets/19445033/aaa7271a-8433-44cb-8f32-bf8ab2241fd3">

*CPU ส่วนมากแค่อ่านคำสั้ง กับแก้ memory*

<img width="300" alt="image" src="https://github.com/krist7599555/ocom/assets/19445033/b4f9a6f2-208a-4b5c-a964-3697bd84741b">

*ตัวอย่าง assembly instruction ที่มีทั้ง operation code และ params, ด้านขวาเป็น memory (register)* 


<img width="300" alt="image" src="https://github.com/krist7599555/ocom/assets/19445033/ef6d146c-b2b0-4345-921e-a4394b98730d">

*instruction เหมือนกัน แต่เขียนในรูปสมการ math*


<img width="300" alt="image" src="https://github.com/krist7599555/ocom/assets/19445033/88fd10cc-11f3-4657-a7e1-e5f85e5e5f9a">

*ตัวอย่าง instruction ที่มองเป็น binary จริงๆ*


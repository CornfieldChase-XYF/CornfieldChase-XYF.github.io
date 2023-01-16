---
layout: post
title:  "Typora常用功能"
categories: 未分类
tags:  Markdown
author: xyf
---

* content
{:toc}
Typora 是一款轻量级 Markdown 编辑器

官网：[typoraio.cn](https://www.typoraio.cn/)







## Markdown语法学习笔记

## 一.标题

一级标题："#" + " " + 标题

二级标题："##" + " " + 标题

......



---



## 二.字体

- 粗体  左右加 "**"

  **Hello，World ！**

  

- 斜体  左右加 "*"

  *Hello，World ！*

  

- 粗斜体  左右加 "***"

  ***Hello，World ！***

  

- 废弃  左右加 "~~"

  ~~Hello，World ！~~

  

---



## 三.引用

">" + 引用的内容

> 引用的内容



---



## 四.分割线

"---"



---



## 五.图片

"!" + [名字] + (地址)

![示例图片](../picture/2023-01-15-typora-use.assets/%E7%A4%BA%E4%BE%8B%E5%9B%BE%E7%89%87.png)



> 在Typora中，右键图片点击**缩放图片**可自动将语法变为**HTML格式**
>
> 若图片需要在**网页显示**则必须使用HTML格式
>
> 
>
> Markdown语法格式：
>
> ```markdown
> ![示例图片](../picture/2023-01-15-typora-use.assets/%E7%A4%BA%E4%BE%8B%E5%9B%BE%E7%89%87.png)
> ```
>
> HTML语法格式：
>
> ```html
> <img src="../picture/2023-01-15-Typora%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD.assets/%E7%A4%BA%E4%BE%8B%E5%9B%BE%E7%89%87.png" alt="示例图片"  />
> ```
>
> 



---



## 六.超链接

"[名字]" + (地址)

[Fan (cornfieldchase-xyf.github.io)](https://cornfieldchase-xyf.github.io/)



---



## 七.列表

### 1.有序

"1" + ""

1. 
2. 

### 2.无序

"-" + " "

- 
- 

---



## 八.表格

右键快捷键 插入

| a    | 1    | 0    |
| ---- | ---- | ---- |
| b    | 2    | 0    |
| c    | 3    | 0    |
| d    | 4    | 0    |



---



## 九.代码

tab键上方的 "`"

"```" + 选择语言

```c++
#include<iostream>
using namespace std;
int main()
{
    cout << "Hellow Typora !" << endl;
}
```

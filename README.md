## 注意事项

**模板中的所有代码文件必须用GBK编码格式保存，可以用 UTF8 打开阅读修改，但是必须用原格式进行保存**

操作：用 vscode 打开后选择 **reopen** with encoding，修改后直接保存关闭即可（默认会按原编码方式保存的） 



---



## 博客图片

**图片统一放在 picture 文件夹下，统一由 picgo 自动上传，不要手动往本地的 picture 文件夹里放东西**



- 配置 picgo：

> picgo 官网：https://molunerfinn.com/PicGo/
>
> picgo 配置方法：[Typora + PicGo + Github 配置详细完整版_picgo github typora_@Liz的博客-CSDN博客](https://blog.csdn.net/m0_46153394/article/details/126327183)

- 配制好后的使用方法：

>  用 picgo 上传图片到 github ，上传图片前在 picgo 中 **手动更改路径** 以切换图片在仓库中的存储路径

- 举例：

> 当准备写 2023-01-01-hello-world 这篇文章时，就需要先打开 picgo 将存储路径设置为 picture/2023-01-01-hello-world/
>
> 然后用 typora 打开 2023-01-01-hello-world.md 文件开始书写，当插入图片后**右键上传图片**即可

- 注意：

>注意：
>
>在 typora 中右键上传图片后图片就直接存到 github 远程仓库中了，但本地仓库中是没有该图片的，所以需要拉取一下远程仓库同步到本地（具体使用上来说就是每次 push 之前 检查一下 需不需要 pull）
>
>
>
>这样做的好处是：
>
>- 在本地也有一个备份
>
>- 在保证远程和本地同步的情况下，若要**删除图片**可先在本地操作，然后 push 到远程即可

- 令牌：

> picgo 自动上传图片需要 github 的 token（令牌），**token 到期**后需要在 github 的个人设置中重新生成再填写到 picgo



---



## 修改 demo 页面

修改 js 文件夹中的 waterfall.js 文件即可



---



## 博客模板

It bases on [gaohaoyang.github.io: blog & blog theme](https://github.com/Gaohaoyang/gaohaoyang.github.io)


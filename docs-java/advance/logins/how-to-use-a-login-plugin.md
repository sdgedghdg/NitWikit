---
title: 混合登录插件教程
sidebar_position: 2
---
:::warning
本文可能含有部分不正确内容，如果发现错误，恳请指正或联系[sdgedghdg](https://github.com/sdgedghdg)
:::
# 介绍

混合登录插件指的是可以使用多种验证方案使玩家进入服务器的插件，本文将以**MultiLogin**为例子进行讲解。

## MultiLogin是什么？

[MultiLogin](https://github.com/CaaMoe/Multilogin) 是一个可以用于混合登陆方式的插件，它支持 Velocity, Bukkit, BungeeCord 等服务端核心（意味着它既可以在跨服端使用，也可以在单独插件服使用）
MultiLogin 的官方 GitHub 仓库：https://github.com/CaaMoe/Multilogin

## 它有什么特性？
MultiLogin 支持基岩版Xbox、yggdrasil、正版验证等多验证方式登录，且支持验证方式查询玩家列表。支持重名玩家自动管理，使用某账户默认（或临时）登陆其他账户等功能，将离线玩家默认发送至某服务器，使用泛域名解析的指定离线玩家用户名登录。

## 快速上手教程

:::info

本教程仅供快速搭建的参考内容，更多内容请去[官方GitHub上的Wiki](https://github.com/CaaMoe/MultiLogin/wiki)查看

:::

### 安装

- 将下载的插件加入到服务端中
:::warning
启用插件时必须要打开正版验证
- 如果你在使用Velocity等请把代理端的打开，关闭子服的正版验证
- 如果你在使用Bukkit等插件端的独立服务器请打开正版验证
:::

### 配置

装好就行了...吗？如果此时你尝试进入服务器，便会发现提示`服务器尚未添加任何世界树验证服务器，请尝试与服务器管理员取得联系。`。
这就对了！我们需要配置验证服务器来让玩家的登录请求被认证。
插件默认的配置文件夹在`.服务器根目录\Plugins\MultiLogin\services`下
在`.服务器根目录\Plugins\MultiLogin\examples`中默认提供了4个模板，其中`official.yml`对应正版验证，`littleskin.yml`对应Littleskin皮肤站的验证方式，`floodgate.yml`对应基岩版，`full`

# GUI-Logger
日志图形化界面观测

# 技术栈
1. socketIO
2. koa2
3. mongodb
4. angular2
5. NG-ZORRO

# 计划（自己看）
## Part1-基础功能Demo实现
[√] 基本框架koa2+angular2      
[√] 客户端-服务端的socket.io通信
[√] 日志文件读取             
[√] mongo-crud

## Part2-主要功能
1. 主要模块的UI搭建
- 日志
    - 监控信息
        - [√] cpu,memory监控
        - [√] 实时输出    
        - 异常查讯
- 设置
    - 日志文件配置
    - 管理员设置

## Part3-happy的投入使用

## 附录
###. 数据库构建
1. 日志错误表-loggerError
| id | message | stack | createTime |
| - | - | - | - |
| 123 | xxx | xxx | sj | 
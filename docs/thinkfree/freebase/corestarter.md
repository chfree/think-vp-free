# Core Starter

## 使用
``` xml
<dependency>
    <groupId>com.tennetcn.free</groupId>
    <artifactId>core-starter</artifactId>
    <version>0.0.1</version>
</dependency>
```

## 相关工具包说明
基础包名
```
com.tennetcn.free.core
```

## hutool
gitee:
[https://gitee.com/loolly/hutool](https://gitee.com/loolly/hutool)

github:
[https://github.com/looly/hutool](https://github.com/looly/hutool)

doc:
[https://www.hutool.club/docs/#/](https://www.hutool.club/docs/#/)


## guava
Google Guava 中文教程
[https://wizardforcel.gitbooks.io/guava-tutorial/content/](https://wizardforcel.gitbooks.io/guava-tutorial/content/)

## validation api
[validation api 说明](/thinkfree/remark/validationapi)

## regular
提供了一些常用的正则，分为`RegularExpressions`基础正则，`MathRegularExpressions`Math相关的正则

## enums
|类名|说明|
|---|---|
|Enum|枚举的基础接口|
|BaseEnum|枚举的基础接口|
|ModelStatus|数据模型的状态，主要用于对数据库实体的状态（增删改查）标记|
|OrderEnum|排序枚举|
|YesOrNo|是否的字符串标记`1是，0否`|
|YesOrNoInteger|是否的数值类型标记`1是，0否`|

`BaseEnum`用法：
``` java
public enum LoginAuthStatus implements BaseEnum<String> {
    VALID("valid","有效"),
    INVALID("invalid","无效");


    private String key;

    private String value;

    LoginAuthStatus(String key, String value){
        this.key = key;
        this.value = value;
    }

    @Override
    public String getKey() {
        return key;
    }

    @Override
    public String getValue() {
        return value;
    }
}
```

## message

## exception

## utils



## dependencies
```xml
<dependencies>
    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-all</artifactId>
    </dependency>
    <dependency>
        <groupId>com.google.guava</groupId>
        <artifactId>guava</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-cache</artifactId>
    </dependency>
    <dependency>
        <groupId>net.sf.ehcache</groupId>
        <artifactId>ehcache</artifactId>
    </dependency>
    <dependency>
        <groupId>javax.persistence</groupId>
        <artifactId>javax.persistence-api</artifactId>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-annotations</artifactId>
        <version>2.9.4</version>
        <scope>compile</scope>
    </dependency>
    <dependency>
        <groupId>javax.validation</groupId>
        <artifactId>validation-api</artifactId>
    </dependency>
    <dependency>
        <groupId>org.hibernate.validator</groupId>
        <artifactId>hibernate-validator</artifactId>
    </dependency>
</dependencies>
```


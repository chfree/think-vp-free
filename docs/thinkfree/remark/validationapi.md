# Java Validation Api

## 常用注解
### javax.validation.constraints
| 注解 | 描述 |
|---|---|
| @Valid | 递归的对关联对象进行校验, 如果关联对象是个集合或者数组,那么对其中的元素进行递归校验,如果是一个map,则对其中的值部分进行校验.(是否进行递归验证) |
| @AssertFalse | 被注释的元素必须为 false |
| @AssertTrue | 同@AssertFalse |
| @DecimalMax | 被注释的元素必须是一个数字，其值必须小于等于指定的最大值 |
| @DecimalMin | 同DecimalMax |
| @Digits | 被注释的元素是数字,(integer=,fraction=) 验证字符串是否是符合指定格式的数字，interger指定整数精度，fraction指定小数精度 |
| @Future | 验证 Date 和 Calendar 对象是否在当前时间之后 |
| @Past | 验证 Date 和 Calendar 对象是否在当前时间之前  |
| @Max | 被注释的元素必须是一个数字，其值必须小于等于指定的最大值 |
| @Min | 被注释的元素必须是一个数字，其值必须大于等于指定的最小值 |
| @NotNull | 不能是Null |
| @Null | 元素是Null |
| @Past | 被注释的元素必须是一个过去的日期 |
| @Pattern  | 被注释的元素必须符合指定的正则表达式 |
| @Szie | 验证对象（Array,Collection,Map,String）长度是否在给定的范围之内  |


### org.hibernate.validator.constraints
| 注解 | 描述 |
|---|---|
| @Email | 元素必须是格式良好的电子邮箱地址
| @Length	| 字符串的大小必须在指定的范围内，有min和max参数
| @NotEmpty | 字符串的不能是空
| @NotBlank | 字符串不能使空，但是与@NotEmpty不同的是尾随的空白被忽略
| @URL| 字符串必须是一个URL
| @Range | 验证范围，与@Min\@Max同时注解等同，默认0和Long.MAX_VALUE |
| @Length | 验证字符串的长度是否在给定的范围之内，包含两端 |

## 扩展
| 注解 | 描述 |
|---|---|
| @BigDecimalCheck | 检查数字格式,pointNumber 小数点后的位数,positive 是否是正整数 |
| @MaxBytesLength | 检查utf-8的字节长度，常用于判定存储oracle中的数据库类型长度 |
| @AtLeastOneNotEmpty | 必须有一个不为空 |
| @MethodCheck | 调用一个自定义方法检测 |

#### @AtLeastOneNotEmpty用法
```
@AtLeastOneNotEmpty(fields={"userId","userName"})
```

#### @MethodCheck
```java
@MethodCheck(clazz = CheckTest.class,method = "checkTest",parameterTypes = {User.class})
```
CheckTest.java
```java
@Component
public class CheckTest {
    public MethodCheckResult checkTest(User user){
        MethodCheckResult checkResult = new MethodCheckResult();
        checkResult.setValid(false);
        checkResult.setMessage("密码不是6个0");
        if("000000".equals(user.getPassword())){
            checkResult.setValid(true);
        }
        return checkResult;
    }
}
```

### 如何自定义扩展
一、定义annotation
```java
import com.tennetcn.free.core.validator.check.MaxBytesLengthValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE, ElementType.CONSTRUCTOR, ElementType.PARAMETER, ElementType.TYPE_USE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Constraint(validatedBy = {MaxBytesLengthValidator.class})
public @interface MaxBytesLength {
    String message() default "字符长度超长";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};

    int value();
}
```

二、实现Validator
```java
import com.tennetcn.free.core.utils.StringHelper;
import com.tennetcn.free.core.validator.annotation.MaxBytesLength;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * @author chfree
 * @email chfree001@gmail.com
 * @create 2019-11-18 12:27
 * @comment
 */

public class MaxBytesLengthValidator implements ConstraintValidator<MaxBytesLength,String> {
    private int value;
    @Override
    public void initialize(MaxBytesLength constraintAnnotation) {
        value=constraintAnnotation.value();
    }

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        return StringHelper.getStringLength(s,"utf-8")<=value;
    }
}
```
### 是否是数值型字符串

```
function isNumberStr(val){
    return val != '' && val != null && !isNaN(val);
}
```

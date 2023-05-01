## 装饰彩条

<img src='/public/css/demo/decorationBorder.png'/>

```css
.borderDecoration {
  opacity: 1;
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  top: 00px;
  background-image: linear-gradient(
      to right,
      rgba(46, 124, 100, 1),
      rgba(46, 124, 100, 0)
    ), linear-gradient(to right, rgba(9, 54, 107, 1), rgba(9, 54, 107, 0)),
    linear-gradient(to right, rgba(124, 122, 49, 0), rgba(124, 122, 49, 1)),
    linear-gradient(to right, rgba(116, 75, 13, 0), rgba(116, 75, 13, 1));
  background-size: 10px 39%, 10px 35%, 10px 40%, 10px 35%;
  background-position: left 19%, left 84%, right 20%, right 86%;
  background-repeat: no-repeat;
}
```
## 渐变圆环

<img src='/public/css/demo/circle.png'/>

```
// 圆锥渐变+遮罩
.circle{
background: conic-gradient(rgba(131,198,242,.2),rgba(131,198,242,.2),rgba(131,198,242,.2),rgba(131,198,242,.8),#83c6f2);
 mask-image: radial-gradient(transparent 0,transparent 59%,#000 60%,#000 70%);
width: 90px;
height: 90px;
border: none;
border-radius: 50px;
}
```
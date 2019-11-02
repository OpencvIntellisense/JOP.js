# JOP.js
## JSON (DOM) OPeration javascript library 
* sl:selector
* val:value,parameter

## Please new an object before you use

## example:
```  html
<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="stylesheet" type="text/css" href="../src/css/JOP.css" />
    <script src="../build/JOP.min.js"></script>
</head>
<body>
    <h1>JOP框架測試</h1>
    <div class="outer">
        <p>100pt</p>
        <p id="inner">
            red
        </p>
    </div>
    <button id="btn1"></button>
    <button class="btn2"></button>
    <button id="btn3"></button>

    <article class="content"></article>
    <p id="paragraph"></p>

    <article class="content1"></article>
</body>

<script>
/*
sl:選擇器
val:參數
*/
//word
var a=
    [{
        "sl":".outer",
        "css":"fontSize",
        "val":"100pt"
    },
    {
        "sl":"#inner",
        "css":"color",
        "val":"red"
    },
    {
        "sl":"#btn1",
        "css":"width",
        "val":"50px"
    },
    {
        "sl":".btn2",
        "css":"width",
        "val":"50px"
    },
    {
        "sl":"#btn3",
        "css":"width",
        "val":"50px"
    },
    {
        "sl":"#btn1",
        "css":"height",
        "val":"50px"
    },
    {
        "sl":".btn2",
        "css":"height",
        "val":"50px"
    },
    {
        "sl":"#btn3",
        "css":"height",
        "val":"50px"
    }];
var d=new JOP(a);
d.JOPcss();
//btn 
/*
val=0 :disabled
val=1 :enabled
val=false :disabled
val=true :enabled
*/
var d2=new JOP([{
        "sl":"#btn1",
        "val":"0"
    },
    {
        "sl":".btn2",
        "val":"1"
    },
    {
        "sl":"#btn3",
        "val":"true"
    }]);
d2.JOPenabled();
/*
val=0 :hidden
val=1 :show
val=false :hidden
val=true :show
*/
var d3=new JOP([{
        "sl":"#btn1",
        "val":"1"
    },
    {
        "sl":".btn2",
        "val":"0"
    },
    {
        "sl":"#btn3",
        "val":"1"
    }]);
d3.JOPshow();
//html
var content="Hello World";
var d4=new JOP([{
        "sl":".content",
        "val":"<p>This is p</p><a href='#''><button style='width:50px; height:50px;'>#</button></a><h3>"+content+"</h3>"
    },
    {
        "sl":"#paragraph",
        "val": content
    }]);
d4.JOPhtml();
//general
var a5=  new JOP([{
        "sl":".content1",
        "pro":"innerText",
        "val":'html碼:<p>This is p</p><a href="#"><button style="width:50px; height:50px;">#</button></a><h3>'+content+'</h3>'
    }]);
a5.JOPjs();
</script>
```

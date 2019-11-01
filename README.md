# JOP.js
## JSON (DOM) OPeration javascript library 
* sl:selector
* val:value,parameter

## example:
```  html
<!DOCTYPE html>
<style>
    button:enabled{
        background-color: greenyellow;
    }
    button:disabled {
        background-color: gray;
    }
</style>
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


<script src="../src/JOP.min.js"></script>
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
var a2=
    [{
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
    }];
var d2=new JOP(a2);
d2.JOPenabled();
/*
val=0 :hidden
val=1 :show
val=false :hidden
val=true :show
*/
var a3=
    [{
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
    }];
var d3=new JOP(a3);
d3.JOPshow();
//html
var content="Hello World";
var a4=
    [{
        "sl":".content",
        "val":'<p>This is p</p><a href="#"><button style="width:50px; height:50px;">#</button></a><h3>'+content+'</h3>'
    },
    {
        "sl":"#paragraph",
        "val": content
    }];
var d4=new JOP(a4);
d4.JOPhtml();
</script>
```

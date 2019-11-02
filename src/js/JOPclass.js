/*!
Copyright JOP.js All rights reserved
-------------------------------------
author: did1335 (Ting-Hong,CHU)
ver: 0.0.1
Released under the MIT license
-------------------------------------
*/
class JOP{
    constructor(obj){
        this.obj=obj;
    }
    JOPcss(){
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].css;
            var c=this.obj[i].val;
            var sl= document.querySelector(a);
            console.log(sl["style"][String(b)]=c);
            sl["style"][String(b)]=c;
        }
    }
    JOPenabled(){
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].val;
            if (b==="0"||b==="false"){
                var c=true;
            }else if(b==="1"||b==="true"){
                var c=false;
            }else{
                alert('input error');
            }
            var sl= document.querySelector(a);
            console.log(sl["disabled"]=c);
            sl.disabled=Boolean(c);
        }
    }
    JOPshow(){
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].val;
            if (b==="0"||b==="false"){
                var c=true;
            }else if(b==="1"||b==="true"){
                var c=false;
            }else{
                alert('input error');
            }
            
            var sl= document.querySelector(a);
            console.log(sl.hidden=c);
            sl.hidden=c;
        }
    } 
    JOPhtml(){
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].val;
            var sl= document.querySelector(a);
            console.log(sl.innerHTML=b);
            sl.innerHTML=b;
        }
}
    JOPjs(){
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].pro;
            var c=this.obj[i].val;
            var sl= document.querySelector(a);
            console.log(sl[String(b)]=c);
            sl[String(b)]=c
        }
    }       
}

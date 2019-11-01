class JOP{
    constructor(obj){
        this.obj=obj;
    }
    JOPcss(){
        var js="";
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].css;
            var c=this.obj[i].val;
            //console.log(a+' '+b+' '+c);
            var sl= "document.querySelector('"+a+"')";
            js += sl+".style."+String(b)+"='"+String(c)+"'; \n";
        }
        console.log(js);
        return eval(js);
    }
    JOPenabled(){
        var js="";
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].val;
            if (b==="0"||b==="false"){
                var c="true";
            }else if(b==="1"||b==="true"){
                var c="false";
            }else{
                alert('input error');
            }
            
            var sl= "document.querySelector('"+a+"')";
            js += sl+".disabled="+c+"; \n";
        }
        console.log(js);
        return eval(js);
    }
    JOPshow(){
        var js="";
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].val;
            if (b==="0"||b==="false"){
                var c="true";
            }else if(b==="1"||b==="true"){
                var c="false";
            }else{
                alert('input error');
            }
            
            var sl= "document.querySelector('"+a+"')";
            js += sl+".hidden="+c+"; \n";
        }
        console.log(js);
        return eval(js);
    } 
    JOPhtml(){
        var js="";
        for (var i in this.obj){
            var a=this.obj[i].sl;
            var b=this.obj[i].val;
            var sl= "document.querySelector('"+a+"')";
            js += sl+".innerHTML='"+b+"'; \n";
        }
        console.log(js);
        return eval(js);
    }       
}

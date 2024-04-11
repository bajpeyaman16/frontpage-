setinterval(()=>{
    d=new Date();
    htime=gethour();
    mtime=getminute();
    stime=getsecont();
    hrotation=30*htime/2;
    mrotation=6*mtime;
    srotation=6*stime;
    hour.style.transform'rotate($(hrotation)deg)';
    minute.style.transform'rotate($(mrotation)deg)';
    second.style.transform'rotate($(hsrotation)deg)';
},1000)
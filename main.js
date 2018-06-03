function course(coursenum, courseindex, name, size, total, rx) {
    this.coursenum=coursenum;
    this.courseindex=courseindex;
    this.name = name;
    this.size=size;
    this.total=total;
    this.rx=rx;
    temp=rx.split(",");
    this.rx1total=temp[0];
    this.rx0total=0;
    temp2=temp[0].split(")");
    if (temp2.length > 1) {
        this.rx0total = temp2[0].split("(")[1];
        this.rx1total = temp2[1];
    }
    this.rx2total=temp[1];
    this.rx3total=temp[2];
    this.rx=parseInt(this.rx0total)+parseInt(this.rx1total)+parseInt(this.rx2total)+parseInt(this.rx3total);
}

courses = new Array()


interval = setInterval(function() {
    with(document.getElementsByName("top")[0].contentWindow){
        arr=document.getElementsByClassName("trr2");
        for(i = 0; i < arr.length; i++){
            temp = arr[i].getElementsByClassName("trunk");
            courses.push(new course(temp[0].text,temp[1].text,temp[2].text,temp[4].text,temp[5].text,temp[8].text))
        }
        nextpage = document.getElementById("nextpage");
        thispagenum = document.getElementsByClassName("yeM")[0].text.split("第 ")[1].split(" 页")[0];
        nextpagenum = document.getElementsByClassName("yeM")[0].text.split("第 ")[1].split("共 ")[1].split(" 页")[0];
        if (thispagenum == nextpagenum) {
            clearInterval(interval);
            return false;
        }
        else {
            nextpage.click();
        }
        console.log(courses);
    }
}, 2000);    


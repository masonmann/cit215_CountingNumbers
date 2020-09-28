var data = [
  {
    name:"one",
    color:"#F66D1A"
  },
  {
    name:"two",
    color:"#1AF6DA"
  },
  {
    name:"three",
    color:"#B41AF6"
  }
]


var PH =[];

function place(color, name){
  var that = this;
  this.name=name;
  this.color=color;
  this.number=0;
  
  
  this.ele=document.createElement("div");
  this.ele.style.backgroundColor=this.color;
  this.ele.style.height="100px";
  this.ele.style.width="200px";
 this.ele.style.borderRadius = "10px";
 this.ele.style.fontSize = "18px";
 this.ele.style.textAlign = "center";
 this.ele.style.verticalAlign = "middle";
 this.numberEle=document.createElement("div");
  this.numberEle.innerHTML=this.number;
  this.ele.appendChild(this.numberEle);
  
  
  this.ele.addEventListener("click", function(){
    that.addUp();
  });
  
  document.body.appendChild(this.ele);
}
place.prototype.addUp = function(){
  this.number++;
  this.numberEle.innerHTML=this.number;
}
for(var i=0; i<data.length; i++){
  PH.push(new place(data[i].color, data[i].name))
}
PH[1].addUp();
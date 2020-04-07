//let data=
    [{"authorname":"","posttype":"fanfic","title":"","timestamp":1583598545882,"_id":"UgvTMpse3m6jkUA5"},{"authorname":"阿幽 ","posttype":"fanfic","title":"tesuto","timestamp":1583598558810,"_id":"ILU8K9DAukEhT8dk"},{"authorname":"","posttype":"fanfic","title":"","timestamp":1583605636896,"_id":"l5c98eVJZ6wxk41F"},{"authorname":"阿幽 ","posttype":"artwork","title":"test","timestamp":1583605799015,"_id":"51T7FBmpPJlFx8Mv"},{"authorname":"阿幽 ","posttype":"fanfic","title":"a ","content":"        a ","timestamp":1583605811594,"_id":"VlbLaLvYtyIit24u"},{"authorname":"阿幽 ","posttype":"discussion","title":"见习是真的吗","timestamp":1583606007120,"_id":"yLIN65tFhoZNOHTI"},{"authorname":"鸟","posttype":"fanfic","title":"Another Test","timestamp":1583606431672,"_id":"qZ9JgBoGOPh0bMgB"},{"authorname":"Guest","posttype":"other","title":"This website doesn't work","timestamp":1583623034489,"_id":"c8Ii4Dv5vygYkYRA"},{"authorname":"爸爸","posttype":"discussion","title":"哈哈","timestamp":1583629568121,"_id":"rcVMYHNyFDwJQ1i6"},{"authorname":"Haru D Nae (Anaelita)","posttype":"fanfic","title":"Around the Grand Line Chapter.1 A new cabin boy","timestamp":1583700662030,"_id":"Rrscl6q5vaUeSwRO"},{"authorname":"阿幽 ","posttype":"artwork","title":"Happy Birthday Shanks 0309!","timestamp":1583701282198,"_id":"yDWtLqtUn8fyEhoM"},{"authorname":"Guest","posttype":"other","title":"","timestamp":1583772390489,"_id":"pn03Z2xetNX11AMo"},{"authorname":"","posttype":"other","title":"Progression","timestamp":1583772568988,"_id":"UYJjjnTDovG464GG"},{"authorname":"","posttype":"fanfic","title":"test","timestamp":1583772676931,"_id":"0wUBIvxflbnOBQhS"},{"authorname":"Guest","posttype":"other","title":"Progression","timestamp":1583772851726,"_id":"cHiazSflqeVJ2lsT"},{"authorname":"阿幽 ","posttype":"discussion","title":"论见习初期月下谈人生的片段有多rio","timestamp":1583791464510,"_id":"c1jOa26eF8TOnAcG"},{"authorname":"Love wei wei","posttype":"fanfic","title":"Brainstorm","content":"        ㅎㅎㅅㅂ","timestamp":1583802327876,"_id":"1quXEWytnAvYEjHI"},{"authorname":"Judy","posttype":"discussion","title":"I love jk小裙子","content":"        I want more skirts please! 我喜欢穿jk!","timestamp":1583803087548,"_id":"vbDgZHdHqpNcOSv7"},{"authorname":"Haru D Nae (Anaelita)","posttype":"fanfic","title":"Around the Grand Line Chapter.2 A promise (and a hat)","timestamp":1583803534118,"_id":"vTGYOF79C8PdkZuX"},{"authorname":"个鬼","posttype":"fanfic","title":"见习","timestamp":1583804695828,"_id":"ec81cRgkJaLgI0c8"},{"authorname":"Marine ","posttype":"fanfic","title":"Wanted ","timestamp":1583805453963,"_id":"eytNCg6rBPq9JsM6"},{"authorname":"LBJ","posttype":"discussion","title":"吃了吗您呐","timestamp":1583805742266,"_id":"FHJXI8CiMjO7vrxM"},{"authorname":"metoo","posttype":"fanfic","title":"i love u","timestamp":1583848943633,"_id":"ImJDIGQ9HtvvPF4O"},{"authorname":"anon","posttype":"fanfic","title":"Aidan + Timmy","timestamp":1583862048572,"_id":"mFZKedDrnNskkdTc"},{"authorname":"1","posttype":"discussion","title":"1","timestamp":1583862062462,"_id":"GFHASCC5YMddQ80o"},{"authorname":"Shawn","posttype":"fanfic","title":"Baby Shark","timestamp":1583862083601,"_id":"jRuTGq8jNiutJ4PR"},{"authorname":"S","posttype":"fanfic","title":"S","timestamp":1583862310359,"_id":"Pm6UDtQQmrZ5Ol80"},{"authorname":"H","posttype":"fanfic","title":"H","timestamp":1583862317022,"_id":"GgB0HeQlnwb6GF2g"},{"authorname":"hi","posttype":"artwork","title":"hi","timestamp":1584004901647,"_id":"Z1WiUVqC5OZ3rEKd"}];
let data=[]

let postMultiplier=7
let numberOfType=4
let formattedData=[]
//[{"posttype":"fanfic","post":0},
//{"posttype":"artwork","post":0},
//{"posttype":"discussion

function loadData(){
  //let url="/data"
  //incoming=loadJSON(url)


  fetch("/data")
  .then((response)=>{
    return response.json()
  })
  .then((incoming)=>{
    console.log(incoming)
    data=incoming.thedata



    formattedData=[]
    for(let i=0;i<data.length;i++){
    let current=data[i];
      print("On"+current.posttype);
    let foundType= false;



    for (let j=0;j<formattedData.length;j++){
      if (current.posttype==formattedData[j].posttype){

      formattedData[j].post++;
      print("found"+formattedData[j].post)
      foundType=true
      }
    }
    if(foundType == false) {
    formattedData.push({"posttype":current.posttype,"post":1})
    print("notfound, added to formatted data")
      }
    }

  })

  setTimeout(loadData,10000)
}



function setup() {
  createCanvas(400, 400);
  //console.log(data)
  loadData()
  print(data)


}

function draw() {
  background(220);

  for(let i=0;i<formattedData.length;i++){

   rect(i*100,i*120,postMultiplier *formattedData[i].post,postMultiplier *formattedData[i].post);


  }
   text("fanfic",200,70)
   text("artwork",200,130)
   text("discussion",100,270)
   text("other",100,340)



}

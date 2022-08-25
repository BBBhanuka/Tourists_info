var copy = new Vue({
el:"#menu",

data:{

message:'Hello Vue.js!'
},


methods:{

RMessage:function(){
this.message = this.message.split('').reverse().join('')

}

},



})
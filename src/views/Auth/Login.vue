<template>
 <div class="container">
      <br>
      <h2 id="titulo">Iniciar Sesion
         <i class="fas fa-shipping-fast"></i>
      </h2>
      <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>
      <hr>
      
    <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" v-model="email">
</div>
<div class="mb-4">
  <label for="exampleFormControlInput2" class="form-label">Password</label>
  <input type="text" class="form-control" id="exampleFormControlInput2" v-model="password">
</div>
<div id="Botones">
<button type="button" id="b1" class="btn btn-success" @click="register()">Entrar</button>
<button type="button" id="b2" class="btn btn-success">Success</button>
</div>

  </div>
</template>

<script>
//import Toasted from 'vue-toasted';
import '@/firebase/init'
import firebase from 'firebase'

export default {
name:'Login',
data() {
    return {
       
       email:'',
       password:'',
       
    }
},
methods:{
    register(){
         if(this.email==''){
            this.email='Llene este campo'
            this.$toasted.show('Hello, I am from ItSolutionStuff.com')
        }else if(this.password==''){
            this.password='Llene este campo'
    
        }else{
            firebase.auth().signInWithEmailAndPassword(this.email,this.password)
            .then(user=>{
                this.$router.push({name:'Dashboard'})
                console.log(user)
            }).catch(err=>{
                console.log(err.message)
            })
        }
    }
}

}
</script>

<style scoped>
#container{
    text-align: center;
}
#titulo{
    text-align: center;
}
#Botones{
    text-align: center;
}
#b1{
    margin-right: 4px;
}
#b2{
    margin-left: 4px;
}
</style>
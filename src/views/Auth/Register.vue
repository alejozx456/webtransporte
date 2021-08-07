<template>
  <div class="container">
      <br>
      <h2 id="titulo">Crear Cuenta
          <i class="fas fa-shipping-fast"></i>
      </h2>
      <hr>
      <div class="mb-4">
  <label for="exampleFormControlInput3" class="form-label">Nombre</label>
  <input type="text" class="form-control" id="exampleFormControlInput3" v-model="name">
</div>
    <div class="mb-4">
  <label for="exampleFormControlInput1" class="form-label">Email</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" v-model="email">
</div>
<div class="mb-4">
  <label for="exampleFormControlInput2" class="form-label">Password</label>
  <input type="text" class="form-control" id="exampleFormControlInput2" v-model="password">
</div>
<div id="Botones">
<button type="button" id="b1" class="btn btn-success" @click="register()">Registrarse</button>
<button type="button" id="b2" class="btn btn-success">Success</button>
</div>

  </div>
</template>

<script>
import '@/firebase/init'
import firebase from 'firebase'
export default {
name:'Register',
data() {
    return {
       name:'',
       email:'',
       password:'',
       
    }
},
methods:{
    register(){
        if (this.name=='') {
            this.name='Llene este campo'
        }else if(this.email==''){
            this.email='Llene este campo'
        }else if(this.password==''){
            this.password='Llene este campo'
    
        }else{
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then(user=>{
                this.name=''
                this.email=''
                this.password=''
                console.log(user)
            }).catch(err=>{
                this.name=err.message
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
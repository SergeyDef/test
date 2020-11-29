<template>
  <div class="container-fluid modal">
    <div class="modal__block">
      <div class="modal__close" @click="closeWindow">
        <div class="modal__cross"></div>
      </div>    
      <form>
        <div class="modal__title">
          <h1>Добавить клиента</h1>
        </div>
        <div class="modal__input mb-3">
          <label for="name"><span>Имя: </span>
            <input 
            type="text" 
            name="name" 
            class="form-control" 
            v-model="newElement.name"
            placeholder="Пётр"
            >
          </label>
        </div>
        <div class="modal__input mb-3">
          <label for="surname"><span>Фамилия: </span>
            <input type="text" 
            name="surname"
            class="form-control"  
            v-model="newElement.surname"
            placeholder="Иванов"
            >
          </label>
        </div>
        <div class="modal__input mb-3">
          <label for="status"><span>Статус: </span>
            <select class="form-control" name="status" v-model="newElement.status">
              <option>Постоянный</option>
              <option>Временный</option>
              <option>Новый</option>
              <option>Вип</option>
            </select>
          </label>
        </div>
        <div class="modal__add mb-4">
          <button type="button" class="btn" @click="addElement">Добавить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: 'ModalWindow',
  components: {
  },
  data(){
    return {
      newElement: {
        id: Date.now(),
        name: '',
        surname: '',
        status: '',
      }
    }
  },
  methods: {
    ...mapMutations(['addCustomers']),
    addElement: function () {
      this.addCustomers(this.newElement);
      this.$router.push('/');
    },
    closeWindow: function () {
      this.$router.push('/');
    }
  }
}
</script>
<style scoped lang="scss">
	@import '@/scss/style.scss';
  @import '@/scss/_mixins.scss';

	.modal{
		width: 100%;
		height: 100%;
		display: flex;
    background-color: rgba(0,0,0,0.7);

    &__block{
      width: 40%;
      height: 600px;
      display: flex;
      margin: auto;
      border-radius: 20px;
      position: relative;
      background-color: #fff;
    }
    &__close{
      @include close(92%, 3%);
    }
    &__cross{
      @include cross();
    }
    &__cross::after{
      @include crossAfter();
    }
    &__block>form{
      margin: auto;
      display: flex;
      width: 55%;
      flex-direction: column;
    }
    &__title{
      margin: 15px auto;
      text-align: center;
    }
    &__title>h1{
      font-size: 2rem;
    }
    &__input{
      width: 100%;
      height: 20%;
    }
    &__input>label{
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
    &__input>label>span{
      text-align: left;
      width: 30%;
    }
    &__input>label>input{
      @include input(100%, 70%, 1.1rem);
    }
    &__input>label>select{
      @include input(100%, 70%, 1.1rem);
    }
    &__add{
      width: 100%;
      height: 10%;
      display: flex;
      margin: 0 auto;
    }
    &__add>button{
      @include button(30%, 100%, #6672FB);
      color: #fff;
      margin: auto;
    }
	}
  @media (max-width: 1678px){
    .modal{

      &__block{
        width: 55%;
      }
    }
  }
  @media (max-width: 1360px){
    .modal{

      &__block{
        width: 70%;
        height: 500px;
      }
      &__block>form{
        width: 60%;
      }
    }
  }
  @media (max-width: 1140px){}
  @media (max-width: 967px){
    .modal{

      &__block{
        width: 88%;
      }
      &__block>form{
        width: 68%;
      }
    }
  }
  @media (max-width: 667px){
    .modal{

      &__block{
        width: 97%;
        height: 400px;
      }
      &__close{
        left: 89%;
      }
      &__block>form{
        width: 93%;
      }
      &__title>h1{
        font-size: 1.5rem;
      }
      &__input>label>span{
        font-size: 0.9rem;
      }
      &__add>button{
        width: 40%;
      }
    }
  }
  @media (max-width: 410px){
    .modal{
      &__close{
        left: 86%;
      }
    }
  }
  @media (max-width: 360px){
    .modal{

      &__block{
        height: 370px;
      }
      &__input>label>span{
        font-size: 0.7rem;
      }
    }
  }
</style>

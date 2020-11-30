<template>
  <div class="wrapper">
    <Search />
    <div class="list">
      <div class="list__get">
        <button type="button" class="btn" @click="modalWindow">Добавить клиента</button>
      </div>
      <listItems 
      v-for="customer in allCustomers"
      v-bind:customer="customer"
      />
    </div>
  </div>
</template>

<script>
import Search from '@/components/componentsContent/content/Search.vue'
import ListItems from '@/components/componentsContent/content/ListItems.vue'

export default {
  name: 'BlockListItems',
  components: {
    Search,
    ListItems,
  },
  props: {
    msg: String
  },
  computed: {
    allCustomers() {
      return this.$store.getters.getAllCustomers;
    }
  },
  data(){
    return {
    }
  },
  methods: {
    modalWindow: function () {
      this.$router.push('/modal');
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';

.wrapper{
	width: 70%;
	height: 100%;
	display: flex;
  position: relative;
	flex-direction: column;

  ::-webkit-scrollbar { 
    width: 5px; 
    height: 2px;
  }
  ::-webkit-scrollbar-button {  
    background-color: #ffffff; 
  }
  ::-webkit-scrollbar-track {  
    background-color: #F8B849;
  }
  ::-webkit-scrollbar-track-piece { 
    background-color: #ffffff;
  }
  ::-webkit-scrollbar-thumb { 
    height: 20px; 
    background-color: #F8B849; 
    border-radius: 5px;
  }
  ::-webkit-scrollbar-corner { 
    background-color: #F8B849;
  }
  ::-webkit-resizer { 
    background-color: #F8B849;
  }
}
.list{
  width: 90%;
  height: 70%;
  margin: 0 auto; 
  justify-content: space-between;
  overflow: auto;

  &__get{
    z-index: 999;
    width: 180px;
    height: 40px;
    position: absolute;
  }
  &__get>button{
    @include button(100%, 100%, #6672FB);
    color: #fff;
  }
 }
 @media (max-width: 1360px){
  .wrapper{
    width: 100%;
    height: 60%;
  }
  .list{
    margin: 2% auto;
    height: 75%;
    padding-top: 2%;
    &__get{

    }
    &__get>button{

    }
   }
 }
 @media (max-width: 960px){
  .wrapper{
  }
  .list{
    &__get{

    }
    &__get>button{

    }
   }
 }
</style>

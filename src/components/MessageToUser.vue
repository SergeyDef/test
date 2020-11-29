<template>
  <div class="message">
    <div class="message__wrapper">
      <div class="message__close" @click="messageClose" >
        <div class="message__cross"></div>
      </div>
      <div class="message__text">
        <span>Клиент не найден</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"

export default {
  name: 'MessageToUser',
  props: {
    msg: String
  },
  data() {
    return {
      signMessage: '',
    }
  },
  methods: {
    ...mapMutations(['controlMessage']),
    messageClose: function () {
      this.signMessage = false;
      this.controlMessage(this.signMessage);
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
.message{
  position: fixed;
  z-index: 99999;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);

  &__wrapper{
    width: 30%;
    height: 260px;
    margin: auto;
    display: flex;
    position: relative;
    border-radius: 10px;
    background-color: #fff;
  }

  &__close{
    @include close(90%, 5%);
  }
  &__cross{
    @include cross();
    left: 5px;
    top: 13px;
  }
  &__cross::after{
    @include crossAfter();
  }
  &__text{
    width: 100%;
    height: 100%;
    display: flex;
  }
  &__text>span{
    margin: auto;
    color: #000;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }
}
@media (max-width: 1678px){
  .message{

    &__wrapper{
      width: 40%;
    }

    &__close{
    }
    &__cross{
    }
    &__cross::after{
    }
    &__text{
    }
    &__text>span{
    }
  }
}
@media (max-width: 1360px){
  .message{

    &__wrapper{
      width: 50%;
    }

    &__close{
    }
    &__cross{
    }
    &__cross::after{
    }
    &__text{
    }
    &__text>span{
    }
  }
}
@media (max-width: 960px){
  .message{

    &__wrapper{
      width: 62%;
    }

    &__close{
    }
    &__cross{
    }
    &__cross::after{
    }
    &__text{
    }
    &__text>span{
    }
  }
}
@media (max-width: 667px){
  .message{

    &__wrapper{
      width: 80%;
      height: 200px;
    }

    &__close{
    }
    &__cross{
    }
    &__cross::after{
    }
    &__text{
    }
    &__text>span{
      font-size: 1.5rem;
    }
  }
}
@media (max-width: 467px){
  .message{

    &__wrapper{
    }

    &__close{
    }
    &__cross{
    }
    &__cross::after{
    }
    &__text{
    }
    &__text>span{
    }
  }
}
</style>

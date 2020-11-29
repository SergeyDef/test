<template>
  <div class="interface">
  	<div class="interface__details">
  		<button type="button" class="btn interface__button">
  		<div class="interface__button_indicator"></div>
  		<span class="interface__button_text" @click="getClients" >Запросить список клиентов</span>
  	</button>
  	</div>
  	<div class="interface__info mt-3 info">
  		<div class="info__title"><span>Клиенты</span></div>
  		<div class="info__data"><span>{{ clients + " шт" }}</span></div>
  	</div>
  	<div class="interface__info mt-3"></div>
  </div>
</template>

<script>
export default {
  name: 'BlockListItems',
  props: {
    msg: String
  },
  computed: {
  	clients() {
  		return this.$store.getters.numberClients;
  	}
  },
  methods: {
  	getClients: function () {
  		this.$store.dispatch("fetchCustomers");
  	}
  },
   mounted() {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/style.scss';
@import '@/scss/_mixins.scss';

.interface{
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;

	&__details{
		width: 100%;
		height: 10%;
		display: flex;
	}
	&__button{
		@include button(70%, 50%, #fff);
		border: solid 1px #F0F0F0;
		margin: auto;
	}
	&__button_indicator{
		@include buttonIndicator(#6672FB);
	}
	&__button_text{
		margin: auto 0;
	}
	&__info{
		width: 80%;
		height: 24%;
		margin: 0 auto;
		border-radius: 20px;
		background-color: #7FAAF8;
	}
	.info{
		display: flex;
		flex-direction: column;

		&__title{
			width: 100%;
			height: 30%;
			padding: 0 10%;
			display: flex;
		}
		&__title>span{
			margin: auto 0;
			color: #fff;
			font-size: 2rem;
		}
		&__data{
			width: 100%;
			height: 40%;
			padding: 0 10%;
			display: flex;
		}
		&__data>span{
			margin: 0 auto;
			color: #fff;
			font-size: 3rem;
		}
	}
}
@media (max-width: 1678px){
	.interface{

		&__info{
			height: 19%;
		}
	}
}
@media (max-width: 1360px){
	.interface{
		width: 100%;
		height: 40%;
		
		&__details{
			height: 23%;
		}
		&__details>button{
			width: 45%;
		}
		&__info{
			height: 35%;
		}
	}
}
@media (max-width: 1140px){
	.interface{
		
		&__details>button{
			width: 55%;
    		height: 60%;
		}
		&__info{
		}
	}
}
@media (max-width: 667px){
		.interface{

		&__details>button{
			width: 65%;
    		height: 50%;
		}
		&__info{
		}
		.info{
			flex-direction: row;

			&__title{
				width: 50%;
				height: 100%;
			}
			&__title>span{
				margin: auto;
			}
			&__data{
				width: 50%;
				height: 100%;
			}
			&__data>span{
				margin: auto;
			}
		}
	}
}
@media (max-width: 467px){
	.interface{
		height: 38%;
		&__details{
		}
		&__details>button{
			width: 100%;
    		height: 90%;
		}
		&__info{
		}
	}
}

</style>

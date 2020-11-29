<template>
  	<div class="item mt-5" v-show="itemIndicator">
  		<div class="item__delite" 
	  		@click="deliteItem"
	  		@mouseover="showHint" 
	  		@mouseout="hideHint">
  			<div class="item__modal" v-if="itemModal"><span>Удалить</span></div>
  			<div class="item__cross"></div>
  		</div>
  		<div item__photo></div>
  		<div class="item__text pt-2" :id="customer.id" :key="customer.id">
  			<div class="item__status p-2"><span>Статус: </span><span>{{ customer.status }}</span></div>
  			<div class="item__name p-2"><span>Клиент: </span><span>{{ customer.name + " " + customer.surname }}</span></div>
  		</div>
  	</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'ListItems',
  props: {
    customer: {
    	type: Object,
    	required: true
    }
  },
  data(){
  	return {
  		itemModal: false,
  		itemIndicator: true,
  	}
  },
  methods: {
  	...mapMutations(['updateSelectedId', 'deliteCustomers']),
  	showHint: function () {
  		this.itemModal = true;
  	},
  	hideHint: function () {
  		this.itemModal = false;
  	},
  	deliteItem: function () {
  		this.updateSelectedId(this.customer.id);
  		this.deliteCustomers();
  	}
  },
  computed: {
  	searchIndicator(){
  		return this.$store.getters.hiddenElement;
  	}
  },
  mounted(){
  },
}
</script>

<style scoped lang="scss">
.item{
	z-index: 1;
	width: 90%;
	height: 130px;
	margin: auto;
	display: flex;
	position: relative;
	background-color: #fff;
	border-radius: 10px;
	border: solid 1px #F0F0F0;

	&__delite{
		width: 30px;
		height: 30px;
		border: solid 3px #1E2933;
		background-color: #D15831;
		border-radius: 20px;
		position: absolute;
		cursor: pointer;
		left: 90%;
		top: 40%;
	}
	&__cross{
		transform: rotate(45deg);
    position: relative;
    width: 16px;
    height: 3px;
    background-color: #fff;
    left: 4px;
    top: 10px;
	}
	&__cross::after{
		content: "";
    position: absolute;
    background-color: #fff;
    width: 3px;
    height: 16px;
    left: 6px;
    top: -6px;
	}
	&__photo{
		width: 30%;
		height: 100%;
	}
	&__text{
		width: 69%;
		height: 100%;
	}
	&__status{
		width: 100%;
		text-align: left;
	}
	&__name{
		width: 100%;
		text-align: left;
	}
	&__modal{
		position: absolute;
		display: flex;
		right: 40px;
		top: -40px;
		width: 120px;
		height: 50px;
		background-color: #AFCBF6;
	}
	&__modal>span{
		color: #fff;
		margin: auto;
	}
}
@media (max-width: 667px){
	.item{
		width: 95%;
		height: 110px;
		margin-top: 2rem!important;

		&__delite{
			left: 86%;
		}
		&__cross{
		}
		&__cross::after{
		}
		&__photo{
		}
		&__text{
			width: 75%;
		}
		&__status{
		}
		&__name{
		}
		&__modal{
		}
		&__modal>span{
		}
	}
}
@media (max-width: 360px){
	.item{

		&__delite{
		}
		&__cross{
		}
		&__cross::after{
		}
		&__photo{
		}
		&__text{
			width: 80%;
		}
		&__status{
		}
		&__name{
		}
		&__modal{
		}
		&__modal>span{
		}
	}
}
</style>

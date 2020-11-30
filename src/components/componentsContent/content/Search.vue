<template>
  <div class="search">
  	<form class="search__form">
  		<div class="search__input">
  			<input 
  			type="text" 
  			name="search"
  			placeholder="текст поиска" 
  			class="form-control"
  			v-model="searchText"
  			>
  		</div>
  		<div class="search__button">
  			<button type="button" class="btn" @click="find">
  			<div class="search__button-indicator"></div>
  			<span class="search__button_text">Найти</span>
  		</button>
  		</div>
  	</form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  props: {
    msg: String
  },
  data() {
  	return {
  		searchText: '',
  	}
  },
  methods: {
  	...mapMutations(['updateSearchQuery', 'findCustomers']),
  	find: function () {
  		this.updateSearchQuery(this.searchText);
  		this.findCustomers();
  	},
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
.search{
	width: 100%;
	height: 10%;
	display: flex;

	&__form{
		width: 90%;
		height: 50%;
    margin: auto;
		display: flex;
    justify-content: space-between;
	}
	&__input{
		width: 78%;
		height: 100%;
	}
	&__input>input{
    @include input(100%, 100%, 1.1rem);
	}
	&__button{
		width: 20%;
		height: 100%;
	}
	&__button>button{
		@include button(100%, 100%, #fff);
		border: solid 1px #F0F0F0;
	}
  &__button_text{
    margin: auto 0;
  }
	&__button-indicator{
		width: 12px;
		height: 12px;
		margin: auto 0;
		border-radius: 20px;
		background-color: #F7B500;
	}
}
@media (max-width: 1678px){
  .search{
    &__form{
      height: 40%;
    }
  }
}
@media (max-width: 1360px){
  .search{
    height: 15%;
  }
}
@media (max-width: 967px){
  .search{
    &__form{
      height: 40%;
    }
    &__input{
      width: 70%;
      height: 40px;
    }
    &__button{
      width: 30%;
      height: 40px;
    }
  }
}
@media (max-width: 510px){
  .search{
    &__form{
      height: 40px;
    }
    &__button-indicator{
    }
  }
}
@media (max-width: 410px){
  .search{
    &__form{
      height: 40px;
    }
    &__input{
      width: 70%;
      height: 40px;
    }
    &__button{
      width: 30%;
      height: 40px;
    }
    &__button-indicator{
    }
  }
}
@media (max-width: 360px){
  .search{
    &__form{
      height: 72%;
    }
    &__input{
      width: 68%;
    }
    &__button{
      width: 32%;
    }
    &__button-indicator{
      width: 10px;
      height: 10px;
    }
  }
}
</style>

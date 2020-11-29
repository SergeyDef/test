import axios from 'axios'

export default{
	state: {
		customers: [],
      copyСustomers: [],
      selectedId: '',
      searchQuery: '',
      searchIndicator: true,
      message: false,
	},
	mutations: {
		setCustomers(state, payload) {
			state.customers = payload;
			state.copyСustomers = payload;
		},
		addCustomers(state, newSelected){
			state.customers.unshift(newSelected);
		},
		updateSelectedId(state, selectedId){
			state.selectedId = selectedId;
		},
		deliteCustomers(state){
			state.customers = state.customers.filter(elem => elem.id != state.selectedId);
			state.copyСustomers = state.customers.filter(elem => elem.id != state.selectedId);
		},
		updateSearchQuery(state, searchQuery){
			state.searchQuery = searchQuery;
		},
		findCustomers(state){
			// state.customers.forEach(item => {
			// 	if (item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
			// 		|| item.surname.toLowerCase().includes(state.searchQuery.toLowerCase())
			//  		|| item.status.toLowerCase().includes(state.searchQuery.toLowerCase())) {
			// 		state.searchIndicator = true;
			// 	} else {
			// 		state.searchIndicator = false;
			// 	}
			// });

			if (state.searchQuery.length === 0) {
				state.customers = state.copyСustomers;
			} else {
				state.customers = state.copyСustomers.filter(elem => elem.name.toLowerCase().includes(state.searchQuery.toLowerCase()) 
				|| elem.surname.toLowerCase().includes(state.searchQuery.toLowerCase()) 
				|| elem.status.toLowerCase().includes(state.searchQuery.toLowerCase()));

				if (state.customers.length === 0) {
					state.message = true;
					state.customers = state.copyСustomers;
				}
			}
		},
		controlMessage(state, signMessage){
			state.message = signMessage;
		}
	},
	getters: {
		getAllCustomers(state){
			return state.customers
		},
		showingMessage(state){
			return state.message
		},
		hiddenElement(state){
			return state.searchIndicator
		},
		numberClients(state){
			return state.customers.length
		}
	},
	actions: {
		fetchCustomers(context){
			axios.get('https://raw.githubusercontent.com/SergeyDef/nitrenJSON-/master/customers.json')
				.then(response => context.commit("setCustomers", response.data.customers))
		}
	},
}

<template>
	<form @submit.prevent="onSubmit" :class="isError && 'form-error'">
		<label class="field" :class="v$.name.$error && 'field-error'">
			<span>Name</span>
			<input v-model="v$.name.$model" @blur="v$.name.$touch" class="input"
				:class="v$.name.$error && 'input-error' || v$.name.$dirty && !v$.name.$invalid && 'input-success'" />
			<!-- <Input v-model="name" @blur="v$.name.$touch" :error="v$.name.$error" :dirty="v$.name.$dirty" /> -->
			<ShowError :validation="v$.name" />
		</label>

		<label class="field" :class="v$.email.$error && 'field-error'">
			<span>Email</span>
			<!-- <Input v-model="email" @blur="v$.email.$touch" :error="v$.email.$error" :dirty="v$.email.$dirty" /> -->
			<input v-model="v$.email.$model" @blur="v$.email.$touch" class="input"
				:class="v$.email.$error && 'input-error' || v$.email.$dirty && !v$.email.$invalid && 'input-success'" />
			<ShowError :validation="v$.email" />
		</label>

		<button :disabled="v$.$invalid"
			:class="v$.$error && 'input-error' || v$.$dirty && !v$.$invalid && 'input-success'">Submit</button>
	</form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
	setup: () => ({ v$: useVuelidate() }),
	data() {
		return {
			name: '',
			email: '',
			isError: false,
		}
	},
	validations() {
		return {
			name: { required, $autoDirty: true },
			email: { required, email }
		}
	},
	created() {
		this.getUserData()
	},
	methods: {
		onSubmit() {
			if (this.v$.$invalid) {
				this.v$.$validate();
				this.isError = this.v$.$invalid
				return alert('invalid')
			}
			this.name = ''
			this.email = ''
			this.isError = false
			this.v$.$reset()
			alert('ok')
		},
		getUserData() {
			// this is a fake request
			fetch('exemple-api.com/user-1')
				.then(res => this.email = 'default@mail.com')
				.catch(res => this.email = 'default@mail.com')
		}
	}
}
</script>

<style scoped>
form {
	display: flex;
	flex-direction: column;
	border: solid 2px #2a83a5;
	border-radius: 5px;
	padding: 15px 20px;
	background-color: #a2e7e7;
	max-width: 500px;
	margin-right: auto;
	margin-left: auto;
}

.form-error {
	border-color: red;
	background-color: #e7a2a2;
}

.field {
	position: relative;
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;
	padding-right: 20px;
}

.field span {
	font-family: 'Courier New', Courier, monospace;
	font-weight: 500;
	font-size: 22px;
}

.field-error span {
	color: red;
}

.input {
	margin: 8px 0;
	padding: 25px 10px;
	border-radius: 8px;
	outline-color: blue;
	font-size: 25px;
}

.input-error {
	border-color: red;
	outline-color: red;
}

.input-success {
	border-color: green;
	outline-color: green;
}

button {
	max-width: 150px;
	min-width: 100px;
	align-self: center;
	margin-top: 20px;
}
</style>

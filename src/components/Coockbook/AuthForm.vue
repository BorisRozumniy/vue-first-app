<template>
	<form @submit.prevent="onSubmit">
		<label :class="v$.name.$error && 'field-error'">
			Name
			<input v-model="name" @blur="v$.name.$touch">
			<div v-if="v$.name.$error">Name field has an error.</div>
		</label>

		<label for="email" :class="v$.name.$error && 'field-error'">Email</label>
		<input v-model="email" id="email">
		<div v-if="v$.email.$error">Email field has an error.</div>

		<button>Submit</button>
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
			email: ''
		}
	},
	validations() {
		return {
			name: { required, $autoDirty: true },
			email: { required, email }
		}
	},
	methods: {
		onSubmit() {
			alert('ok')
		}
	}
}
</script>

<style>
form {
	border: solid 2px brown;
	border-radius: 5px;
	padding: 15px 20px;
	background-color: rgb(221, 113, 113);
}

.field-error {
	border-bottom: 3px solid red;
}
</style>

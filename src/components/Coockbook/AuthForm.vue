<template>
	<form @submit.prevent="onSubmit" :class="isError && 'error'">
		<label class="field" :class="v$.name.$error && 'field-error'">
			<span>Name</span>
			<Input v-model="name" @blur="v$.name.$touch" />
			<!-- <Input v-model="name" @blur="v$.name.$touch" :error="v$.name.$error" :dirty="v$.name.$dirty" /> -->
			<ShowError :validation="v$.name" :error="v$.name.$error" :errors="v$.name.$errors" />
		</label>

		<label class="field" :class="v$.email.$error && 'field-error'">
			<span>Email</span>
			<!-- <Input v-model="email" @blur="v$.email.$touch" :error="v$.email.$error" :dirty="v$.email.$dirty" /> -->
			<Input v-model="email" @blur="v$.email.$touch" />
			<ShowError :validation="v$.email" :error="v$.email.$error" :errors="v$.email.$errors" />
		</label>

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
	methods: {
		onSubmit() {
			if (this.v$.$invalid) {
				this.isError = this.v$.$invalid
				return alert('invalid')
			}
			this.name = ''
			this.email = ''
			this.isError = false
			this.v$.$reset()
			alert('ok')
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
}

.error {
	border-color: red;
	background-color: #e7a2a2;
}

.field {
	position: relative;
	margin-bottom: 5px;
	padding-right: 20px;
}

.field span {
	font-family: 'Courier New', Courier, monospace;
	font-weight: 500;
	font-size: 22px;
}



button {
	max-width: 150px;
	min-width: 100px;
	align-self: center;
	margin-top: 20px;
}
</style>

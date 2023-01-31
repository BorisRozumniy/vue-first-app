<template>
	<div>
		<h1>Create a New Vue Account</h1>
		<form>
			<!-- Full name validation -->
			<div class="form-group" :class="{ 'form-group--error': v$.name.$error }">
				<label class="form__label">Full Name</label>
				<input class="form__input" v-model.trim="v$.name.$model" />
				<span class="required" v-if="v$.name.required">*</span>
				<span class="message" v-if="v$.name.$error" v-for="{ $message } in v$.name.$errors">{{ $message }}</span>
			</div>
			<!-- Email Address-->
			<div class="form-group" :class="{ 'form-group--error': v$.email.$error }">
				<label for="email">Email Address</label>
				<input class="form__input" v-model.trim="v$.email.$model" />
				<span class="required" v-if="v$.email.required">*</span>
				<span class="message" v-if="v$.email.$error" v-for="{ $message } in v$.email.$errors">{{ $message }}</span>
			</div>
			<!-- Password validation-->
			<div class="form-group" :class="{ 'form-group--error': v$.password.$error }">
				<label class="form__label">Password</label>
				<input class="form__input" v-model.trim="v$.password.$model" />
				<span class="required" v-if="v$.password.required">*</span>
				<span class="message" v-if="v$.password.$error" v-for="{ $message } in v$.password.$errors">{{ $message }}</span>
			</div>
			<!-- Age validation-->
			<div class="form-group" :class="{ 'form-group--error': v$.age.$error }">
				<label class="form__label">Age</label>
				<input class="form__input" v-model.trim="v$.age.$model" />
				<span class="required" v-if="v$.age.required">*</span>
				<span class="message" v-if="v$.age.$error && v$.age.between">{{ v$.age.between.$message }}</span>
			</div>
		</form>
	</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, between, email } from '@vuelidate/validators'
export default {
	setup: () => ({ v$: useVuelidate() }),
	data() {
		return {
			name: '',
			email: '',
			password: '',
			age: ''
		}
	},
	validations: {
		name: {
			required,
			minLength: minLength(4)
		},
		email: {
			email
		},
		password: {
			required,
			minLength: minLength(4)
		},
		age: {
			required,
			between: between(18, 45)
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

.form-group {
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 4px 15px;
}

.required {
	position: absolute;
	top: 5px;
	right: 0;
	color: red;
}

.form-group--error {
	border-color: red;
	background-color: #e7a2a2;
}

.form-group--error .message {
	color: red;
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

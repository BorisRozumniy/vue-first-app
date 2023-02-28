<template>
	<div class="wrapper">
		<input
			v-model="v$.todo.title.$model"
			@keyup.enter="createTodo"
			type="text"
			placeholder="title"
			:class="v$.todo.title.$error && 'input-error' || v$.todo.title.$dirty && !v$.todo.title.$invalid && 'input-success'"
		>
		<button @click="createTodo">add</button>

		<div class="errors" v-if="triedToAdd && v$.$invalid">
			<ShowError :validation="v$.todo.title" classWrapper="cw" classItem="ci"/>
		</div>
	</div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

export default {
	setup: () => ({ v$: useVuelidate() }),
	data: () => ({
		todo: {
			title: '',
			id: null,
			isDone: false
		},
		triedToAdd: false,
	}),
	validations: () => ({
		todo: {
			title: { required, minLength: minLength(4) }
		}
	}),
	methods: {
		createTodo() {
			if (this.v$.$invalid) {
				this.v$.$validate();
				this.triedToAdd = true;
				return
			}
			this.todo.id = Date.now();
			this.$emit('create', this.todo)
			this.todo = {
				title: '', isDone: false,
			}
			this.v$.$reset();
			this.triedToAdd = false;
		},
	}
}
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	background: #c0d0e0;
	padding: 20px;
	border-radius: 6px;
}

input {
	padding: 12px 20px;
	font-size: 24px;
	border-radius: 6px;
	margin-bottom: 14px;
	max-width: 100%;
}

button {
	border-color: rgb(122, 122, 238);
	padding: 12px 20px;
	font-size: 24px;
	border-radius: 6px;
}

.errors div {
	border: solid 2px red;
}

@media screen and (min-width: 580px) {
	.wrapper {
		max-width: 500px;
		flex-direction: row;
		justify-content: space-between;
	}

	input {
		margin-bottom: 0;
	}
}

.input-error {
	border-color: red;
	outline-color: red;
}

.input-success {
	border-color: green;
	outline-color: green;
}
</style>

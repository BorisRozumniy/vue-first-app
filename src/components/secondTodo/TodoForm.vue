<template>
	<div>
		<input v-model="todo.title" @keyup.enter="createTodo" type="text" placeholder="title">
		<button @click="createTodo">add</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			todo: {
				title: '',
				id: null,
				isDone: false
			},
		}
	},
	methods: {
		createTodo() {
			this.todo.id = Date.now();
			this.$emit('create', this.todo)
			this.todo = {
				title: '', isDone: false,
			}
		},
	}
}
</script>

<style scoped>
div {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #c0d0e0;
	padding: 20px;
	border-radius: 6px;
}

input {
	padding: 12px 20px;
	font-size: 24px;
	border-radius: 6px;
	margin-bottom: 14px;
}

button {
	border-color: rgb(122, 122, 238);
	padding: 12px 20px;
	font-size: 24px;
	border-radius: 6px;
}

@media screen and (min-width: 580px) {
	div {
		max-width: 500px;
		flex-direction: row;
	}

	input {
		margin-bottom: 0;
	}
}
</style>

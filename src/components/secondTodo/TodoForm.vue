<template>
	<input v-model="todo.title" @keyup.enter="createTodo" type="text" placeholder="title">
	<button @click="createTodo">add</button>
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

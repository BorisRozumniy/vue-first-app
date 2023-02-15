<template>
	<input v-model="todo.title" type="text" placeholder="title">
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
			todos: [
				{ id: 1, title: "item 1", complited: false },
				{ id: 2, title: "item 2", complited: true },
			],
		}
	},
	methods: {
		createTodo() {
			this.todo.id = Date.now();
			this.$emit('create', this.todo)
			console.log(this.todo);
			this.addTodo(this.todo)
			this.todo = {
				title: '', isDone: false,
			}
		},
		addTodo(todo) {
			this.todos.push(todo)
		}
	}
}
</script>

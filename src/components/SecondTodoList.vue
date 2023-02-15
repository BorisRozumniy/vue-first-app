<template>
	<input v-model="todo.title" type="text" placeholder="title">
	<button @click="createTodo">add</button>

	<div v-for="todo in todos" :key="todo.id">
		<b>{{ todo.title }}</b>
		<span v-if="todo.isDone">+</span>
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
			todos: [
				{ id: 1, title: "item 1", isDone: false },
				{ id: 2, title: "item 2", isDone: true },
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

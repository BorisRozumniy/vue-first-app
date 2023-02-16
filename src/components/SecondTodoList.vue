<template>
	<TodoForm @create="addTodo" />
	<div v-for="todo in todos" :key="todo.id">
		<b>{{ todo.title }}</b>
		<span v-if="todo.isDone">+</span>
	</div>
</template>

<script>
import TodoForm from './secondTodo/TodoForm.vue';

export default {
	data() {
		return {
			todos: [
				{ id: 1, title: "item 1", isDone: false },
				{ id: 2, title: "item 2", isDone: true },
			],
		};
	},
	methods: {
		addTodo(todo) {
			this.todos.push(todo);
		}
	},
	components: { TodoForm }
}
</script>

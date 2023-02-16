<template>
	<TodoForm @create="addTodo" />
	<TodoList :todos="todos" />
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
	components: { TodoForm, TodoList },
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
}
</script>

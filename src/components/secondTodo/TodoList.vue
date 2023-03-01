<template>
	<TodoItem
		v-for="todo in todos"
		:key="todo.id"
		:todo="todo"
		@remove="$emit('remove', todo.id)"
		@edit="$emit('edit', todo.id)"
	/>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
	components: {
    TodoItem
},
	props: {
		todos: { type: Array, requered: true }
	},
}
</script>

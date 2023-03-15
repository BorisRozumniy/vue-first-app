<template>
	<div class="todo-item" :id="'todo-item' + todo.id">
		<div class="edit" v-if="editingTodo">
			<input type="text" v-model="editingTodo.title">
		</div>
		<div class="content" v-else>
			<b>{{ todo.title }}</b>
			<span v-if="todo.isDone">+</span>
		</div>
		<div class="buttons">
			<template v-if="editingTodo">
				<button class="save" @click="onEditSave">save</button>
			</template>
			<template v-else>
				<button class="edit" @click="onEdit(todo)">edit</button>
				<button class="remove" @click="onRemove(todo.id)">remove</button>
			</template>
		</div>
	</div>
</template>

<script>

export default {
	props: {
		todo: { type: Object, requered: true }
	},
	data() {
		return {
			editingTodo: null,
		}
	},
	methods: {
		onEdit(todo) {
			console.log('onEdit(todo)', todo);
			this.editingTodo = todo;
		},
		onEditSave() {
			this.$emit("edit", this.editingTodo)
			this.editingTodo = null
		},
		onRemove(todoId) {
			console.log('onEdit(todoId)', todoId);
			this.$emit("remove", todoId)
		}
	}
}
</script>
<style scoped>
.todo-item {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: solid 2px;
	margin-top: 4px;
}

.content {
	padding: 15px;
}
.buttons {
	padding: 15px;
}

.buttons button {
	min-width: 135px;
	color: white;
}

.buttons :nth-child(1) {
	margin-right: 8px;
}

.remove {
	background-color: red;
}
.edit {
	background-color: green;
}
.save {
	background-color: rgb(35, 75, 255);
}

@media screen and (min-width: 580px) {
.todo-item{
	flex-direction: row;
}
}
</style>

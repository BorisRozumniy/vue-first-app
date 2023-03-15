<template>
	<div class="todo-item" :id="'todo-item' + todo.id">
		<div class="edit-block" v-if="editingTodo">
			<input type="text" v-model="editingTodo.title">
		</div>
		<div class="content-block" v-else>
			<b>{{ todo.title }}</b>
			<span v-if="todo.isDone">+</span>
		</div>
		<div class="buttons">
			<template v-if="editingTodo">
				<button class="save" @click="onEditSave"><img :src="saveIcon" /></button>
			</template>
			<template v-else>
				<button class="edit" @click="onEdit(todo)"><img :src="editIcon" alt="edit"></button>
				<button class="remove" @click="onRemove(todo.id)"><img :src="reremoveIcon" alt="remove"></button>
			</template>
		</div>
	</div>
</template>

<script>
import saveIcon from "../../assets/save-svgrepo-com.svg"
import editIcon from "../../assets/edit-2-svgrepo-com.svg"
import reremoveIcon from "../../assets/remove-all-svgrepo-com.svg"

export default {
	setup() {
		return {
			editIcon, reremoveIcon, saveIcon
		}
	},
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

.content-block {
	padding: 15px;
}
.content-block, .edit-block {
	padding: 15px;
	width: 80%;
}
.edit-block input {
	font-family: 'Courier New', Courier, monospace;
	font-size: 22px;
	font-weight: bold;
	color: #213547;
}
.buttons {
	padding: 15px;
	display: flex;
	width: 14%;
	min-width: 152px;
	justify-content: flex-end;
}

.buttons button {
	border-radius: 50%;
	margin-left: 8px;
	width: 55px;
	height: 55px;
	display: flex;
	align-items: center;
	justify-content: center;
}

button img {
	width: 25px;
}
.remove {
	background-color: #ff6060;
}
.edit {
	background-color: #28c728;
}
.save {
	background-color: #6379dd;
}

@media screen and (min-width: 580px) {
.todo-item{
	flex-direction: row;
}
}
</style>

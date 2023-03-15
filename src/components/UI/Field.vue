<template>
	<label class="field">
		<span>
			<span class="required" v-if="validation.required">*</span>
			{{ fieldName }}
		</span>

		<Input
			:type="type"
			:value="modelValue"
			:error="validation.$error"
		/>
		<!-- <Input v-model="name" @blur="validation.$touch" :error="validation.$error" :dirty="validation.$dirty" /> -->
		<ShowError :validation="validation" :error="validation.$error" :errors="validation.$errors" />
	</label>
</template>

<script>
import { required } from '@vuelidate/validators';

export default {
	name: 'Field',
	data() {
		// console.log('validation:', this.validation);
		console.log(JSON.stringify(this.validation, null, 2));
		return {
			name: ''
		}
	},
	props: {
		fieldName: { type: String, default: '' },
		type: { type: String, default: 'text' },
		validation: { type: Object },
		modelValue: {
			type: String,
			required,
			validator: (v) => typeof v === 'string'
		}
	}
}
</script>

<style scoped>
.field {
	position: relative;
	margin-bottom: 5px;
	padding-right: 20px;
}
.required {
	/* position: absolute; */
	top: 5px;
	right: 0;
	color: red;
}
</style>

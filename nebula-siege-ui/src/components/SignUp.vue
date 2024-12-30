<template>
  <div class="form-container">
    <h2>Get Started Now</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Server:</label>
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a Server" class="w-full md:w-56"></Select>
      </div>      
      <div class="form-group">
        <label for="name">Name:</label>
        <InputText
          type="input"
          id="name"
          v-model="formData.name"
          required
          placeholder="Enter your name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <InputText
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="Enter your email"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="message">Password:</label>
        <Password
          id="password"
          v-model="formData.password"
          placeholder="Enter your password"
          toggleMask 
          class="w-full md:w-56"
        />
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>

      <Button class="w-full md:w-56" type="submit" :disabled="isSubmitting">Submit</Button>
    </form>
  </div>
</template>

<script>
import Select from 'primevue/select'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';

export default {
  components: {
    Select: Select,
    Button: Button,
    InputText:InputText,
    Password:Password
  },
  
  data() {
    return {
      formData: {
        name:'',
        email: '',
        password: ''
      },
      errors: {
        name:null,
        email: null,
        message: null
      },
      isSubmitting: false,
      submitted: false,
      selectedCity: 'New York',
      cities: [
                { name: 'Alpha', code: 'A' },
                { name: 'Rome', code: 'RM' },
                { name: 'London', code: 'LDN' },
                { name: 'Istanbul', code: 'IST' },
                { name: 'Paris', code: 'PRS' }
            ]
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;

      if (Object.values(this.errors).some((error) => error)) {
        this.isSubmitting = false;
        return;
      }

      // Simulate API call or form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      this.isSubmitting = false;
      this.submitted = true;
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
      this.errors = {
        name: null,
        email: null,
        message: null
      };
    }
  }
};
</script>

<style>
.form-container {
  max-width: 400px;
  margin: auto;
}
.form-group {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.5em;
  margin-left:0;
  text-align: left;
}
input{
  width: 100%;
  padding: 0.5em;
  margin-bottom: 0.5em;
}
.error {
  color: red;
  font-size: 0.9em;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75em 1.5em;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.success-message {
  margin-top: 1em;
  color: green;
}
</style>
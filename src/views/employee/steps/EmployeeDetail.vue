<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">Employee Details</div>
        </div>
        <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="card-body">
                <div class="p-fluid">
                    <div class="p-field p-grid p-jc-center">
                        <label for="firstname" class="p-col-2 col-form-label">Firstname</label>
                        <div class="p-col-5">
                            <InputText id="firstname" type="text" v-model="v$.firstName.$model"  :class="{'p-invalid':v$.firstName.$invalid && submitted}"/>
                            <small v-if="(v$.firstName.$invalid && submitted) || v$.firstName.$pending.$response" class="p-error">{{v$.firstName.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="middlename" class="p-col-2 col-form-label">Middlename</label>
                        <div class="p-col-5">
                            <InputText id="middlename" type="text" v-model="middleName" />
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="lastname" class="p-col-2 col-form-label">Lastname</label>
                        <div class="p-col-5">
                            <InputText id="lastName" type="text" v-model="v$.lastName.$model"  :class="{'p-invalid':v$.lastName.$invalid && submitted}"/>
                            <small v-if="(v$.lastName.$invalid && submitted) || v$.lastName.$pending.$response" class="p-error">{{v$.lastName.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label class="p-col-2 col-form-label">Gender</label>
                        <div class="p-col-5">
                            <div class="p-formgroup-inline">
                                <div class="p-field-checkbox">
                                    <RadioButton id="gender" name="gender" value="1" v-model="v$.gender.$model" />
                                    <label for="gender">Male</label>
                                </div>
                                <div class="p-field-checkbox">
                                    <RadioButton id="gender2" name="gender" value="0" v-model="v$.gender.$model" />
                                    <label for="gender2">Female</label>
                                </div>
                            </div>
                            <small v-if="(v$.gender.$invalid && submitted) || v$.gender.$pending.$response" class="p-error">{{v$.gender.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="personalEmail" class="p-col-2 col-form-label">Personal Email</label>
                        <div class="p-col-5">
                            <InputText id="personalEmail" type="text" v-model="v$.personalEmail.$model"  :class="{'p-invalid':v$.personalEmail.$invalid && submitted}"/>
                                <span v-if="v$.personalEmail.$error && submitted">
                                <span id="email-error" v-for="(error, index) of v$.personalEmail.$errors" :key="index">
                                <small class="p-error">{{error.$message}}</small>
                                </span>
                            </span>
                            <small v-else-if="(v$.personalEmail.$invalid && submitted) || v$.personalEmail.$pending.$response" class="p-error">{{v$.personalEmail.required.$message.replace('Value', 'Email')}}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <Button type="submit" >Next</button>
            </div>
        </form>

    </div>
</template>
<script>
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
    setup: () => ({ v$: useVuelidate() }),
    methods: {
        emitNextClicked() {
            this.submitted = true;
           
        },
        validateForm() {
        },
        handleSubmit(isFormValid) {
            this.submitted = true;
            console.log(isFormValid)
            if (!isFormValid) {
                return;
            } else {
                this.$emit('next-page', { pageIndex: 0});
            }
        },

    },
    data() {
        return {
            firstName: '',
            middleName: '',
            lastName: '',
            personalEmail: '',
            gender : '',
            name: '',
            submitted : false,
            validationErrors: {},
            showMessage : false
            
        }
    },
    validations() {
        return {
            firstName: {
                required
            },
            lastName: {
                required
            },
            personalEmail: {
                required,
                email
            },
            gender : {
                required
            },
            
        }
    }
}
</script>
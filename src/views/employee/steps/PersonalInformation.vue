<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">Personal Information</div>
        </div>
        <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="card-body">
                <div class="p-fluid">
                    <div class="p-field p-grid p-jc-center">
                        <label for="birthDate" class="p-col-2 col-form-label">Birth Date</label>
                        <div class="p-col-5">
                            <InputMask mask="99/99/9999"  placeholder="mm/dd/yyyy" slotChar="mm/dd/yyyy" id="birthDate" v-model="v$.birthDate.$model"  :class="{'p-invalid':v$.birthDate.$invalid && submitted}"/>
                            <small v-if="(v$.birthDate.$invalid && submitted) || v$.birthDate.$pending.$response" class="p-error">{{v$.birthDate.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="contactNumber" class="p-col-2 col-form-label">Contact Number</label>
                        <div class="p-col-5">
                            <InputMask id="contactNumber" mask="(999) 999-9999" v-model="v$.contactNumber.$model" placeholder="(999) 999-9999" :class="{'p-invalid':v$.contactNumber.$invalid && submitted}"/>
                            <small v-if="(v$.contactNumber.$invalid && submitted) || v$.contactNumber.$pending.$response" class="p-error">{{v$.contactNumber.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="contactNumber" class="p-col-2 col-form-label">Marital Status</label>
                        <div class="p-col-5">
                            <Dropdown v-model="v$.maritalStatus.$model" :options="maritalStatuses" optionLabel="name" placeholder="Select marital status" :class="{'p-invalid':v$.maritalStatus.$invalid && submitted}" />
                            <small v-if="(v$.maritalStatus.$invalid && submitted) || v$.maritalStatus.$pending.$response" class="p-error">{{v$.maritalStatus.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="fatherName" class="p-col-2 col-form-label">Father's Name</label>
                        <div class="p-col-5">
                             <InputText id="fatherName" type="text" v-model="v$.fatherName.$model"  :class="{'p-invalid':v$.fatherName.$invalid && submitted}"/>
                            <small v-if="(v$.fatherName.$invalid && submitted) || v$.fatherName.$pending.$response" class="p-error">{{v$.fatherName.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="motherName" class="p-col-2 col-form-label">Mother's Name</label>
                        <div class="p-col-5">
                             <InputText id="motherName" type="text" v-model="v$.motherName.$model"  :class="{'p-invalid':v$.motherName.$invalid && submitted}"/>
                            <small v-if="(v$.motherName.$invalid && submitted) || v$.motherName.$pending.$response" class="p-error">{{v$.motherName.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="hobbies" class="p-col-2 col-form-label">Hobbies</label>
                        <div class="p-col-5">
                            <Chips v-model="v$.hobbies.$model" :class="{'p-invalid':v$.hobbies.$invalid && submitted}" />     
                            <small v-if="(v$.hobbies.$invalid && submitted) || v$.hobbies.$pending.$response" class="p-error">{{v$.hobbies.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="bloodGroup" class="p-col-2 col-form-label">Blood Group</label>
                        <div class="p-col-5">
                            <Dropdown v-model="v$.bloodGroup.$model" :options="bloodGroups" optionLabel="name" placeholder="Select a blood group" :class="{'p-invalid':v$.bloodGroup.$invalid && submitted}" />
                            <small v-if="(v$.bloodGroup.$invalid && submitted) || v$.bloodGroup.$pending.$response" class="p-error">{{v$.bloodGroup.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="address1" class="p-col-2 col-form-label">Address 1</label>
                        <div class="p-col-5">
                            <Textarea v-model="v$.address1.$model"  :class="{'p-invalid':v$.address1.$invalid && submitted}" />
                            <small v-if="(v$.address1.$invalid && submitted) || v$.address1.$pending.$response" class="p-error">{{v$.address1.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="address2" class="p-col-2 col-form-label">Address 2</label>
                        <div class="p-col-5">
                            <Textarea v-model="v$.address2.$model"  :class="{'p-invalid':v$.address2.$invalid && submitted}" />
                            <small v-if="(v$.address2.$invalid && submitted) || v$.address2.$pending.$response" class="p-error">{{v$.address2.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-action">
                <Button type="submit">Next</button>&nbsp;
                <Button @click="emitPrevClicked()">Back</button>
            </div>
        </form>
    </div>
</template>
<script>

import {  required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
    setup: () => ({ v$: useVuelidate() }),
    methods: {
        emitNextClicked() {
            this.$emit('next-page', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 1});
        },
        emitPrevClicked() {
            this.$emit('prev-page',{pageIndex: 1})
        },
        handleSubmit(isFormValid) {
            this.submitted = true;
            console.log(isFormValid)
            if (!isFormValid) {
                return;
            } else {
                this.$emit('next-page', { pageIndex: 1});
            }
        },
    },
    data() {
        return { 
            submitted : false,
            birthDate : '',
            contactNumber : '',
            maritalStatus: null,
            maritalStatuses: [
                {name: 'Single', code: 'single'},
                {name: 'Married', code: 'married'},
                {name: 'Widowed', code: 'widowed'},
                {name: 'Divorced', code: 'divorced'}
            ],
            fatherName : '',
            motherName : '',
            hobbies: null,
            bloodGroup : null,
            bloodGroups : [
                {name: 'A+', code: 'A+'},
                {name: 'A-', code: 'A-'},
                {name: 'B+', code: 'B+'},
                {name: 'B-', code: 'B-'},
                {name: 'O+', code: 'O+'},
                {name: 'O-', code: 'O-'},
                {name: 'AB+', code: 'AB+'},
                {name: 'AB-', code: 'AB-'},
            ],
            address1: '',
            address2: ''
        }
    },
    validations() {
        return {
            birthDate : {
                required
            },
            contactNumber : {
                required
            },
            maritalStatus : {
                required
            },
            fatherName : {
                required
            },
            motherName : {
                required
            },
            hobbies : {
                required
            }, 
            bloodGroup : {
                required
            },
            address1: {
                required
            },
            address2: {
                required
            }
        }
    }
}
</script>
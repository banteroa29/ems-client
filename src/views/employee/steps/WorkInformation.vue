<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">Work Information</div>
        </div>
        <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div class="card-body">
                <div class="p-fluid">
                    <div class="p-field p-grid p-jc-center">
                        <label for="designation" class="p-col-2 col-form-label">Designation</label>
                        <div class="p-col-5">
                            <Dropdown v-if="loading" placeholder="Loading..." loading/>
                            <Dropdown v-else v-model="v$.designation.$model" placeholder="Select Designation" :options="departments" optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" :filter="true" :showClear="true" :class="{'p-invalid':v$.designation.$invalid && submitted}">
                                <template #optiongroup="slotProps">
                                    <div class="p-d-flex p-ai-center country-item">
                                        <div>{{slotProps.option.label}}</div>
                                    </div>
                                </template>
                                <template #value="slotProps">
                                    <div class="country-item country-item-value" v-if="slotProps.value">
                                        <div>{{slotProps.value.label}}</div>
                                    </div>
                                    <span v-else>
                                        {{slotProps.placeholder}}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="country-item">
                                        <div>{{slotProps.option.label}}</div>
                                    </div>
                                </template>
                            </Dropdown>
                            <small v-if="(v$.designation.$invalid && submitted) || v$.designation.$pending.$response" class="p-error">{{v$.designation.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="reporting" class="p-col-2 col-form-label">Reporting To</label>
                        <div class="p-col-5">
                            <Dropdown v-if="fetchingUsers" placeholder="Loading..." loading/>
                            <Dropdown v-else v-model="v$.reportingTo.$model" placeholder="Select reporting to" :options="reportingHeads" optionLabel="label"  :filter="true" :showClear="true" :class="{'p-invalid':v$.reportingTo.$invalid && submitted}">
                                <template #value="slotProps">
                                    <div class="country-item country-item-value" v-if="slotProps.value">
                                         <img :src="slotProps.value.photo" />
                                        <div>{{slotProps.value.label}}</div>
                                    </div>
                                    <span v-else>
                                        {{slotProps.placeholder}}
                                    </span>
                                </template>
                                <template #option="slotProps">
                                    <div class="country-item">
                                         <img :src="slotProps.option.photo" />
                                        <div>{{slotProps.option.label}}</div>
                                    </div>
                                </template>
                            </Dropdown>
                            <small v-if="(v$.reportingTo.$invalid && submitted) || v$.reportingTo.$pending.$response" class="p-error">{{v$.reportingTo.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="employeeType" class="p-col-2 col-form-label">Employee Type</label>
                        <div class="p-col-5">
                            <Dropdown v-if="fetchingEmployeeTypes" placeholder="Loading..." loading/>
                            <Dropdown v-else v-model="v$.employeeType.$model" :options="employeeTypes" optionLabel="name" placeholder="Select employee type" :class="{'p-invalid':v$.employeeType.$invalid && submitted}" />
                             <small v-if="(v$.employeeType.$invalid && submitted) || v$.employeeType.$pending.$response" class="p-error">{{v$.employeeType.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="reporting" class="p-col-2 col-form-label">Salary</label>
                        <div class="p-col-5">
                            <InputNumber v-model="v$.salary.$model" mode="currency" currency="PHP" locale="en-PH"   :class="{'p-invalid':v$.salary.$invalid && submitted}" />
                            <small v-if="(v$.salary.$invalid && submitted) || v$.salary.$pending.$response" class="p-error">{{v$.salary.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="employeeNumber" class="p-col-2 col-form-label">Empoyee Number</label>
                        <div class="p-col-5">
                            <InputText id="employeeNumber" type="text" v-model="v$.employeeNumber.$model"  :class="{'p-invalid':v$.employeeNumber.$invalid && submitted}"/>
                            <small v-if="(v$.employeeNumber.$invalid && submitted) || v$.employeeNumber.$pending.$response" class="p-error">{{v$.employeeNumber.required.$message.replace('Value', 'This field')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="reporting" class="p-col-2 col-form-label">Work Email</label>
                        <div class="p-col-5">
                            <InputText id="workEmail" type="text" v-model="v$.workEmail.$model"  :class="{'p-invalid':v$.workEmail.$invalid && submitted}"/>
                                <span v-if="v$.workEmail.$error && submitted">
                                <span id="email-error" v-for="(error, index) of v$.workEmail.$errors" :key="index">
                                <small class="p-error">{{error.$message}}</small>
                                </span>
                            </span>
                            <small v-else-if="(v$.workEmail.$invalid && submitted) || v$.workEmail.$pending.$response" class="p-error">{{v$.workEmail.required.$message.replace('Value', 'Email')}}</small>
                        </div>
                    </div>
                    <div class="p-field p-grid p-jc-center">
                        <label for="joinDate" class="p-col-2 col-form-label">Join Date</label>
                        <div class="p-col-5">
                            <InputMask mask="99/99/9999"  placeholder="mm/dd/yyyy" slotChar="mm/dd/yyyy" id="joinDate" v-model="v$.joinDate.$model"  :class="{'p-invalid':v$.joinDate.$invalid && submitted}"/>
                            <small v-if="(v$.joinDate.$invalid && submitted) || v$.joinDate.$pending.$response" class="p-error">{{v$.joinDate.required.$message.replace('Value', 'This field')}}</small>
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
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import ApiService from '@/assets/js/ApiServices.js'

export default {
    setup: () => ({ v$: useVuelidate() }),
    mounted() {
        this.ApiService.getDepartments().then(res => {
            this.loading = false;
            res.data.forEach((element,index) => {
                
                this.departments.push({
                    label : element.data.name,
                    code : element.data.id,
                    items: []
                })
                element.designations.forEach(subItem => {
                    this.departments[index].items.push({
                        label: subItem.data.name,
                        value: subItem.data.id
                    })
                })
            });
        })
        this.ApiService.getEmployees().then(res => {
            this.fetchingUsers = false
            res.data.forEach(element => {
                this.reportingHeads.push({
                    label : element.data.name,
                    code : element.data.id,
                    photo : element.data.photo
                })
            })
        })
        this.ApiService.getEmployeeTypes().then(res => {
            this.fetchingEmployeeTypes = false
            res.data.forEach(element => {
                this.employeeTypes.push({
                    name: element.data.name,
                    code : element.data.id
                })
            })
        })
    },
    created() {
        this.ApiService = new ApiService();
    },
    methods: {
        emitNextClicked() {
            this.$emit('next-page', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 2});
        },
        emitPrevClicked() {
            this.$emit('prev-page',{pageIndex: 2})
        },
        handleSubmit(isFormValid) {
            this.submitted = true;
            console.log(isFormValid)
            if (!isFormValid) {
                return;
            } else {
                this.$emit('next-page', { pageIndex: 2});
            }
        },
    },
    data() {
        return {
            designation : null,
            departments: [],
            loading : true,
            fetchingUsers : true,
            fetchingEmployeeTypes : true,
            submitted : false,
            reportingTo : null,
            reportingHeads: [],
            employeeType : null,
            employeeTypes : [],
            salary: 0,
            employeeNumber : '',
            workEmail : '',
            joinDate : ''
        }
    },
    validations() {
        return {
            designation : {
                required
            },
            reportingTo: {
                required
            },
            employeeType : {
                required
            },
            salary: {
                required
            },
            employeeNumber : {
                required
            },
            workEmail : {
                required,
                email
            },
            joinDate : {
                required
            }
        }
    } 
}
</script>
<style scoped>
.country-item {
    display: flex;
}
.country-item img {
    width: 20px;
    margin-right: 5px;
}
</style>
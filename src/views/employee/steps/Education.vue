<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">Education</div>
        </div>
        <form @submit.prevent="handleSubmit(!v$.$invalid)">
            {{v$}}
            <input type="text" v-model="householdName">
            <p v-for="error of v$.$silentErrors" :key="error.$uid">
                {{ error.$message }}
            </p>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <th scope="col" width="4%"></th>
                        <th scope="col" width="30%">Course</th>
                        <th scope="col" width="30%">Institution</th>
                        <th scope="col" width="18%">Start Date</th>
                        <th scope="col" width="18%">End Date</th>
                    </thead>
                    <tbody>
                        <EducForm v-for="(education, index) in educations" v-model="education[index]"  :key="index"/>
                        <tr>
                            <td colspan="4" class="align-center"> 
                                <span class="add_new_link">
                                    <a href="#" @click="addRow">
                                        <i class="pi pi-plus"></i>
                                        <span>
                                            Add New
                                        </span>
                                    </a>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
            <div class="card-action">
                <Button type="submit">Next</button>&nbsp;
                <Button @click="emitPrevClicked()">Back</button>
            </div>
        </form>
    </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import EducForm from '../steps/EducForm.vue'
export default {
    setup: () => ({ v$: useVuelidate() }),
    components : {EducForm},
    methods: {
        emitNextClicked() {
            this.$emit('next-page', {formData: {firstname: this.firstname, lastname: this.lastname, age: this.age}, pageIndex: 3});
        },
        emitPrevClicked() {
            this.$emit('prev-page',{pageIndex: 3})
        },
        addRow() {
            // this.rows = this.rows + 1
            this.educations.push({
                course : '',
                institution : '',
                startDate : '',
                endDate: ''
            })
        },
        handleSubmit(isFormValid) {
            this.submitted = true;
            console.log(isFormValid)
            if (!isFormValid) {
                return;
            } else {
                // this.$emit('next-page', { pageIndex: 2});
            }
        },
    },
    data() {
         return {
            householdName: '',
            educations: []  
        }
    },
    validations() {
        return { 
        }
    }
}
</script>
<style scoped>
.align-center {
    text-align: center;
}
.width-100 {
    width: 100%;
}
</style>
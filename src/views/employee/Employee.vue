<template>
    <div class="main-panel">
        <div class="content">
            <div class="page-inner">
                <Breadcrumb :items="breadcrumb"/>

                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <Toolbar>
                                    <template #left>
                                        <h4 class="card-title">Employee List</h4>
                                    </template>

                                    <template #right>
                                        <router-link :to="{ name: 'employee.create.details'}">
                                            <Button label="New" icon="pi pi-plus" class="p-mr-2" @click="openNew"/>&nbsp;
                                        </router-link>
                                        <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()"/>
                                    </template>
                                </Toolbar>
                            </div>
                            <div class="card-body">
                                <DataTable :value="users" 
                                    responsiveLayout="scroll"
                                    :paginator="true"
                                    class="p-datatable-customers" 
                                    rows="10"
                                    dataKey="id"
                                    v-model:filters="filters"
                                    filterDisplay="menu"
                                    :loading="loading"
                                    :globalFilterFields="['name','nickname.name','email.name']">
                                    <template #empty>
                                        No customers found.
                                    </template>
                                    <Column field="photo" header="Photo">
                                        <template #body="{data}">
                                            <Avatar :image="data.photo" size="large" shape="circle"></Avatar>
                                        </template>
                                    </Column>
                                    <Column field="employee_id" header="Employee ID"></Column>
                                    <Column field="name" header="Name" style="min-width:12rem">
                                        <template #body="{data}">
                                            <div class="p-text-bold">
                                                {{data.name}}
                                            </div>
                                            <div class="p-text-light">
                                                {{data.email}}
                                            </div>
                                        </template>
                                        <template #filter="{filterModel}">
                                            <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                                        </template>
                                    </Column>
                                    <Column field="department" header="Designation">
                                            <template #body="{data}">
                                            <div class="department">
                                                {{data.department}}
                                            </div>
                                            <div class="designation">
                                                {{data.designation}}
                                            </div>
                                        </template>
                                    </Column>
                                    <Column field="contact_number" header="Contact#"></Column>
                                    <Column :exportable="false" style="min-width:4rem">
                                        <template #body="slotProps">
                                            <router-link :to="{ name: 'employee.show.personal', params: { employeeId: slotProps.data.id }}">
                                            <Button icon="pi pi-arrow-right" class="p-button-sm p-button-primary p-mr-2"  />
                                            </router-link>
                                        </template>
                                    </Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import {FilterMatchMode,FilterOperator} from 'primevue/api';
import ApiService from '@/assets/js/ApiServices.js'

export default {
    components : {
        Breadcrumb,
    },
    data() {
        return {
            breadcrumb : {
                home : { icon: 'pi pi-home',to : '/',label : 'Employee List' },
                items : [
                    {label : 'Employees'},
                    {label : 'Employee List'},
                ]
            },
            users : [],
            filters: null,
            representatives: [
                {name: "Amy Elsner", image: 'amyelsner.png'},
                {name: "Anna Fali", image: 'annafali.png'},
                {name: "Asiya Javayant", image: 'asiyajavayant.png'},
                {name: "Bernardo Dominic", image: 'bernardodominic.png'},
                {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
                {name: "Ioni Bowcher", image: 'ionibowcher.png'},
                {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
                {name: "Onyama Limba", image: 'onyamalimba.png'},
                {name: "Stephen Shaw", image: 'stephenshaw.png'},
                {name: "XuXue Feng", image: 'xuxuefeng.png'}
            ],
            statuses: [
                'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
            ],
            loading: true,

        }
    },
    created() {
        this.ApiService = new ApiService();
        this.initFilters();
    },
    mounted() {
        this.ApiService.getEmployees().then(res => {
            console.log(res)
            this.loading = false;
            res.data.forEach(element => {
                this.users.push(element.data)
            });
        })
        // axios.get("https://vuetable.ratiw.net/api/users").then(response => {
        //     this.users = response.data.data;
        // });
    },
    methods: {
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        },
        clearFilter1() {
            this.initFilters();
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'representative': {value: null, matchMode: FilterMatchMode.IN},
                'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
                'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
                'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
                'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
            }
        }
    }
}
</script>
<style scoped>
.p-text-bold {
    font-weight: bold;
}
.p-text-light {
    font-weight: lighter;
    font-size: small;
    color: slateblue;
}
.department {
    font-weight: bold;
    font-size: 0.9em;
}
.designation {
    font-size: 0.8em;
}
</style>
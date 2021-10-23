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
                                            <h4 class="card-title">Employee Status List</h4>
                                        </template>

                                        <template #right>
                                            <Button label="New" icon="pi pi-plus" class="p-mr-2" @click="openNew"/>&nbsp;
                                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()"/>
                                        </template>
                                    </Toolbar>
								</div>
                                <div class="card-body">
									<DataTable :value="employeeStatuses" 
                                        responsiveLayout="scroll"
                                        :paginator="true"
                                        class="p-datatable-customers" 
                                        rows="10"
                                        dataKey="id"
                                        v-model:filters="filters"
                                        filterDisplay="menu"
                                        :loading="loading"
                                        :globalFilterFields="['name','status']">
                                        <template #empty>
                                            No customers found.
                                        </template>
                                        <Column field="name" header="Name" style="min-width:5rem">
                                            <template #body="{data}">
                                                {{data.name}}
                                            </template>
                                            <template #filter="{filterModel}">
                                                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                                            </template>
                                        </Column>
                                        
                                        <Column :exportable="false" style="min-width:8rem">
                                            <template #body="slotProps">
                                                <Button icon="pi pi-pencil" class="p-button-sm p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                                                &nbsp;
                                                <Button icon="pi pi-trash" class="p-button-sm p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
                                            </template>
                                        </Column>
                                    </DataTable>

                                     <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                                        <div class="confirmation-content">
                                            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                                            <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
                                        </div>
                                        <template #footer>
                                            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                                            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
                                        </template>
                                    </Dialog>

                                    <Dialog v-model:visible="newDialog" :style="{width: '450px'}" header="New Employee Status" :modal="true" class="p-fluid">
                                        <div class="p-field">
                                            <label for="name">Name</label>
                                            <InputText id="name" v-model.trim="department.name" required="true" autofocus :class="{'p-invalid': submitted && !department.name}" />
                                            <small class="p-error" v-if="submitted && !department.name">Name is required.</small>
                                        </div>
                                        <div class="p-field">
                                            <label for="description">Description</label>
                                            <Textarea id="description" v-model="department.description" required="true" rows="3" cols="20" />
                                        </div>

                                        <template #footer>
                                            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                                            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
                                        </template>
                                    </Dialog>

								</div>
								<!-- <div class="card-action">
									<button class="btn btn-success">Submit</button>
									<button class="btn btn-danger">Cancel</button>
								</div> -->
							</div>
						</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ApiService from '../../assets/js/ApiServices.js'
import {FilterMatchMode,FilterOperator} from 'primevue/api';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
export default {
    data() {
        return {
           employeeStatuses : [],
           department : {},
           filters : null,
           statuses : [
               1,0
           ],
           loading : true,
           breadcrumb : {
                home : { icon: 'pi pi-home',to : '/',label : 'Employee Statuses' },
                items : [
                    {label : 'Settings'},
                    {label : 'Employee Status List'},
                ]
            },
            deleteProductDialog : false,
            newDialog : false,
            submitted: false,

        }
    },
    created() {
        this.ApiService = new ApiService();
        this.initFilters();
    },
    mounted() {
        this.ApiService.getEmployeeStatuses().then(res => {
            // this.departments = res
            this.loading = false
            res.data.forEach(element => {
                this.employeeStatuses.push(element.data)
            });
            console.log(this.employeeStatuses)
        })
    },
    components: {
        Breadcrumb,
    },
    methods : {
        initFilters() {
            this.filters = {
                  'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                  'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                  'is_active': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            }
        },
        getStatus(status) {
            return (status === 0 ? 'Inactive' : 'Active')
        },
        clearFilter() {
            this.initFilters();
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },
        openNew() {
            this.department = {} 
            this.submitted = false
            this.newDialog = true
        }
    }
}
</script>
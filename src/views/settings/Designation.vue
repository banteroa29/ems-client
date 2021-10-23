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
                                            <h4 class="card-title">Designation List</h4>
                                        </template>

                                        <template #right>
                                            <Button label="New" icon="pi pi-plus" class="p-mr-2" @click="openNew"/>&nbsp;
                                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined" @click="clearFilter()"/>
                                        </template>
                                    </Toolbar>
								</div>
                                <div class="card-body">
                                  
                                    <DataTable
                                        :value="designations"
                                        responsiveLayout="scroll"
                                        :paginator="true"
                                        class="p-datatable-designations" 
                                        rows="10"
                                        dataKey="id"
                                        v-model:filters="filters"
                                        filterDisplay="menu"
                                        :loading="loading"
                                        :globalFilterFields="['name','department','status']"
                                        showGridlines >
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
                                        <Column filterField="department" header="Department" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width:14rem">
                                            <template #body="{data}">
                                                {{data.department}}
                                            </template>
                                            <template #filter="{filterModel}">
                                                <div class="p-mb-3 p-text-bold">Department Picker</div>
                                                <MultiSelect v-model="filterModel.value" :options="departments" optionLabel="option" placeholder="Any" class="p-column-filter">
                                                    <template #option="slotProps">
                                                        <div class="p-multiselect-representative-option">
                                                            <span class="image-text">{{slotProps.option}}</span>
                                                        </div>
                                                    </template>
                                                </MultiSelect>
                                            </template>
                                        </Column>
                                         <Column field="is_active" header="Status" :filterMenuStyle="{'width' : '14rem'}" style="min-width:12rem">
                                            <template #body="{data}">
                                                <Badge :severity="data.is_active === 'Inactive' ? 'danger': 'success' ">{{data.is_active}}</Badge>
                                            </template>
                                             <template #filter="{filterModel}">
                                                <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                                    <template #value="slotProps">
                                                        <Badge v-if="slotProps.value" :severity="slotProps.value === 'Inactive' ? 'danger': 'success' ">{{slotProps.value}}</Badge>
                                                        <span v-else>{{slotProps.placeholder}}</span>
                                                    </template>
                                                    <template #option="slotProps">
                                                        <Badge :severity="slotProps.option === 'Inactive' ? 'danger': 'success' ">{{slotProps.option}}</Badge>
                                                    </template>
                                                </Dropdown>
                                            </template>
                                        </Column>
                                         <Column :exportable="false" style="min-width:8rem">
                                            <template #body="slotProps">
                                                <Button icon="pi pi-pencil" class="p-button-sm p-button-success p-mr-2" @click="editProduct(slotProps.data)" />
                                                &nbsp;
                                                <Button icon="pi pi-trash" class="p-button-sm p-button-warning" @click="showDeleteDialog(slotProps.data)" />
                                            </template>
                                        </Column>
                                    </DataTable>

                                     <Dialog v-model:visible="deleteDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
                                        <div class="confirmation-content">
                                            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                                            <span v-if="designation">Are you sure you want to delete <b>{{designation.name}}</b>?</span>
                                        </div>
                                        <template #footer>
                                            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false"/>
                                            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
                                        </template>
                                    </Dialog>

                                    <Dialog v-model:visible="newDialog" :style="{width: '450px'}" header="New Designation" :modal="true" class="p-fluid">
                                        <div class="p-field">
                                            <label for="name">Name</label>
                                            <InputText id="name" v-model.trim="designation.name" required="true" autofocus :class="{'p-invalid': submitted && !designation.name}" />
                                            <small class="p-error" v-if="submitted && !designation.name">Name is required.</small>
                                        </div>
                                        <div class="p-field">
                                            <label for="description">Description</label>
                                            <Textarea id="description" v-model="designation.description" required="true" rows="3" cols="20" />
                                        </div>

                                        <div class="p-field">
                                            <label for="inventoryStatus" class="p-mb-3">Inventory Status</label>
                                            <Dropdown id="inventoryStatus" v-model="designation.inventoryStatus" :options="statuses" optionLabel="label" placeholder="Select a Status">
                                                <template #value="slotProps">
                                                    
                                                    <span >
                                                        {{slotProps.placeholder}}
                                                    </span>
                                                </template>
                                            </Dropdown>
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
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import ApiService from '../../assets/js/ApiServices.js'
import {FilterMatchMode,FilterOperator} from 'primevue/api';

export default {
    components: {
        Breadcrumb,
    },
    data() {
        return {
            breadcrumb: {
                home : { icon: 'pi pi-home',to : '/',label : 'Designations' },
                items : [
                    {label : 'Designations'},
                    {label : 'Designation List'},
                ]
            },
            departments : [],
            designation: {},
            submitted:   false,
            newDialog : false,
            deleteDialog: false,
            designations : [],
            filters : null,
            loading: true,
            statuses : [
                'Active','Inactive'
            ],
            settings: {
                maxScrollbarLength: 60
            }
        }
    },
    created() {
        this.ApiService = new ApiService()
        this.initFilters()
    },
    mounted() {
        this.getDepartments()
        
    },
    methods : {
        getDepartments() {
            this.ApiService.getDepartments().then(res => {
                res.data.forEach(element => {
                    this.departments.push(element.data.name)
                })
                this.ApiService.getDesignations().then(res => {
                    this.loading = false
                    res.data.forEach(element => {
                        this.designations.push(element.data)
                    });
                })
            })
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
                'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
                'department':{value: null, matchMode: FilterMatchMode.IN},
                'is_active': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            }
        },
        clearFilter() {
            this.initFilters()
        },
        openNew() {
            this.designation = {} 
            this.submitted = false
            this.newDialog = true
        },
        showDeleteDialog(designation) {
            this.designation = designation;
            this.deleteDialog = true;
        }
    }
}
</script>
<style lang="scss">
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>
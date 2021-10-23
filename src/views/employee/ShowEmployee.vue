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
                                        <Avatar :image="employee.photo" size="xlarge" shape="circle"/>
                                        <div style="padding: 12px 12px 12px 12px;">
                                            <h1 class="card-title">{{ employee.name }}</h1>
                                            <p class="card-subtitle">{{ employee.designation }}</p>
                                        </div>
                                    </template>
                                
                                    <template #right>
                                        <Button label="Edit" icon="pi pi-plus" class="p-mr-2"/>&nbsp;
                                        <Button type="button" icon="pi pi-ellipsis-h" label="" class="p-button-outlined"  @click="toggle" />
                                        <Menu ref="menu" :model="menuItems" :popup="true" />

                                    </template>
                                </Toolbar>
                            </div>
                            <div class="card-body">
                                <TabMenu :model="tabItems" v-model:activeIndex="active"  />
                                <router-view 
                                :personal_information="personal_information"/>
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
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import ApiService from '@/assets/js/ApiServices.js'

export default {
    components : {
        Breadcrumb,
    },
    setup() {
        const route = useRoute()
        const id = route.params.employeeId
        // const path = route.path
        const tabItems = ref([
            {
                label: 'Personal Information',
                icon: 'pi pi-fw pi-home',
                to: '/employees/' + id +'/personal-information' 
            },
            {
                label: 'Work Information',
                icon: 'pi pi-fw pi-calendar',
                to: '/employees/' + id +'/work-information' 

            },
            {
                label: 'Education',
                icon: 'pi pi-fw pi-pencil',
                to: '/employees/' + id +'/education' 
            },
            {
                label: 'Work Experience',
                icon: 'pi pi-fw pi-file',
                to: '/employees/' + id +'/work-experience' 
            },
            {
                label: 'Emergency Contact',
                icon: 'pi pi-fw pi-cog',
                to: '/employees/' + id +'/emergency-contact' 
            }
        ]);
        return {tabItems,id}
    },
    data() {
        return {
            active : 1,
            breadcrumb : {
                home : { icon: 'pi pi-home',to : '/',label : 'Show Employee' },
                items : [
                    {label : 'Employees'},
                    {label : 'Employee List'},
                    {label : 'Show Employee'},
                ]
            },
            menuItems: [
				{
					label: 'Update',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Delete',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				{
					label: 'Vue Website',
					icon: 'pi pi-external-link',
					url: 'https://vuejs.org/'
				},
				{
                    label: 'Router',
                    icon: 'pi pi-upload',
                    to: '/fileupload'
                }
			],
            employee : {},
            personal_information : null
            
        }
    },
    methods: { 

        toggle(event) {
            this.$refs.menu.toggle(event);
        }

    },
    created () {
        this.ApiService = new ApiService();
    },
    mounted() {
        this.ApiService.showEmployee(this.id).then(res => {
            this.employee = res.data.employee.data
            this.personal_information = res.data.personal_information
            this.$store.commit("addPersonalInfo",res.data.personal_information)
            this.$store.commit("addWorkInformation",res.data.job_information)
            this.$store.commit("addEducation",res.data.education)
            this.$store.commit("addWorkExperience",res.data.work_experience)
            this.$store.commit("addEmergencyContact",res.data.emergency_contact)
            
        })
    }
}
</script>
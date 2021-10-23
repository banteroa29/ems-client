<template>
	<div class="main-panel">
		<div class="content">
			<div class="page-inner">
				<Breadcrumb :items="breadcrumb"/>
				<div class="card">
					<Steps :model="steps" :readonly="true" />
				</div>
				 <div class="row">
                    <div class="col-md-12">
						<router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @next-page="nextPage($event)" @complete="complete">
							<keep-alive>
								<component :is="Component" />
							</keep-alive>
						</router-view>
                    </div>
                </div>
			</div>
		</div>
	</div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'

export default {
    components : {
        Breadcrumb
    },
    data() {
        return {
            breadcrumb : {
                home : { icon: 'pi pi-home',to : '/',label : 'Add Employee' },
                items : [
                    {label : 'Employees'},
                    {label : 'Employee List'},
                    {label : 'Add Employee'},
                ]
            },
			steps : [{
					label: 'Employee Details',
					to: {name : 'employee.create.details'}
				},
				{
					label: 'Personal Information',
					to: {name : 'employee.create.personal'}
				},
				{
					label: 'Work Information',
					to: {name : 'employee.create.job'}
				},
				{
					label: 'Education',
					to: {name : 'employee.create.education'}
				},
				{
					label: 'Work Experience',
					to: {name : 'employee.create.work'}
				},
			],
			formObject: {}
        }
    },
	methods: {
		nextPage(event) {
            // for (let field in event.formData) {
            //     this.formObject[field] = event.formData[field];
            // }
			console.log(event.pageIndex)
            this.$router.push(this.steps[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.steps[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
	},
	mounted() {
		// this.emitter.on('next-step', str => {
		// 	alert(str)
		// 	this.nextPage()
		// })
	}
}
</script>
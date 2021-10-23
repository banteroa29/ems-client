<template>
    <div class=" container">
        <div class="row">
            <div class="col-md-5 ">
                <div class="row data">
                    <div class="col-md-5 label">Employee ID</div>
                    <div class="col-md-7">{{workInformation.employee_number}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Department</div>
                    <div class="col-md-7">{{workInformation.department}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Designation</div>
                    <div class="col-md-7">{{workInformation.designation}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Reporting To</div>
                    <div class="col-md-7"></div>
                </div>
            </div>
            <div class="col-md-5 ">
                <div class="row data">
                    <div class="col-md-5 label">Status</div>
                    <div class="col-md-7">{{workInformation.employee_status}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Work Email</div>
                    <div class="col-md-7">{{workInformation.work_email}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Join Date</div>
                    <div class="col-md-7">{{workInformation.join_date}}</div>
                </div>
                 <div class="row data">
                    <div class="col-md-5 label">Salary</div>
                    <div class="col-md-7">{{workInformation.salary}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
       workInformation() {
           return this.$store.getters.getWorkInfo
       }
    },
}
</script>
<style scoped>
.container {
    padding: 20px;
}
.data {
    padding: 10px;
}
.label {
    font-weight: bold;
}
</style>
<template>
    <div class=" container">
        <div class="row">
            <div class="col-md-5 ">
                <div class="row data">
                    <div class="col-md-5 label">Contact Number</div>
                    <div class="col-md-7">{{ personalInformation.contact_number }}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Birth Date</div>
                    <div class="col-md-7">{{personalInformation.birth_date}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Marital Status</div>
                    <div class="col-md-7">{{personalInformation.marital_status}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Hobbies</div>
                    <div class="col-md-7">{{personalInformation.hobbies}}</div>
                </div>
            </div>
            <div class="col-md-5 ">
                <div class="row data">
                    <div class="col-md-5 label">Mother's Name</div>
                    <div class="col-md-7">{{personalInformation.mother_name}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Father's Name</div>
                    <div class="col-md-7">{{personalInformation.father_name}}</div>
                </div>
                <div class="row data">
                    <div class="col-md-5 label">Blood Group</div>
                    <div class="col-md-7">{{personalInformation.blood_group}}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row data">
                    <div class="col-md-12 label">Present Address</div>
                    <div class="col-md-12">{{ personalInformation.address1}}</div>
                </div>
            </div>
             <div class="col-md-12">
                <div class="row data">
                    <div class="col-md-12 label">Permanent Address</div>
                    <div class="col-md-12">{{personalInformation.address2}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
       personalInformation() {
           return this.$store.getters.getPersonalInfo
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
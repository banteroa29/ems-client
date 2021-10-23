<template>
    <div class=" container">
        <div class="row">
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Company Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="work in workExperiences" :key="work.key">
                        <td>{{work.company_name}}</td>
                        <td>{{work.designation}}</td>
                        <td>{{work.start_date}}</td>
                        <td>{{work.end_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
       workExperiences() {
           return this.$store.getters.getWorkExperience
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
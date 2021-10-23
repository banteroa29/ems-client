<template>
    <div class=" container">
        <div class="row">
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Course</th>
                        <th scope="col">Institution</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="education in educations" :key="education.key">
                        <td>{{education.course}}</td>
                        <td>{{education.institution}}</td>
                        <td>{{education.start_date}}</td>
                        <td>{{education.end_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
       educations() {
           return this.$store.getters.getEducation
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
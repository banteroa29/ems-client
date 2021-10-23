<template>
    <div class=" container">
        <div class="row">
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Relationship</th>
                        <th scope="col">Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{contact.name}}</td>
                        <td>{{contact.relationship}}</td>
                        <td>{{contact.contact_number}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    computed: {
       contact() {
           return this.$store.getters.getEmergencyContact
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
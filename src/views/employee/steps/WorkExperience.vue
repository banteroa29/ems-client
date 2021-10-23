<template>
    <div class="card">
        <div class="card-header">
            <div class="card-title">Education</div>
        </div>
        <div class="card-action">
            <Button >Complete</button>&nbsp;
            <Button @click="emitPrevClicked()">Back</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        
        emitPrevClicked() {
            this.$emit('prev-page',{pageIndex: 3})
        }
    }        
}
</script>
<template>
    <div class="">
        <h2>{{ question }}</h2>
        <input type="text" id="name" name="name">
    </div>
</template>

<script>

export default {
    data() {
    },
    props: {
        question: {
            type: [String],
            required: true
        }
    },
    methods: {
    }
}
</script>

<style>
</style>

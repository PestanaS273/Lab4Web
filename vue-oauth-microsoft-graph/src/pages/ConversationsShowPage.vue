<template>
    <div>
        <h1>Conversation Details</h1>
        <p>Logged-in User ID: {{ userId }}</p>
        <p>Conversation ID: {{ id }}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        userId() {
            return this.$store.state.user.tenanId;
        }
    }
};
</script>
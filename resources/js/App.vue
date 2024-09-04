<template>
    <h1>Welcome page from vue js watch</h1>
</template>>

<script>
export default {
    created: function(){
        var test = this.axios('https://catfact.ninja/fact')
            .then(function(res){
                console.log(res)
            })
    }
}
</script>

<style>

</style>

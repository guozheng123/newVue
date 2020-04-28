<template>
    <div id="content">
        <Header></Header>
        <Aside></Aside>
    </div>
</template>
<script>
import Aside from './aside'
import Header from './header'
export default {
    name: 'Content',
    data () {
        return {

        }
    },
    components: {
        Aside,
        Header
    }
}
</script>
<style>

</style>



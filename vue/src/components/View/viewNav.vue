<template>
    <div id="viewNav">
        <Content>
            <router-view></router-view>
        </Content>
    </div>
</template>
<script>
import Content from '@/common/nav/content'
export default {
    name: 'ViewNav',
    data () {
        return {

        }
    },
    components: {
        Content,
    }
}
</script>
<style>

</style>



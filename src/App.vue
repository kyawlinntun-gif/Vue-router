<template>
    <div>
        <MenuBar />
        <Profile />
    </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import Profile from '@/views/Profile.vue';

export default {
    name: 'App',
    components: {
        MenuBar, Profile
    }
}
</script>
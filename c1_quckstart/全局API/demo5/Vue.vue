<template></template>

<script lang="js">
  import mixin from './mixin';
  export default {
    data(){
      return{
        username: '李四',
        age: 31,
        hasHusband: true
      }
    },
    mounted(){
      console.log('app');
    },
    mixins: [mixin],
    methods:{
      speak(){
        console.log('这是app')
      },
      eat(){
        console.log('吃饭')
      }
    }
  }

</script>
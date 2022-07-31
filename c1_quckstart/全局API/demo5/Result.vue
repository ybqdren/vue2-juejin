<template></template>

<script lang="js">
// mixin 最终得到的结果如下
export default {
  data() {
    return {
      name: '李四', // name为共有属性，最终保留 app.vue 的
      age: 31, // 同上
      hasHusband: true, // app.vue 独有属性，保留
      hasWife: true, // app.vue 没有的属性，会被添加进来
    }
  },
  mounted() {
    // 在钩子函数中的，会被合并到 app.vue 的钩子函数中，minix中的代码会在前面
    console.log('mixin')
    console.log('app')
  },
  methods: {
    // 同名钩子函数将合并为一个数组，而methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
    speak () {
      [
        function() {
          console.log('这是mixin')
        },
        function() {
          console.log('这是app')
        }
      ].forEach(cb => {
        cb()
      })
      console.log('这是app')
    },
    // 自身独有的，保留
    eat() {
      console.log('吃饭')
    },
    // 自身没有的方法，会被添加进来
    cry() {
      console.log('这是cry')
    }
  }
}
</script>
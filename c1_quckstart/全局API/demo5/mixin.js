export default {
    data(){
        return {
            username: '张三',
            age: 30,
            hasWife: true
        }
    },
    mounted(){
        console.log("mixin")
    },
    methods:{
        speak(){
            console.log("这是mixin");
        },
        cry(){
            console.log("这是cry")
        }
    }
}
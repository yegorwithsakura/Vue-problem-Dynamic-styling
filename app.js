const app = Vue.createApp({
    data() {
        return {
            userInput:'', 
            pVisible:true,
            inputUserColor:'',
        }
    },
    methods: {
        toggleParagraphVisibility(){
            this.pVisible = !this.pVisible;
        }
    },
    computed:{
        paraClasses(){
            return{
                visible:this.pVisible,
                hidden:!this.pVisible,
                user1:this.userInput === 'user1',
                user2:this.userInput === 'user2',
            }
        },
        
    },
})


app.mount('#assignment')
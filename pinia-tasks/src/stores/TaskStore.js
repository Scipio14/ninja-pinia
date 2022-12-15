import{defineStore} from 'pinia'

export const useTaskStore = defineStore('tasksStore',{
  state:()=>({
    tasks:[
      {id:1,title:"Buy Milk",isFav:false},
      {id:2,title:"play Gloomheaven",isFav:true}
    ],
  }),
  getters:{
    favs(){
      return this.tasks.filter(t=>t.isFav)
    },
    favCount(){
      return this.tasks.reduce((p,c)=>{
        return c.isFav ? p + 1 : p
      },0)
    },
    totalCount:(state)=>{
      return state.tasks.length
    }
  }
})
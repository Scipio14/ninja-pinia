import{defineStore} from 'pinia'

export const useTaskStore = defineStore('tasksStore',{
  state:()=>({
    tasks:[
      {id:1,title:"Buy Milk",isFav:false},
      {id:2,title:"play Gloomheaven",isFav:true}
    ],
  })
})
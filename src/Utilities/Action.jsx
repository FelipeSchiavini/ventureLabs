export function firstAction(state, payload){
  return{
    ...state,
    data : {
      id: Date.now().toString(36),
      show: false,
      ...state.data,     
      ...payload
    }
}}

export function updateAction(state, payload){
  return{
    ...state,
    data : {
      ...state.data,     
      ...payload
    }
}}

export function finishAction(state, payload){
  return{
    ...state,
    data : {},
    list:[
      ...state.list,
      {
        ...state.data,     
        ...payload
      }
    ]
}}

export function changeAction(state, id){

  return{
    ...state,
    list: state.list.map((item) => item.id === id ? {...item, show: !item.show} : item)
  }
}
INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastname:'sharma',score:100},
    {id:2,firstName:'rahul',lastname:'sharma',score:100},
    {id:3,firstName:'virat',lastname:'sharma',score:100},
    {id:4,firstName:'virat',lastname:'sharma',score:100},
    {id:5,firstName:'virat',lastname:'sharma',score:100},],
    addplayer:[]
};
export const FetchData='FetchData'

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'FetchData':{
            Object.assign({},state,{player:state})
        }
        default:
            return state
    }
}

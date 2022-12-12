import { PackageAdd , PackageById , PackageEdit , PackageGetAll , PackageRemove } from '../actions/actionType';

const initialState = {
  items: [
    {
      id: "id",
      image: "image",
      conutry: "country",
      days: "days",
      numPerson: "numPerson",
      rate: "rate",
      price: "price",
    },
  ],
  isloading : true ,
};

function packageReducer (state = initialState , action ) {
    switch(action.type){
        case PackageGetAll:
            return {...state , items : state.items};
        case PackageById:
            return {...state , items : state.items.find((q)=>q.id===action.payload)}
        case PackageAdd:
            return {...state , items : state.items.concat([action.payload])}
        case PackageEdit:
            return {...state , items : state.items}
        case PackageRemove :
            return { ...state , items : state.items.filter((q)=> q.id !==action.payload)}
        default:
            break               
    }     
    
}

export default packageReducer;


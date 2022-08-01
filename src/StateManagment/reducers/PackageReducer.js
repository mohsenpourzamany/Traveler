import {PackageGetAll,PackageGetById,PackageAdd,PackageEdit,PackageRemove} from '../Actions/ActionType';

const initialState = {
    items:[
        {id:1001 , packageName: "unitedState" , numDays:7 , numPerson:2 , describe:"wonderfull places" , starRate:4.5 , price:350},
        {id:1002 , packageName: "unitedState" , numDays:7 , numPerson:2 , describe:"wonderfull places" , starRate:4.5 , price:350},
        {id:1003 , packageName: "unitedState" , numDays:7 , numPerson:2 , describe:"wonderfull places" , starRate:4.5 , price:350},
        {id:1004 , packageName: "unitedState" , numDays:7 , numPerson:2 , describe:"wonderfull places" , starRate:4.5 , price:350},
        {id:1005 , packageName: "unitedState" , numDays:7 , numPerson:2 , describe:"wonderfull places" , starRate:4.5 , price:350},
        {id:1006 , packageName: "unitedState" , numDays:7 , numPerson:2 , describe:"wonderfull places" , starRate:4.5 , price:350},
    ],
    isLoading:true,
};

function PackageReducer (state=initialState , action) {
    switch (action.type) {
        case PackageGetAll:
           return {...state , items:state.items}; 
        case PackageGetById:
           return {...state , items:state.items.find((q)=>q.id == action.payload)};     
        case PackageAdd:
           return {...state , items:state.items.concat([action.payload])}; 
        case PackageAdd:
           return {...state , items:state.items.filter(q => q.id != action.payload)};    
        default:
           return state;
    }
}

export default PackageReducer;
import produce, { Draft } from 'immer'
import { TweetsActions } from './actionsCreatores/actionsCreators'
import { TweetsActionsType } from './contracts/actionTypes'
import { AddFormState, LoadingState, TweetsState } from './contracts/state'

const initialState : TweetsState = {
  items: [],
  addFormState: AddFormState.NEVER,
  loadingState: LoadingState.NEVER
}

export const tweetsReducer = produce((draft: Draft<TweetsState>, action:TweetsActions) => {
  switch (action.type) {
    case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED
      break;
    case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;
  
    case TweetsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload
      break;
    case TweetsActionsType.SET_ADD_FORM_STATE:
        draft.addFormState = action.payload
        break;
    case TweetsActionsType.FEATCH_ADD_TWEET:
        draft.addFormState = AddFormState.LOADING
        break;
    case TweetsActionsType.ADD_TWEET:
      draft.items.unshift(action.payload)
      draft.addFormState = AddFormState.NEVER
        break;
    default:
      break;
  }
},initialState)
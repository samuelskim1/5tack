// frontend/src/store/games.js
import jwtFetch from './jwt';

// GAME ACTIONS
const RECEIVE_GAME = "games/RECEIVE_GAME";
const RECEIVE_GAMES = "games/RECEIVE_GAMES";
const RECEIVE_GAME_ERRORS = 'games/RECEIVE_GAME_ERRORS';
const CLEAR_GAME_ERRORS = 'games/CLEAR_GAME_ERRORS';

// GAME ACTION CREATORS
export const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
});

export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

const receiveGameErrors = errors => ({
  type: RECEIVE_GAME_ERRORS,
  errors
})

export const clearGameErrors = errors => ({
  type: CLEAR_GAME_ERRORS,
})

// GAME THUNKS
export const fetchGame = nameURL => async dispatch => {
  try {
    const res = await jwtFetch(`/api/games/${nameURL}`);
    const gameInfo = await res.json();
    return dispatch(receiveGame(gameInfo));
  } catch(err) {
    const res = await err.json();
    console.log(res);
    if (res.statusCode >= 400) {
      dispatch(receiveGameErrors(res.errors))
      return res;
    }
  }
};

export const fetchGames = () => async dispatch => {
  try {
    const res = await jwtFetch('/api/games');
    const games = await res.json();
    return dispatch(receiveGames(games));
  } catch(err) {
    const res = await err.json();
    if (res.statusCode >= 400) {
      dispatch(receiveGameErrors(res.errors))
      return res;
    }
  }
};

// GAME REDUCER
const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GAME:
      return { ...state, [action.game.nameURL]: action.game };
      case RECEIVE_GAMES:
      return { ...action.games };
    default:
      return state;
  }
};

export const gameErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_GAME_ERRORS:
      return action.errors;
    case RECEIVE_GAME:
    case RECEIVE_GAMES:
    case CLEAR_GAME_ERRORS:
      return null;
    default:
      return state;
  }
};

export default gamesReducer;

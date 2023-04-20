// frontend/src/store/games.js
import jwtFetch from './jwt';

// GAME ACTIONS
const RECEIVE_GAME = "games/RECEIVE_GAME";
const RECEIVE_GAMES = "games/RECEIVE_GAMES";

// GAME ACTION CREATORS
export const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
});

export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

// GAME THUNKS
export const fetchGame = nameURL => async dispatch => {
  const res = await jwtFetch(`/api/games/${nameURL}`);
  const gameInfo = await res.json();
  console.log("Fetched game data:", gameInfo);
  return dispatch(receiveGame(gameInfo));
};

export const fetchGames = () => async dispatch => {
  const res = await jwtFetch('/api/games');
  const games = await res.json();
  return dispatch(receiveGames(games));
};

// GAME REDUCER
const gamesReducer = (state = {}, action) => {
  console.log("Reducer state:", state);
  console.log("Reducer action:", action);
  switch (action.type) {
    case RECEIVE_GAME:
      return { ...state, [action.game.nameURL]: action.game };
      case RECEIVE_GAMES:
      return { ...action.games };
    default:
      return state;
  }
};

export default gamesReducer;

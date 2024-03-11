import { GamesList } from '../../types';

export function getGames(): Promise<GamesList> {
    return fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json').then(res => res.json())
}
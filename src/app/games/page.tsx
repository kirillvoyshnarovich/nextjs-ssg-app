import { FC, memo } from 'react';
import { getGames } from '../actions/getGames';
import { Game } from '../../types';
import styles from './index.module.css';
import Link from 'next/link';

export default async function GamesPage() {

    const data = await getGames();

    return (
        <div className={styles.main}>
            <div className={styles.column}>
                <h2 className={styles.header}>Game by provider</h2>
                <ul>
                    {
                        data.map((game: Game) => {
                            return (
                                <li key={game.identifier} className={styles.listItem}>
                                    <Link 
                                        key={game.identifier} 
                                        href={`/games/${game.provider}/${game.seo_title}`}
                                    >
                                        <p className={styles.gameTitle}>
                                            <a><strong>Game Title: </strong> {game.title}</a>;
                                        </p>
                                        <a><strong>Provider: </strong>{game.provider}</a>;
                                    </Link>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.column}>
                <h2 className={styles.header}>Game by category</h2>
                <ul>
                    {
                        data.map((game: Game) => {
                            return game.categories.map((category) => {
                                return (
                                    <li key={game.identifier} className={styles.listItem}>
                                        <Link 
                                            key={game.identifier} 
                                            href={`/games/${category}/${game.seo_title}`}
                                        >
                                            <p className={styles.gameTitle}>
                                                <strong>Game Title: </strong> {game.title};
                                            </p>
                                            <strong>Category: </strong> {category};
                                        </Link>
                                    </li>
                                )
                            })
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

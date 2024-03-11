import { getGames } from '../../../actions/getGames';
import { Game, GamesList, GamePageParams } from '../../../../types';
import styles from './index.module.css';
import Image from 'next/image';

export async function generateStaticParams() {
    const games: GamesList = await getGames()
    let params: any  = [];

    games.map((game: Game) => {
        params.push({
            categoryOrProvider: game.provider,
            seo_title: game.seo_title 
        });

        game.categories.map((category) => (
            params.push(
                {
                    categoryOrProvider: category,
                    seo_title: game.seo_title
                }
            )
        ))
    });

    return params;
}

export default async function GamePage({ params: { seo_title, categoryOrProvider } }: GamePageParams) {
    const games: GamesList = await getGames();
    const game: Game | undefined = games.find((item) => item.seo_title === seo_title);

    if(!game) {
        return <div>Not fount!</div>
    }

    return (
        <div className={styles.main}>
            <div className={styles.gameCard}>
                <Image 
                    src={`https://d2norla3tyc4cn.cloudfront.net/i/s3/${game.identifier}.webp`} 
                    alt={game.title} 
                    width={300}
                    height={300}
                />
                <h1 className={styles.gameCard__title}>{game.title}</h1>
                <p className={styles.gameCard__provider}><strong>Провайдер:</strong> {game.provider}</p>
                <p className={styles.gameCard__categories}>
                    <h4 className={styles.gameCard__categories_title}>Категория: </h4>
                    <ul className={styles.gameCard__list}>
                        {
                            game.categories.map((category) => {
                                return <li className={styles.gameCard__list_item} key={category}>{category}</li>
                            })
                        }
                    </ul>
                </p>
            </div>
        </div>
    );
}
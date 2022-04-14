import styles from '../styles/Deck.module.css';
import Trait from './Trait';

let meta = {
    info : "5혁신가 이즈리얼",
    state : "NEW",
    traitList : [
        {
            trait : "Innovation",
            n : 5
        },
        {
            trait : "Rival",
            n : 1
        },
        {
            trait : "Transformer",
            n : 1
        },
        {
            trait : "Scrap",
            n : 4
        },
        {
            trait : "Clockwork",
            n : 2
        },
        {
            trait : "Socialite",
            n : 1
        }
    ],
    championList : [
        {
            champion : "Ezreal",
            cost : 1,
            item : [
                "Last Whisper", "Runaan's Hurricane", "Deathblade"
            ]
        },
        {
            champion : "Blitzcrank",
            cost : 2,
            item : []
        },
        {
            champion : "Zilean",
            cost : 2,
            item : []
        },
        {
            champion : "Ekko",
            cost : 3,
            item : [
                "Morellonomicon", "Frozen Heart"
            ]
        },
        {
            champion : "Orianna",
            cost : 4,
            item : [
                "Banshee's Claw"
            ]
        },
        {
            champion : "Seraphine",
            cost : 4,
            item : []
        },
        {
            champion : "Jayce",
            cost : 5,
            item : [
                "Bramble Vest"
            ]
        },
        {
            champion : "Jinx",
            cost : 5,
            item : [
                "Giant Slayer", "Edge of Night", "Guinsoo's Regeblade"
            ]
        }
    ]
}


const MetaDeck = () => {
    return(
        <div className={styles.deck}>
            <div className={styles.info}>
                <span>
                    5혁신가 이즈리얼
                </span>
                <span>
                    NEW
                </span>
            </div>
            <div className={styles.traits}>
                <Trait name='Innovator' rank='gold'/>
                <Trait name='Scrap' rank='silver'/>
                <Trait name='Innovator' rank='chromatic'/>
                <Trait name='Innovator' rank='darken'/>
            </div>
        </div>
    )
}
export default MetaDeck;

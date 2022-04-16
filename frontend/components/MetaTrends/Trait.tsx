import { Component } from 'react';
import Image from 'next/image';

import styles from '../../styles/Deck.module.css';

type traitProps = {
    name : string,
    rank : string
}

const Trait = (props : traitProps) =>{
    return(
        <div className={styles.trait_hexagon} title = {props.rank}>
            <Image
                src = {require(`../../public/images/trait/6.5/${props.name + '.svg'}`)}
                width = {16}
                height = {16}
                alt = {'innovator'}
            />
        </div>
    )
}

export default Trait;
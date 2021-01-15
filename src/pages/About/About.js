import React from 'react';

import FlowersSVG from '../../components/SVGs/FlowersSVG';
import PianoSVG from '../../components/SVGs/PianoSVG/PianoSVG';

import styles from './About.module.css';

const Home = props => {

    return (
        <div className={styles.AboutPageContainer}>
            <div className={styles.AboutContainer} >
                <FlowersSVG />
                <div className={styles.AboutTextContainer}>
                    <p>Kainatın oluşumundan bu yana matematik ve sanat<br />
            en basit varlıktan en karmaşık varlığa kadar bir<br />
            arada bulunmaktadır.<br /></p>
                    <p>Herhangi bir ağacın düzensiz ama estetik gövdesinden,<br />
            bir böceğin rengarenk kabuğuna kadar her doğal<br />
            belirli bir matematik ve baş döndürücü bir sanat vardır.<br /></p>
                    <p>Bize göre bu matematik ve sanat bahçesinin bahçivanı da<br />
            insandır. Nitekim insan, bu iki değeri kullanarak bir şeyler<br />
            ürettiğinde ortaya hayranlık uyandırıcı eserler çıkmıştır.<br /></p>
                    <p>Amacımız bu iki mucizevi değerin güzelliklerini yazılım<br />
            dünyasına taşımaktır.</p>
                </div>
            </div>
            <PianoSVG />
        </div>
    );
}

export default Home;
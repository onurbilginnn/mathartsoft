import React from 'react';

import styles from './InfoTextsContainer.module.css';

const InfoTextsContainer = props => {
    return (           
            <div className={styles.InfoTextsContainer + " ml-5 mr-5"}>
           
                <div className={styles.FinanceTextContainer}>
                    <h3>Finans</h3>
                    <p>Herhangi bir program yüklemeden, teknik detaylara girmeden<br />
                     sürekli hazırlamak zorunda olduğunuz finansal raporları<br />
                    tek tuşla saniyeler içerisinde Excel formatında oluşturun.<br /><br />
                    Hata yapma riskinizi ve zaman kaybınızı en aza indirerek<br />
                    ihtiyacınız olan raporları doğru ve çabuk bir şekilde hazırlayın;                        
                    <br/> böylece esas hedefiniz olan analize zamanınız kalsın.</p>
              
                </div>
                <div className={styles.InvTextContainer}>
                    <h3>Stok</h3>
                    <p>Basit, anlaşılır ve esnek bir şekilde stoklarınızı<br />
                     takip edebilir, mevcut sisteminize yüklenmeden internet<br />
                    üzerinden envanter kaydınızı veritabanında tutabilirsiniz.
                    <br /><br />
                    Excel formatında yükleme yaparak ve çıktı alarak alışmış<br />olduğunuz
                    kontrol sisteminizi devam ettirmenizi sağlar.</p>
                </div>
            </div>         
    );
}

export default InfoTextsContainer;
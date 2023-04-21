import React from 'react';
import styles from './Footer.module.css';
import InnerWrap from '../../UI/InnerWrap';

const Footer =() => {
    return(
        <div className={styles.FooterWrap}>
            <InnerWrap>
                <p className={styles.title}>Contact ME,</p>
                <div className={styles.FooterMain}>
                    <div className={styles.contact}>
                        <p className={styles.goodbyement}>Thank you for watching,</p>
                        <p>010-5800-2443</p>
                        <p>naehyun25@gamil.com</p>
                        <form>
                            <button type='e-mail'>Send E-mail</button>
                        </form>
                    </div>
                    <div className={styles.remind}>
                        <p className={styles.redirect}>"윤내현" 한번 더 바로가기 </p>
                        <p>깃허브 바로가기</p>
                        <p>노션 바로가기</p>
                        <p>이력서 바로가기</p>
                    </div>
                </div>
            <div className={styles.FooterBottom}>@ 2023. All rights reserved by naehyun25</div>
            </InnerWrap>
        </div>
    )
};
export default Footer;
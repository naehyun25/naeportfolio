import React from 'react';
import styles from './Footer.module.css';
import InnerWrap from '../../UI/InnerWrap';

const Footer =() => {
    return(
        <InnerWrap>
        <div className={styles.FooterIntro}>
            <div className={styles.contact}>
                <p>Contact ME,</p>
                <p>010-5800-2443</p>
                <p>naehyun25@gamil.com</p>
                <form>
                    <button type='e-mail'>메일보내기</button>
                </form>
            </div>



            <div className={styles.remind}>
                <p>깃허브 바로가기</p>
                <p>노션 바로가기</p>
                <p>이력서 바로가기</p>
            </div>
        </div>
        <div>@ 2023. All rights reserved by naehyun25</div>
        </InnerWrap>
    )
};
export default Footer;
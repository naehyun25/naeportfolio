import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import InnerWrap from '../../UI/InnerWrap';
import { ButtonBlue } from '../../UI/Buttons';
import replay from '../../assets/replay-icon.png';
import mail from '../../assets/mail-icon.png';

const Footer =() => {
    return(
        <div id="Contact" className={styles.FooterWrap}>
            <InnerWrap>
                <p className={styles.title}>Contact ME,</p>
                <p className={styles.goodbyement}>Thank you for watching,</p>
                <div className={styles.FooterMain}>
                    <div className={styles.contactWrap}>
                        <div className={styles.contact}>
                            <p>010-5800-2443</p>
                            <p>naehyun25@gamil.com</p>
                        </div>
                        <div className={styles.mailbtn}>
                        
                            <ButtonBlue name="Send E-mail" link="mailto:naehyun25@gamil.com" font="fontEnglish" src={mail}>

                            </ButtonBlue>
                        </div>
                    </div>
                    <div className={styles.remind}>
                        <div className={styles.redirectsWrap}>
                            <p className={styles.redirects}>"윤내현" 다시보기</p>
                            <div className={styles.replaybtn}>
                                <ButtonBlue
                                    name="Replay"
                                    link='#'
                                    src={replay}
                                    font="fontEnglish"
                                />
                            </div>
                        </div>
                        <p><Link to ="/" className={styles.redirect}>GitHub 바로가기</Link></p>
                        <p><Link to ="/" className={styles.redirect}>Notion 바로가기</Link></p>
                        <p><Link to ="/" className={styles.redirect}>이력서 바로가기</Link></p>
                    </div>
                </div>
            <div className={styles.FooterBottom}>@ 2023. All rights reserved by naehyun25</div>
            </InnerWrap>
        </div>
    )
};
export default Footer;
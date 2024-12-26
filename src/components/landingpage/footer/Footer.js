import React from 'react';
import './footer.css';
import Logo from '../../../assets/icon/logo.png';
import facebook from '../../../assets/icon/facebook-icon.svg';
import twitter from '../../../assets/icon/twitter-icon.svg';
import instagram from '../../../assets/icon/instagram-icon.svg';
import AppStore from '../../../assets/icon/appstore.jpg';
import GooglePlay from '../../../assets/icon/googleplay.jpg';

const Datalink = [
    {
        Judul: 'Sitemap',
        Link: [
            {
                nama: 'Beranda',
                situs: 'www.beranda.com'
            },
            {
                nama: 'Fitur',
                situs: 'www.fitur.com'
            },
            {
                nama: 'Harga',
                situs: 'www.Harga.com'
            },
            {
                nama: 'Testimoni',
                situs: 'www.Testimoni.com'
            },
            {
                nama: 'Download',
                situs: 'www.Download.com'
            }
        ]
    },
    {
        Judul: 'Partner',
        Link: [
            {
                nama: 'Sefan.ru',
                situs: 'www.sefan-ru.com'
            },
            {
                nama: 'Ganool',
                situs: 'www.ganool.com'
            },
            {
                nama: 'Waptrick',
                situs: 'www.waptrick.com'
            },
            {
                nama: 'Stafaband',
                situs: 'www.stafaband.com'
            },
            {
                nama: 'MyWapBlog',
                situs: 'www.mywapblog.com'
            }
            ,
            {
                nama: 'Friv',
                situs: 'www.Friv.com'
            }
        ]
    }
]

const LinkComponent = ({Judul, Link}) => {
    return (
        <ul className='Footer_link-wrapper'>    
            <h2>{Judul}</h2>
                {
                    Link.map(({nama, situs}) => (
                        <li>
                            <a href={situs}>{nama}</a>
                        </li>
                    ))
                }
        </ul>
    )
}

const Footer = () => {
    return (
        <div className='main_content-footer'>
            <div className='main_content-footer-top'>
                <h2>Download Aplikasi Keren Ini Sekarang!</h2>
                <p>Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.</p>
                <div>
                    <a href='www.appstore.com'><img src={AppStore} alt='appstore'/></a>
                    <a href='www.googleplay.com'><img src={GooglePlay} alt='googleplay'/></a>
                </div>
            </div>
            <div className='main_content-footer-bottom'>
                <div>
                    <img src={Logo} alt='logo'/>
                    <p>
                        Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal, makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.
                    </p>
                    <p>COPYRIGHT &copy; 2021. DESIGN BY NAUVAL CODE BY ORLANDO</p>
                </div>
                <div>
                    {
                        Datalink.map((item) =>
                            <LinkComponent {...item} />
                        )
                    }
                </div>
                <div>
                    <h2>Tetep Terhubung</h2>
                    <p>Lihat kami pansos di sosial media berikut:</p>
                    <ul>
                        <li>
                            <a href='www.instagram.com'><img src={instagram} alt='instagram'/></a> 
                        </li>
                        <li>
                            <a href='www.facebook.com'><img src={facebook} alt='facebook'/></a> 
                        </li>
                        <li>
                            <a href='www.twitter.com'><img src={twitter} alt='twitter'/></a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
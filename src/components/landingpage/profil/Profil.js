import React from "react";
import './profile.css';
import icon1 from '../../../assets/icon/icon1.svg'
import icon2 from '../../../assets/icon/icon2.svg'
import icon3 from '../../../assets/icon/icon3.svg'
import icon4 from '../../../assets/icon/icon4.svg'

const data = [
    {
        icon: icon1,
        title: 'Aplikasi Gratis',
        description: 'Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.' 
    },
    {
        icon: icon2,
        title: 'Kode OTP Error',
        description: 'Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.'
    },
    {
        icon: icon3,
        title: 'Data Tidak Aman',
        description: 'Data tidak disimpan dengan bnaik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.'
    },
    {
        icon: icon4,
        title: 'Biasanya Error',
        description: 'Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~'
    }
]

const ProfilCard = ({icon, title, description}) => {
    return (
        <div className='card-item'>
            <div className='card-item_title'>
                    <img src={icon} title={title} alt={title}/>
                    <h4>
                        {title}
                    </h4>
            </div>
            <div className='card-item_description'>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

const Profil = () => {
    return (
        <div className="main_content-profile wrapper">
            <div className="left_content">
                <h2>
                    Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren ini?
                </h2>
                <p>
                    Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
                </p>
                <div className='count'>
                    <span>
                        <p>TOTAL DON'TLOUD</p>
                        <h4>
                            1,501,234
                        </h4>
                    </span>
                    <span>
                        <p>TOTAL USERS</p>
                        <h4>
                            1,318,829
                        </h4>
                    </span>
                </div>

            </div>
            <div className="right_content">
                {
                    data.map((item)=> 
                        <ProfilCard {...item}/>
                )}
            </div>
        </div>
    )
}

export default Profil;
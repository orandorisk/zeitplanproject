import React from "react";
import './feature.css';
import iconSmartphone from '../../../assets/icon/icon_smartphone.svg';
import iconDump from '../../../assets/icon/icon_dump.svg';
import iconCamera from '../../../assets/icon/icon_camera.svg';
import iconCloud from '../../../assets/icon/icon_cloud.svg';
import iconBell from '../../../assets/icon/icon_bell.svg';

const data = [
    {
        icon: iconCloud,
        title: 'Tidak Tersimpan Otomatis',
        description: 'Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.' 
    },
    {
        icon: iconCamera,
        title: 'Si Rizal Gak Pernah Ngonten',
        description: 'Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.'
    },
    {
        icon: iconDump,
        title: 'Terhapus Otomatis',
        description: 'Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.'
    },
    {
        icon: iconBell,
        title: 'Nggak Tau Lagi Gw',
        description: 'Mikir teks buat konten susah bro, ini aja ngasal masih susah!'
    }
]

const FeatureCard = ({icon, title, description}) => {
    return (
        <div className='card_item-feature'>
            <img src={icon} alt={title} title='title' className='feature-icon'/>
            <h4>
                {title}
            </h4>
            <p>
                {description}
            </p>
        </div>
    )
}

const Feature = () => {
    return (
        <div className='main_content-feature wrapper'>
            <div className='left_content-feature'>
                <img src={iconSmartphone} title="smarphoneicon" alt="smartphone"/>
            </div>
            <div className='right_content-feature'>
                <h2>
                    Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~
                </h2>
                <p>
                    Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun uhntuk bolos matkul dosen (HAHA MAMPUS). Lagian lo kuliah tapi jarang masuk, titip absen doang!
                </p>
                <div className='card-wrapper'>
                    {
                        data.map((item) =>
                            <FeatureCard {...item}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Feature;
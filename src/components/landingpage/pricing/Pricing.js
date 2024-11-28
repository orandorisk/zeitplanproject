import React from 'react';
import './pricing.css';
import PriceIcon from '../../../assets/icon/icon_pricing.svg';

const data = [
    {
        title: 'RINDURATU',
        price: 'Free',
        description: 'Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.',
        list: [
            'Jadwal Tak Terbatas',
            'Fitur Notifikasi (Kadang Telat)',
            'Mode Gelap',
            'Bisa Topup Pulsa',
            'Bisa Beli Token Listrik',
            'Data Lo Dijual'
        ],
        status: 'Download'
    },
    {
        title: 'SULTAN',
        price: 'Rp 100K',
        description: 'Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.',
        list: [
            'Semua Fitur Sebelumnya',
            'Diingetin Makan',
            'Sleepcall Sampe Bobo',
            'Ditemenin Jalan Tiap Minggu',
            'Ditemenin Nonton Eksekswan',
            'Terhindar Razia Rambut',
            'Dapet Izin Bikin Ormas'
        ],
        status: 'Download'
    },
    {
        title: 'RAFATHAR',
        price: 'Rp 10000K',
        description: 'Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.',
        list: [
            'Semua Fitur Sebelumnya',
            'Dibayarin Kuliah 4 Semester',
            'Dibayarin Cicilan Motor',
            'Dicicilin KPR 12 Tahun',
            'Magang di NASA Cab. Depok',
            'Dapet Skin Alok',
            'Nonton Film Gratis di Ganool',
            'Naik Haji Bila Mampu'
        ],
        status: 'Download'
    }
]

const PricingCard = ({title, price, description, list, status}) => {
    return (
        <div className='pricing_card'>
            <h3>{title}</h3>
            <h2>{price}</h2>
            <span>{description}</span>
            <ul className='list_wrapper'>
                {
                    list.map((item, index) => (
                        <li key={index} className='list_wrapper-item'>
                           <img src={PriceIcon} alt='icon'/> <p>{item}</p>
                        </li>
                    ))
                }
            </ul>
            <a href="#download" alt="Download" className="btn btn-primary">{status}</a>
        </div>
    )
}

const Pricing = () => {
    return (
        <div className='main_content-pricing wrapper'>
            <div className='pricing_top-wrapper'>
                <h2>Main catur sambil bersepeda, beda harga beda fitur</h2>
                <p>Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!</p>
            </div>
            <div className='pricing_card-wrapper'>
                {
                    data.map((item) =>
                        <PricingCard {...item}/>
                    )
                }
            </div>
            <div className='pricing_bottom-wrapper'>
                <p>
                    <span>Harap Diingat:</span> Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa derbubah secara mendadak seperti pengunguman PPKM darurat.
                </p>
            </div>
        </div>
    )
}

export default Pricing;
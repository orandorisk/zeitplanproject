import React from 'react';
import './testimoni.css';
import ProfilePic1 from '../../../assets/icon/profilePic1.jpg';
import ProfilePic2 from '../../../assets/icon/profilePic2.jpg';
import ProfilePic3 from '../../../assets/icon/profilePic3.jpg';
import ProfilePic4 from '../../../assets/icon/profilePic4.jpg';
import ProfilePic5 from '../../../assets/icon/profilePic5.jpg';
import ProfilePic6 from '../../../assets/icon/profilePic6.jpg';
import { FaStar } from "react-icons/fa";

const data = [
    {   
        stars: 5,
        description: '“Terima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! 👈😎👉”',
        profilePic: ProfilePic1,
        sender: "Sanusi Sulivan",
        title: 'Dosen di Boating School Ny.Puff'
    },
    {
        stars: 1,
        description: '“Gara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.”',
        profilePic: ProfilePic2,
        sender: "Wahyu Hayuk",
        title: 'Mahasiswa Abadi'
    },
    {
        stars: 5,
        description: '“Hanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!”',
        profilePic: ProfilePic3,
        sender: "Ibu Scarlet Darkening",
        title: 'Ibunya Wahyu Hayuk'
    },
    {
        stars: 3,
        description: '“Aq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkx”',
        profilePic: ProfilePic4,
        sender: "Indah Cyank Dya Clmax",
        title: 'Works at Looking For True Love, Inc'
    },
    {
        stars: 1,
        description: '“Pengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... 😀😀😀😀😀”',
        profilePic: ProfilePic5,
        sender: "Jumadi RT. 03",
        title: 'Ketua RT. 06'
    },
    {
        stars: 5,
        description: '“aplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.”',
        profilePic: ProfilePic6,
        sender: "Cucunya Megalodon",
        title: 'Pecinta Kucing Hungaria'
    },
]

const TestimoniCard = ({stars, description, profilePic, sender, title}) => {
    return (
        <div className='testimoni_card'>
            <ul className='stars_wrapper'>
                <li>
                    {[...Array(5)].map((_, index) => (
                        <FaStar 
                            key={index}
                            color={index < stars ? "gold" : "gray"}
                            size={20}
                            style={{ marginRight: "5px"}}
                        />
                    ))}
                </li>
            </ul>
            <p>{description}</p>
            <div className='profile_testimoni-wrapper'>
                <span className='testimoni_pic-wrapper'>
                    <img src={profilePic} alt={sender}/>            
                </span>
                <span className='span_profile-wrapper'>
                    <h3>{sender}</h3>
                    <span>{title}</span>
                </span>
            </div>
        </div>
    )
}

const Testimoni = () => {
    return (
        <div className='main_content-testimoni wrapper'>
            <div className='testimoni_top-wrapper'>
                <h2>Apa kata umat manusia tentang aplikasi keren ini?</h2>
                <p>Kami tidak memfilter semua review, males soalnya. Jadi semua yang dtampilkan di sini semuanya asli tanpa reksadana.</p>
            </div>
            <div className='testimoni_card-wrapper'>
                {
                    data.map((item) =>
                        <TestimoniCard {...item}/>
                    )
                }
            </div>
        </div>
    )
}

export default Testimoni;
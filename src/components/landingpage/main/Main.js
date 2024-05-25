import React from 'react';
import Navbar from '../navbar/Navbar';
import './main.css';

import Star from "../../../assets/icon/star.svg";
import Testimoni from '../../../assets/icon/testimoni-one.jpg';
import ArrowRight from '../../../assets/icon/arrow-right.svg';
import ArrowLeft from '../../../assets/icon/arrow-left.svg';

const CardReview = () => {
    return (
        <div class="card">
            <div class="star-group">
                <span>
                    <img src={Star} alt="star"/>
                </span>
                <span>
                    <img src={Star} alt="star"/>
                </span>
                <span>
                    <img src={Star} alt="star"/>
                </span>
                <span>
                    <img src={Star} alt="star"/>
                </span>
                <span>
                    <img src={Star} alt="star"/>
                </span>
            </div>
            <p>
                “Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”
            </p>
            <div class="testimoni">
                <span>
                    <img src={Testimoni} alt="orlando" />
                </span>
                <span>
                    <h3>P-Star 7</h3>
                    <p>Mahasiswa Boating School Ny. Puff</p>
                </span>
                <button class="button_arrow-left"><img src={ArrowLeft} alt='arrow-left'/></button>
                <button class="button_arrow-right"><img src={ArrowRight} alt='arrow-left'/></button>
            </div>
        </div>
    )
}

const Main = () => {
    return (
        <div class='main wrapper'>
            <Navbar />
            <div class="main_content">
                <div class="main_content-left">
                    <h1>
                        Sebuah cara mudah mengatur jadwal kuliah kamu
                    </h1>
                    <p>
                    Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~
                    </p>
                    <div class="main_content-left-button">
                        <a href="#Learn-More" alt="Learn More" class="btn btn-primary">Learn More</a>
                        <a href="#Play-Demo" alt="Play Demo" class="btn btn-primary">Play Demo</a>
                    </div>
                    <CardReview />
                </div>
                <div class="main_content-right">

                </div>
            </div>
        </div>
    )
}

export default Main;
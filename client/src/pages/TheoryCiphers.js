//import React from "react";
import NavBar from "../components/NavBar";
import '../assets/theory_ciphers.css'
import {observer} from "mobx-react-lite"
//import '../components/ciphers'

const Ciphers = observer(() => {
    function mainnnn() {
        document.addEventListener('DOMContentLoaded', function() {
                console.log('DOM загружен');
                const tabNav = document.querySelectorAll('.main__btn_tab'),
                tabContent = document.querySelectorAll('.tab'),
                btn = document.querySelector('.main__btn_continue');
                console.log(tabNav)
                tabNav.forEach((item/*, key*/) => {
                    item.addEventListener('click', () => {
                        console.log(item)
                        //if (item.target.classList.contains('is-active')){
                            //checkSelectBtn(key);
                            //selectTabContent(key);
                            //checkTabs();
                            console.log('click')
                    // }
                    });
                    
                });
            })
    }
    
/*
    function checkSelectBtn(key) {
        tabNav.forEach((btn, index) => {
            key === index ? btn.classList.add('is-active', 'checked') : btn.classList.remove('is-active');
        })
    }

    function selectTabContent(key) {
        tabContent.forEach((item, index) => {
            key === index ? item.classList.add('is-active', 'checked') : item.classList.remove('is-active');
        });
    }

    function checkTabs() {
        const checked = document.querySelectorAll('.main__btn_tab.checked').length;
       // tabNav.length === checked ? btn.disabled = false : '';
    }*/
    return (
        <div>
            <NavBar />
            <div className="box">
                <nav className="main__nav">
                    <ul>
                        <li><button className="main__btn_tab is-active">А</button></li>
                        <li><button className="main__btn_tab is-active">Б</button></li>
                        <li><button className="main__btn_tab">В</button></li>
                        <li><button className="main__btn_tab">Г</button></li>
                        <li><button className="main__btn_tab">Д</button></li>
                        <li><button className="main__btn_tab">Е</button></li>
                        <li><button className="main__btn_tab">Ё</button></li>
                        <li><button className="main__btn_tab">Ж</button></li>
                        <li><button className="main__btn_tab">З</button></li>
                        <li><button className="main__btn_tab">И</button></li>
                        <li><button className="main__btn_tab">Й</button></li>
                        <li><button className="main__btn_tab">К</button></li>
                        <li><button className="main__btn_tab">Л</button></li>
                        <li><button className="main__btn_tab">М</button></li>
                        <li><button className="main__btn_tab">Н</button></li>
                        <li><button className="main__btn_tab">О</button></li>
                        <li><button className="main__btn_tab is-active">П</button></li>
                        <li><button className="main__btn_tab is-active">Р</button></li>
                        <li><button className="main__btn_tab is-active">С</button></li>
                        <li><button className="main__btn_tab">Т</button></li>
                        <li><button className="main__btn_tab">У</button></li>
                        <li><button className="main__btn_tab">Ф</button></li>
                        <li><button className="main__btn_tab">Х</button></li>
                        <li><button className="main__btn_tab">Ц</button></li>
                        <li><button className="main__btn_tab">Ч</button></li>
                        <li><button className="main__btn_tab is-active">Ш</button></li>
                        <li><button className="main__btn_tab">Щ</button></li>
                        <li><button className="main__btn_tab">Э</button></li>
                        <li><button className="main__btn_tab">Ю</button></li>
                        <li><button className="main__btn_tab">Я</button></li>
                    </ul>
                </nav>
                <div className="main__questions">
                    <section className="tab is-active">
                        <h1 className="main__question_title">Асимметричные шифры</h1>
                        <p className="main__btn_answer">Способ шифрования данных, при котором информация шифруется одним ключом, а расшифровывается другим.</p>
                        <div className="asim_ciphers_img"></div>
                    </section>
                    <section className="tab">
                        <h1 className="main__question_title">Блочный шифр</h1>
                        <p className="main__btn_answer">Симметричный шифр, который используется для шифрования целого блока данных за один раз.</p>
                    </section>
                    <section className="tab">
                        <h1 className="main__question_title">Поточный шифр</h1>
                        <p className="main__btn_answer">Симметричный шифр, в котором каждый символ открытого текста преобразуется в символ шифрованного текста в зависимости не только от используемого ключа, но и от его расположения в потоке открытого текста.</p>
                    </section>
                    <section className="tab">
                        <h1 className="main__question_title">Симметричные шифры</h1>
                        <p className="main__btn_answer">Cпособ шифрования данных, при котором один и тот же ключ используется и для кодирования, и для восстановления информации.</p>
                        <div className="sim_ciphers_img"></div>
                    </section>
                    <section className="tab">
                        <h1 className="main__question_title">Шифрование</h1>
                        <p className="main__btn_answer">Процесс преобразования открытого текста в зашифрованный текст с использованием ключа.</p>
                    </section>
                    <section className="tab">
                        <h1 className="main__question_title">Шифры</h1>
                        <p className="main__btn_answer">Cпециальные алгоритмы, которые применяются для защиты информации путем ее шифрования. Шифры могут быть разделены на несколько типов в зависимости от способа работы и принципов использования ключей.</p>
                    </section>
                </div>
            </div>
            <button className="main__btn_continue" disabled>Продолжить</button>
            {mainnnn}
        </div>
    );
});

export default Ciphers;
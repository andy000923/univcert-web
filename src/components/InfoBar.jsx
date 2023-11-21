import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './InfoBar.css';

const InfoBar = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(null);

    const setActiveItemHandler = (index) => {
        setActiveItem(index);
    };

    useEffect(() => {
        const paths = {
            "/instruction": 0,
            "/instruction1": 1,
            "/instruction2": 2,
            "/instruction3": 3,
            "/instruction4": 4,
            "/instruction5": 5,
            "/instruction6": 6,
        };

        const index = paths[location.pathname];

        if (index !== undefined) {
            setActiveItemHandler(index);
        }
    }, [location.pathname]);

    return (
        <div>
            <div className='MainLeftBar'>
                <ul>
                    <Link to='/instruction'>
                        <ul className={`div3 ${activeItem === 0 && 'clicked3'}`} onClick={() => setActiveItemHandler(0)}>
                            빠른 시작
                        </ul>
                    </Link>
                    <ul id='logo'>
                        <h4>주요</h4>
                    </ul>
                    <Link to='/instruction1'>
                        <ul className={`div3 ${activeItem === 1 && 'clicked3'}`} onClick={() => setActiveItemHandler(1)}>
                            이용자 메일 인증 시작
                        </ul>
                    </Link>
                    <Link to='/instruction2'>
                        <ul className={`div3 ${activeItem === 2 && 'clicked3'}`} onClick={() => setActiveItemHandler(2)}>
                            발송된 인증 코드 입력
                        </ul>
                    </Link>
                    <ul id='logo'>
                        <h4>이외 기능</h4>
                    </ul>
                    <Link to='/instruction3'>
                        <ul className={`div3 ${activeItem === 3 && 'clicked3'}`} onClick={() => setActiveItemHandler(3)}>
                            인증된 이메일인지 확인
                        </ul>
                    </Link>
                    <Link to='/instruction4'>
                        <ul className={`div3 ${activeItem === 4 && 'clicked3'}`} onClick={() => setActiveItemHandler(4)}>
                            인증된 유저리스트 출력
                        </ul>
                    </Link>
                    <Link to='/instruction5'>
                        <ul className={`div3 ${activeItem === 5 && 'clicked3'}`} onClick={() => setActiveItemHandler(5)}>
                            대학명 체크
                        </ul>
                    </Link>
                    <Link to='/instruction6'>
                        <ul className={`div3 ${activeItem === 6 && 'clicked3'}`} onClick={() => setActiveItemHandler(6)}>
                            인증된 유저 목록 초기화
                        </ul>
                    </Link>
                    <Link to='/instruction7'>
                        <ul className={`div3 ${activeItem === 7 && 'clicked3'}`} onClick={() => setActiveItemHandler(7)}>
                            인증된 특정 유저 초기화
                        </ul>
                    </Link>
                    <a href="https://incredible-raincoat-c52.notion.site/cdb55dd7ea5b475eaaf94ce76fa9eba4">
                        <ul className="div3">인증 가능 대학 명단</ul>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default InfoBar;

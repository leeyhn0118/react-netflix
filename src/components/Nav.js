import React, { useState, useEffect } from 'react'
import "./Nav.css"
import { useNavigate } from 'react-router-dom'

export default function Nav() {
    const [show, setShow] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log('scroll: ')
            if (window.scrollY > 50) {
                setShow(true)
            } else {
                setShow(false)
            }
        })

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, [])

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt='Netflix logo'
                src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
                className='nav_logo'
                onClick={() => window.location.href = "/react-netflix"}
            />

            <input
                value={searchValue}
                onChange={handleChange}
                className='nav_input'
                type='text'
                placeholder='영화를 검색해주세요.'
            />

            <img
                alt='User logged'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                className='nav_avatar'
            />
        </nav>
    )
}

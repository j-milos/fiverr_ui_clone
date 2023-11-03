import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import s from "./Navbar.module.scss"

function Navbar() {
    const[active,setActive]=useState(false);
    const[open,setOpen]=useState(false);

    const{pathname} = useLocation()

    const isActice = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll",isActice);

        return()=>{
            window.removeEventListener("scroll",isActice);
        }
    },[])

    const currentUser ={
        id:1,
        username:"John Doe",
        isSeller:true
    }

  return (
    <div className={active || pathname!=="/" ? `${s.navbar} ${s.active}`: s.navbar}>
        <div className={s.container}>
            <div className={s.logo}>
                <Link to="/" className="link">
                <span className={s.text}>fiverr</span>
                </Link>
                <span className={s.dot}>.</span>
            </div>
            <div className={s.links}>
                <span>Business solutions</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign in</span>
                {!currentUser ?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className={s.user} onClick={()=>setOpen(!open)}>
                        <img src="https://static.vecteezy.com/system/resources/previews/001/883/456/original/young-man-handsome-with-laptop-isolated-icon-free-vector.jpg" alt=""/>
                        <span>{currentUser?.username}</span>
                        {open && <div className={s.options}>
                            {
                                currentUser?.isSeller &&(
                                    <>
                                    <Link className="link" to="/mygigs">Gigs</Link>
                                    <Link className="link" to="/add">Add New Gig</Link>
                                    </>
                                )
                            }
                            <Link className="link" to="/orders">Orders</Link>
                            <Link className="link" to="/messages">Messages</Link>
                            <Link className="link" to="/">Log Out</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
        {(active ||  pathname!=="/") &&(
        <>
        <hr/>
        <div className={s.menu}>
            <Link className='link' to="/">
            Graphics & Design
            </Link>
            <Link className='link' to="/">
            Video and Animation
            </Link>
            <Link className='link' to="/">
            Writing & Translation
            </Link>
            <Link className='link' to="/">
            AI Services
            </Link>
            <Link className='link' to="/">
            Digital Marketing
            </Link>
            <Link className='link' to="/">
            Music & Audio
            </Link>
            <Link className='link' to="/">
            Proggraming & Tech
            </Link>
            <Link className='link' to="/">
            Business
            </Link>
            <Link className='link' to="/">
            Lifestyle
            </Link>
        </div>
        </>
        )}
    </div>
  )
}

export default Navbar
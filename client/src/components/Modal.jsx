import React, { useCallback, useEffect, useRef, useState } from 'react'
import classes from '../css/Modal.module.css'

export const Modal = ({ activeModal, setActiveModal }) => {
    const [isLogin, setIsLogin] = useState(true)

    const handleLoginAndRegister = () => {
        setIsLogin(prev => !prev)
    }

    // Close Modal if clicking outside of it
    const modalRef = useRef()
    const closeModal = e => {
        if (modalRef.current === e.target) {
            setActiveModal(false)
        }
    }

    // Close Modal when click "ESC" key
    const escPress = useCallback(e => {
        if (e.key === 'Escape' && activeModal) {
            setActiveModal(false)
        }
    }, [setActiveModal, activeModal])

    useEffect(() => {
        document.addEventListener('keydown', escPress)
        return () => document.removeEventListener('keydown', escPress)
    }, [escPress])

    {/* Will Replace to UI template for Login/Register */ }
    return (
        <>
            {activeModal ? (
                <div ref={modalRef} onClick={closeModal} className={classes.modalBackground}>
                    <div activeModal={activeModal} className={classes.wrapper}>
                        {isLogin ? (
                            <>
                                <div className={classes.modalContentL}>
                                    Doesn't have an account?
                                    <span className={classes.checkStatus} onClick={handleLoginAndRegister}>register now</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={classes.modalContentL}>
                                    Already a User?
                                    <span className={classes.checkStatus} onClick={handleLoginAndRegister}>Login</span>
                                </div>
                            </>
                        )}

                        <div className={classes.modalContentR}>
                            {isLogin ? (
                                <>
                                    <h1>@ISRHOTEL</h1>
                                    <div>
                                        <form className={classes.formContent}>
                                            <label for="">Email</label>
                                            <input placeholder='email' />
                                            <label for="">Password</label>
                                            <input placeholder='password' type="password" />
                                            <button onSubmit={{}}>Login</button>
                                        </form>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h1>@ISRHOTEL</h1>
                                    <div>
                                        <form className={classes.formContent}>
                                            <label for="">Username</label>
                                            <input placeholder='username' />
                                            <label for="">Email</label>
                                            <input placeholder='email' type="email" />
                                            <label for="">Password</label>
                                            <input placeholder='password' type="password" />
                                            <label for="">Confirm Password</label>
                                            <input placeholder='password' type="password" />
                                            <button onSubmit={{}}>Register</button>
                                        </form>
                                    </div>
                                </>
                            )}
                        </div>
                        <button className={classes.closeModal} onClick={() => setActiveModal(prev => !prev)} aria-label='Close'>&#10005;</button>
                    </div>
                </div>
            ) : (
                null
            )}
        </>
    )
}
import React from 'react'
import './style.css'

const Head = () => {
    return (
        <div className='container-fluid'>
            <nav className='nav-bar'>
                <div className="row">

                    <div className="col-sm-4 ">
                        <p className='h1 ms-4'>
                            HODLINFO <span className='h6 text-light'>.com</span>
                        </p>
                        <p className='text-muted ms-4'>
                            Power By <span className='finstreet'>Finstreet</span>
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className='col-sm-6'>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-dark col-3 float-end mt-4 inr">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-light fw-bold rounded " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            INR
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-sm-6'>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-dark col-3 mt-4 inr">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle text-light fw-bold rounded " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            BTC
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-4 mt-4">
                        <div className="row">
                            <div className='col-sm-4'>
                                <div className=' rounded_number col-2 mt-1'>
                                    58
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <button className='btn telegram_button fw-bold text-light'>
                                    Connect Telegram
                                </button>
                            </div>
                            <div className='col-sm-4'>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Head
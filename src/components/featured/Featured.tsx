import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import s from "./Featured.module.scss"


function Featured() {
  return (
    <div className={s.featured}>
        <div className={s.container}>
            <div className={s.left}>
                <h1>
                Find the right <i>freelance</i> service, right away
                </h1>
                <div className={s.search}>
                    <div className={s.searchInput}>
                        <input type='text' placeholder='Search for any service...'/>
                    </div>
                    <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={s.popular}>
                    <span>Popular:</span>
                    <button>Website Design</button>
                    <button>WordPress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className={s.right}>
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured
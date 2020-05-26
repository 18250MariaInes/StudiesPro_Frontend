import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import './styles.css';
import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';


const addcourse = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-course'>
            <button className='addcourse-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFCklEQVRoge2ZXWyTZRTHf+d528IUhhczKoIfoMEF9IIZbrignUxjNGGgbSdEg5kpAUwwhg9jTOyVTgghxhthkIAfsVszYU4jycZWpjExuhtx4wKXKBBIyIxuhAGjz3u86IplVNbRslXS/037Pu/5+r/nOc8nlFDCLYFkPvg9dX5R3QvMz1G/H3Hru5Lxo/kEUQi/JvPtBI0BzBdM4wTks6IQfs1YgYkGocqjE9XJgrz9jiXyv0WJSLGhRKTY4MnWKCJLO5OxH26kGPCElqLyfSGDycdvViIudtxMGYxx0X8dOHXPge4G7h8/ZAA9LUik0zZ9m4/fNLJnRM13ASd8Q4OujjXmfgySIwkAmaOwG3ggP78pFLBGZM5NKM0tlPfbpthLRIoNJSLFhqzDbz6Yqsm04BnJdVIrtN/CZySPSS0f3DY1UiJSbCgRKTYUfNTKE2cQPkflqGPtsTIuDQBcZHpF0jFPILpMVFYDs8cqFgkRPauw9by9q6mHPVeyCJzEchL4uorI2+XO4EugDZkCRUHEsVrZQXwwSNBX7oRCYGoRXYyS2uMIp1F6QFsr7F+H4jb+yXKCrZk2pprIHoAO4oMBJ7xqAHYA80C5ZjerLAAWgKwecKS/mrotHTZ2MNPQVBZ7S4V1N0SJmoAnvB1oAeah/ILKJmPdhV7rm+G1vhk4ZpEqb4hyDJiv6JfVnlBDlOjV+KcoI3rOZzUSJ24HPGY7yhbgsiqb/G5lY5Soe434CL1Ab5ToR93m+DoVdqnKtm5PHyR5C8ZcKwScsMLEV7BdtknSujnRQNcmbPOBgBNeRSoTlxH3mVyvJ0avIQ4D0xRdmbDNh7J2rVu7gtVzd1v9IkjQR6omUGVTLiSWE5wVcMKvJJKxBMqbAILsqCLiLeBxUI4Q+SxO80jACYUYrQm/W9mYGEetiog36fwdF6gJmNC9Fa67c8CY9QiLZjpDKya92GW0OwqyMvXL3utqIgvKncEPBakBBsSVljhxK7AvZUNrJ/3I1LX2GIAKi1EQ1z0ynk7AhLYC64GLGHm+08b6AdRj2rEuCE8W7Mg0jVw+AgDKfQCXuHwq3VTtqYtK0jYfId53lYQTegHkfcAFfbnrStOP6XcjIxdO+pwyUGYXvEZy+QjZUO2Eg6r6rjpms5/QxoRtPlDtDS5RVz4FDKrbutzmlv/Sn/Strlp5OEHsd4SzKDOnM20u0HenHf7mgnPHfoW1guwPOOEadVkOlIE0drlN28fa8vrKHsQCwplJL3bjaCUAys8A1pgagDbahjtt06uKrgUuAGuAexRtH7LlG7PZkqTUAIjKT5NOREVrRv+1Ahioz1xqJGzzAWPdJSi9KL0eq8FsK+IgQQe0HsCF1slfa6m8WEXEW2H1ENCvwuPd5vi6TJEjxPtmuMNLPK483UF8MJuZP1NzyEIRTpy35dcR+e0mQhsddfR0jvJzZzlDdXHiI4JsAVBhl99T588UaqNtuJ3YmWwGnvKEAirsBFRVNvew58q1RMR9jYmROaViIgCCRHIlo2jDs6wp77SxgyL6ATBNVA8HTHhDqstkR5CgU23Cr7sqhwEfIg1dNvZVyv8UI0rUdHv63lOVbQAovwrsU49p15HkHwD4zEOpwtZ6hIWAItKwLPnYO+lVwZQTScPvhGoF2QE8ciM5EU6oyuZ0Jq6239LoJogqIt6ZztAKQWsRqtJbXRFOodLjQut5W96abRT7By/FLyxRBHz2AAAAAElFTkSuQmCC"></img>
               
            
            </button>
        </Link>
      )
    }
  </Fragment>
);


export default connect(
  state => ({
    //isHidden: !selectors.isAuthenticated(state),
  }),
  dispatch => ({
    onClick() {
      dispatch(<Redirect to='/Home' />);
    },
  })
)(addcourse);
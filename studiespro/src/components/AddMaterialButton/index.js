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


const addmaterial = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-material'>
            <button className='addmaterial-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEzklEQVRoge2ZbWxTZRTHf+e2dsMR+YJBR2+JYUZRwKBGRPxAjCRmkmCMTF4kAbZbTRRCBKPriNwIbUEIISCGrEOjMWA2v0CMRBMTP8mLCcowKobwsraKGI0ShHZr7/HDButKB/aW3Grc/0t7z3PO/zn/3Nt7znkquIEiZjy8BXQZcIsrjmJG6DbEWXqmddfX5QT63ewW3GA9BboS6FTllBuOQhiGGKq6QNV4B5hWTqwrAShTAJINfyykqSvviqMIZszKKkTKjTPcbGao9Mc1deXNeMsCM2Z1DybS8rYZtXYMXoePmVFrPoC5LjzRjFlpc114IkBhrKjk3eTjSkAhxDHugv47MmCZhHDP4LVOFuRuAPU7JlA/8Fkitny4e4QKoIZzHJXuQQPfFbkcU/QHAMkZSXyalpyRLBnrFULRsG3GLP03cFb8CFUbIwKqjREB1UbFr9FQ1GpSYTfgc0lxLBlJTHW7f8UC8n790sgRUyTgjqGyOlCxgPSrHSng9Up53KJiAZUgGAtPN9BFis5QdBKAGbNOKXyLyN7abE3nCXv7+WtxVEVAcN3zd4ovvw30CYWLgnwBHAAuKTpOkBmoJrKBzJtm3FqTzI7fiW07pbg8FxCKW4+rOl2o5ARW5vok8ZPdfrHYb0K8eZqDEUXZYQbSs2q2LV98YsX2bLGfpwKC65sfUmUf8L3j17kDv5+SGJjMGkOxlpWKbM5eyPpQnkEY0i95Vgfq7fDNYvg+QkhprzO7OPnxG1uCoXh4XnFcT6Rjq6CrQZ8Obgi/WLzumQBfDatAg5p3nkvZu36/KpG8LFHVPaVieyIdW4FPxdG1DfbyITO4NwJs20A1jLIvtWbX4VIuouLnGsXQUIkgjM3WZBYOsd/gVEvCrEk/AASBD91ynGlrPwL8qDCn0O7NHXC4F8Bn+A5WxCMcRJlcaPK2F8pmzl7+OjDMX5mHdeDlUjSV5UVkQU9rexeAOvwswrhCSk96IRHuB2b3BerqgAyAqmwAnVrg8ygwU5WNV2xob96nBwp86kD/uqEC/kkvNCEaftIRnS1OZiLwG0CqrX03sPuyTygatlV0Zqot8drwTNoAMuT168lvIBMwvgJyhvga3XKM27S4DmQW8Hmh3RMBv7yy85zAZypq9SdSPgK9o14AahXpLLR7Vsgc5A3g9prcqLWl1tVwjgMlZ4M71jdPQLRN4JNUpP1Q4ZpnAlKR9kMCb6nq6mCspbl4PdnasScZSdxXbK/fHB6bM4y9gBriq14rAdDTO/5lgf2CJMyYtel6j1Mo1jzT16uHgQYRnj3duvN0sY+37bRt53pse24okN6isCrQV7vIjLZ0qOrHOcM5NXr06PN9f16qz/vlEZT5/VVXTqqTfyw5TAvi/amEbed6IokV6jgPq3AEkVYxjEM34T+XvZDJOD45KcoHwBRE1mht3eTh+ieo4kg5kNSc22JLb/Wr/0FDeEmhUZAlIvnuM1nz6HBTWCGqOhMDnI28+yuwPxQNT0e0sSfS/l458SPnQiPnQhXiP382OiKg2hgRUG38PwU4ov0lvnOe2+J1FVTUB1y3dSiGqzogSDco5okx70vcqviPakUCqC5R5Gj5ubjc0Yxbm4FmYIwrjqFwFDmqqsvSbYlvygn8G4HX7QsavehZAAAAAElFTkSuQmCC"></img>
              
            
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
)(addmaterial);
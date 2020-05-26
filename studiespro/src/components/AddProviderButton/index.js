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


const addprovider = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-provider'>
            <button className='addprovider-buttonp' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAFVUlEQVRYhbWYWWxUVRjHf9+50+nMpY1scSkYrShIcAloEARCpWAgEQkPg1DUIA+8CFEf3BUbjYkxikaQuMQlaAtmYnClojiUsgRRJMZIFUEMIqgxlGV6h1nu/XwoQoszvfdO8Z/My/m235xz7vnOvUJflKirileYGYjcKsqVQM0pyyFF2sH7OJP3Wki2psstIWVFzZhRGe+fu1uER4BBPt5/q+jTmdyglSSTuf8d0J47rQbjrQXGhgzdpZ41K7Pm89/CBIUCjDVMucSobEUYEo7ttA5qRCZkVm04EDTABE6dqKsyKh/2AQ5gqBT0AxbNtIMGBAaMR62lCNeWx9VDo+2082hQ50BLHJ9fN1TU2gPEy8bqKUcjOjyzKvW7n2OgGTRe5HZ6hzsgKg946GQPnSzCg0BvD4NtXJkfpHYkiJOKziptlXWOZebwzued3QbbSNSttKNWEmV60ZwwC3jWr3aQGRRgdAnbgSJwXUq2pp2cmwAOFo1UxhBgi/kCVs+rGwRUFrOJyoqicN0gBV1RwhqrvrN+YJ8B80pVKZuL7PCLF2O+Kpk751b7xfsCRt3K434+5arSFI75+fgCHh81/ijgFLNZxrvBL15dxhUdhxPHmrcc7TMgjY0eSHvRIspiEnUlt8DghROqFV1czCYiu7s4+woIIN62EpaL7aiVLAY5eOGEaudkLFmqNSraFqR0oHNQPFmnwpKiRmW6XWG1S8OUFa5a2wEsdLyT0cW99W1LZN05A+w8Gt1oD8iloeQTPVSRZ4x4p5h9dSxtd2wNUjvYEre0ZFFJBfINIIHPeG1nPohv4NuMivdu+UhnS94K6hkYMHPIW0upthVKsrdz+MQvgnoHv7C2thZQXi+LqZsUXdF1dAVTcEBACu5rQOgXn25Kx/LydpiAUICdydY/QN8IhdRTL3UkN/i2t+4KBdgVUfEUJVqfj45F8pHnQ5cLG+C8u/6wwCth41CWHU+uPxI2LPwMApKPPgOEWaq/Yib6Yjm1/DtJY6Op/mnb8AKF0RgZbZRournl3nhD/RMCwYqKPHykqeW4Pb/+ZfVIY/jWK7ArO3LSXr8nuuiVu/rO+kGuqwmQW1Amc3aLU2Y7h91P7IvMLkSu8oH7yrli4o3xnzcnRFnTMw0nBDYh8lEkZ71fbAv0AIzdcXOtcd2lwFwg1kvZ/U7eGRWLVI014m0s9UcBF2G8Y6zdtuv+CAztJedJkNWeV3jy5JrWX/8dPL0H4/OmLjGu2w4s8IEDqLWj9kMnV3+xCSh57IjKcqfpy6/jrve4DxxdNfUuY6z2eEP9PadzAMQbpt4n6DKfBGcrJyLXR3McyEb0hyJXq/2OZV1t573hGN1BwJvTGTC9v7M59ZywoC5m56y/gX4hAQG+cQ654+0hZhoqn3JmqT2jOi192Guza6wdlH5t7U1ZJ+8ONlWZSG2ZcADX2zWRh5ymVIvA8n8HVXkhvTqVsmsij5UJB1DZLxqpFRKJqF1xZD9nvo6GVUE9b2Impt/ZWWs7gjod0XHx/rkxIrQRcmm76bCTH3ipAPSbP+VmVfmIEi/oAbSvMi/XdQyI5wEGdGQqshW6ExhWZr4sorOdplSLBZD/fv++imsuW0/XcpQzkwNdi5nRXKEjms+PKhjeBEaUCbdLlTmZ5tRGOPv8amw0/fZsngcsUpj0H/v/JwW2ivJq54hJzd27S0mAytumDDMRZopnbkKYBDrgHEMdQWWLops8Tz/MvpfaV8wp2Aw1NprK9rZaq0JHiScjVRmGyIXABcD5IOeBCtD/VMRREAU9Afx56veHoHvVaLuL7s5eXvdLkJv1P40h7V8+R5DGAAAAAElFTkSuQmCC"></img>
                
            
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
)(addprovider);
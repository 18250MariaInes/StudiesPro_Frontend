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


const addassignment = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-assignment'>
            <button className='addprovider-button' onClick={onClick}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAD/UlEQVRoge2YT2hcVRTGf+fOSIk1at4MYgNC3CgEqtDaGipSqyjGhUJlmkx31oVaRMVNFGq8jS6sK+1KhLqzxgyUurFVsdJFIImoSEGMC8lGC5KZtLZ2wHTucdEE8l7fffOSmRdimQ+GgXPPd8/3zf07FzroIBNIZj1PlHKFX/K7FXnmWiH9otp/9Sz7Ko0syrXXiLWmh9ldgpRAS8CWSEZVkS8RrSzc2X2aFz5ebFfp1o00F+9DW02tzcjStAEpKboXuCMh+6+l78QcQU6AVtY6/dIbWd0vH/61z/c21sxNOVLJRloR7xOQRZ+xRjIqFIs21goZKdqhbQ5zErgrocOW53MsVrfu5tSYpxdGPz23HMivbHXIQeJNZCN+JfZVGlU4A5xhovRyE1N9xulB4KXlQMgIIpMoz6+beB9SmHLoZEh6tI/C2NAOdXJTrb8xva7i02CilAt+ze9UzOWV0+qGgn/7PTq4KajdfhJ4HMh5suac0b0XRsd/ykLcapD3NfTUeh4DfbIJv884XgGea1VIYWxoh2quL65NlAb5xenqocofPr7XiAib0TQSZHOarCQEdviAOjmGp6ACXM1fLNrh/nk7/mdcjmlVRHtgnkiRdJtiBrw9tFFNC9BUOlS8a9U/tZYh6JGqHX+TyLhf26bNTDQ/sOXXgTHAN+X+AQ7V7GcfNKu9GjQ14pCdgS2XEAlPYOe2eyhJJlhqeweIM/Iz8FskZoDdQDFJZ4oRYQ+wBw37UP/OnWbx3xIXNOhTcYs5OLz/VVQTR7CpkfWEQ04FtjwbCRtUH2nG3VBGgPuWPqtGVkbOma6uh+ZHPrm0Mlg8cqDb1euTwNZ2F8zKyBZXv1IKDu8PGXH1K90gvVkUzMpIEeRYdIPI8hltgxyIraNjZKOhY2SjoemupfCdwEfRu5aoblN4w0ObBx1BTGj7RV03yPtAIY4k8J6K/BjmqCi8uHRVWrsRg85U7XiF62+/czjjM3LedN1c8RyIr/mMYNyJ2ujn34di1poCs9u1VSOKjAS2PHJd3CXStrp6/e/AlkNBV68n13JmJsqB2VR/VNMciPPAWSAq/R7gfg+nAXwDXIrEu0l+zMjuGo/Iu7W3j38YDRftcK9DPI8BOlWz44NxLYEtTwK74tqyvcarvhXY8sNERsTBvX6SDAS2fIr4EXnQx8r6Gl8Ank2RtxI5oNlTUhzWfI2/Yc4RrxFR0r77RvPS8CI5krwHLmclaPKPSH5xGrjYtHPhdCTydQpNYY7oVyk4FwQ35dWRxCza4V7FDPjek4zw+/zo8R9CwaODm3oWbn1UyMU+MCiNywvqvsVW/o3UesCJuTtWpNIQ3JTvlbGDDjro4P+H/wAiMsYSKD9dNAAAAABJRU5ErkJggg=="></img>
                
            
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
)(addassignment);
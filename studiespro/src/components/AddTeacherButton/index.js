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


const addteacher = ({ onClick, isHidden = false }) => (
  <Fragment>
    {
      !isHidden && (
        <Link to='/Add-teacher'>
            <button className='addteacher-button' onClick={onClick}>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAGVklEQVR4nO2aa2wUVRSAv5nt1oIl1bRsSwWUKq1aa93yEH/0EaJIUnlpeGhEEkkgSNkNWBoD8QcBExUfSMQIRki0AbEhUEjZFkxsYhojqIiQysMWIlv7RAKFUJidXn9MW2dnd9t9dlncL5lk5szcM/ecuffce88diBMnTpw4ceLEiRMnTpz/IVKU3lkAPApY+mQdwB/ACUBEoU7DQgawBWhBM9Lb0QJ8DKRHqY4RQQIqgOv4Ntx4dAPlDEMLjfQLkoBdwCK9MCMjg5KSEjIzMxFC0NraSn19PW1tbcbye4DXgZ4I1zMiSGgGDHzZSZMmibq6OqGqqjCiqqqora0VVqvV2Bp2E51YFTIV6AxZvXq1cLlcHoYbURRF2O12oxPejKIdQWEBrtFnwJo1a4Y03IjNZjPGhIwo2hMwW9A1e3++vLeWYOgOH0XVogCQ0A11dXV1ARvfj8Ph0DvASYzEgsn0VXrMmDFeA56/qKoq0tPT9U4oCHdl5XArBLL7T4qLi5Hl4F8hyzLFxcVedYeLSDggs/9k7NixISsbN26c/vKBkBUaiIQDBubyQoQ+rTfoCPs6IRIO+Lv/pKWlJWRlTqfTq+47mUn0Ba2MjIyQg6DFYtEHQWtULfMTt2HQ4XAE7YCamhq98ZeIkWEQtCWtAITVahWKogRsvKIoIj8/X++AD6NqUYC4TYXtdnvADigrKzNOhWMuR1CObkFjs9n8agmKohiNF8DqKNoRNBLaUnbAEKvVKhwOh8/lcE1NjbHZC6CSCPb94UiI7ARe1gvT09MHEiKgDZf19fV0dHQYy+8GlhKjCZF+JLT1fDf+p8SuoTX7mIn6/pCOtqR14tvwS2jR3uJDR9iJVlr8KbS0eH+Sow04A/zGXZwWjxPnDmS4Y0AikA9MAO4HpvfJfwTagWagEW3EuGvIA94BjgO3GHoIdAEngQ+AQmJ0KDSj7eicxv+x39exM5IVjYR3XwU2AFkeL5MksrOzyc3NJTU1ldbWVgCysrJwOp2cPXuWxsZGtyxQUlJSa09PT6ZR12ez03KEzKJeIc2U4CEkUgV0SXARSdQC35Tt7zo3VGXD6YBMYAdQqhcmJyczZ84cFi5cSFFRESkpKYMqaWtr4+jRoxw5coSmpibWr19PaWnpd8B6SZKObZ+VmaaYlM3AYsA0iCoX8BVSYkXZ/pbLvh4KlwOeA/aiBTYA0tLSKC8vZ+XKlSQnJ4fjHcL5+w/7Dm6YP0X09j4YQLlmIeS5q6rbT3m7GQ4HLAG+QOv3yLKMzWZj48aN4TIcgO5OJ1VrZ3DzalcwxS/LJnnqG/vam403QnXACmBbv57x48dTWVlJYWFhiGrdEb0qVWtn0Nns9SP6y68Wc+fUBVWoemEoWeFSYCt9xufl5dHQ0BB24wHOfL93UOOLl7/Psj0Xmbxg0E3kgk5l9GKjMFgHPInW5xMApk2bRkNDQ1g2QrxxYv82n/dM5nt44vklmJNGkv/CskH1CG3L3o1gHJCANjbfC9oQVl1dzahRo4JQNTRX2y5ypeW8z/tyghkkrSebEsxDqXvsk5dGT9QLEoKo01touX9GjhzJ4cOHsVgit3xvP/ezh0w2JZBTsoARKamYzIn/yRMSKXhxFQDdHU7ONxwAw+6U7BJTgAGPBuoAE5oDANi0aRM5OTkBqgiMG/+0e8hyZ7xG0bJ3PStnTuSZxW8PXKtKD80/OdyekSXGuF0HWB+VPu9Nnz4du90eYPFg8ByohJ85E+Flb1JI7oWD6QKF69atW1pRUTFOlmVXEOUDQrl57XFgll7WeORr1Ns93Jf5CKaERPJnLwdAdd3m5MHtgKDrwmkuHK/z0Cd6cfsV7Y5faW2da3lYRvzp6755RDLLdmvzG+XmdXa84rEEcUPqZeLKg50D+iKxOxxWbAc6mtB+o/VKr0sZCHSqSxlCm9SoNx5iwAEAQrDZ1z1VucWp2l0oPTc4efDzQfVIgvc8ZGGoX8T5dj6mDmX0MUL7R+gXi7nz6XBOhYeNBVWoquqah/ZXeTBcFqo832g8xIgDAOyHrvwlhPwscCHAos0mSS5Zdajda7mYcQDAqur2U2bVPBVtKu7xNQ24JPgSKXHqiv3tp309FBMxwBufzkvLlgQLBdJMARMkSBPQJQmakahVTey17+v0vYiIo/Ev+uV9w9tQKoQAAAAASUVORK5CYII="></img>
                           
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
)(addteacher);
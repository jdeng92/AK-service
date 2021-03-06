import React from 'react';
import PropTypes from 'prop-types';
import { Container, ContainerToHideScroll, StyledNavBar, NavBarArrow, NavTitle } from './style.jsx'

const navClassNames = ['ov', 'ff', 'hv', 'pth', 'mc', 'rv', 'ns', 'ct', 'nh', 'hfy', 'sh'];
const navTitle = [ // array that holds string value of title, used to render titles on navigation bar with the use of map
      'Overview', 
      'Facts and features',
      'Home value', 'Price and tax history',
      'Monthly Cost',
      'Rental Value',
      'Nearby schools',
      'Commute time',
      'Neighborhood',
      'Home for you',
      'Similar Homes'
    ];

const NavigationBar = React.forwardRef(
  function nv({ onView, showArrow, scrollOnClick, slideOnClick, showHideOnSlide }, ref) {
    // conditional rendering of arrows
    const letfArrow = showArrow.left ? (<NavBarArrow id="leftarrow" className="material-icons" left="0px" onClick={slideOnClick}>chevron_left</NavBarArrow>) : (<span></span>);
    const rightArrow = showArrow.right ? (<NavBarArrow id="rightarrow" className="material-icons" left="476px" onClick={slideOnClick}>chevron_rightt</NavBarArrow>) : (<span></span>);

    return (
      <Container>
        <ContainerToHideScroll>
          {letfArrow}
          {rightArrow}
          <StyledNavBar id="navbar" onScroll={showHideOnSlide} ref={ref}>
            {navClassNames.map((navClassName, ind) => {
              return <NavTitle key={ind} className={navClassName} onClick={scrollOnClick} onview={navClassName === onView}>{navTitle[ind]}</NavTitle>
            })}
          </StyledNavBar>
        </ContainerToHideScroll>
      </Container>
    );
  }
);

NavigationBar.propTypes = {
  onview: PropTypes.object,
  showArrow: PropTypes.object,
  scrollOnClick: PropTypes.func,
  slideOnClick: PropTypes.func,
  showHideOnSlide: PropTypes.func,
}

export default NavigationBar;

import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//
import { GLOBALTYPES } from './../../redux/actions/globalTypes';
import './Sidebar.css';
//

const Sidebar = (props) => {
  const { toggle } = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggle) {
      removeActiveClassFromSubMenu();
    }

    // dispatch
  }, [props, toggle]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll('.sub-menu').forEach((el) => {
      el.classList.remove('active');
    });
  };

  useEffect(() => {
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((el) => {
      el.addEventListener('click', (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove('active'));
        el.classList.toggle('active');
        // console.log(next);
        if (next !== null) {
          next.classList.toggle('active');
        }
      });
    });
  }, []);

  // The toggle method
  const handleToggle = () => {
    dispatch({ type: GLOBALTYPES.TOGGLE, payload: !toggle });
  };

  return (
    <>
      <div className={`side-menu ${toggle ? 'inactive' : ''}`}>
        {/* THE TOP SECTION */}
        <div className='top-section'>
          {toggle ? (
            <div className='toggle-logo'>
              <img src='/logo192.png' alt='logo' />
            </div>
          ) : (
            <div className='logo'>
              <img src='/wealth2.png' alt='logo' />
            </div>
          )}
        </div>

        {/* THE MAIN MENU SECTION  */}
        <div className='main-menu'>
          <ul>
            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-speedometer2'></i>
                </div>
                <span>Dashboard</span>
              </div>

              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/dashboard/create-agent'>Create Agent</NavLink>
                  <NavLink to='/dashboard/newest-orders'>Newest Orders</NavLink>
                  <NavLink to='/dashboard/newest-products'>
                    Newest Products
                  </NavLink>
                  <NavLink to='/dashboard/newest-users'>New Users</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-gift'></i>
                </div>
                <span>Orders</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/order/create-order'>Create Order</NavLink>
                  <NavLink to='/order/all-orders'>All Orders</NavLink>
                  <NavLink to='/order/pending-orders'>Pending</NavLink>
                  <NavLink to='/order/funded-orders'>Funded</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-bag'></i>
                </div>
                <span>Products</span>
              </div>

              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/product/create-categories'>
                    Create Categories
                  </NavLink>
                  <NavLink to='product/all-categories'>All Categories</NavLink>
                  <NavLink to='/product/create-product'>Create Product</NavLink>
                  <NavLink to='product/all-products'>All Products</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-people-fill'></i>
                </div>
                <span>Users</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/users/create-user'>Create User</NavLink>
                  <NavLink to='/users/all-users'>All Users</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-person-bounding-box'></i>
                </div>
                <span>Vendors</span>
              </div>

              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/vendor/create-vendor'>Create Vendor</NavLink>
                  <NavLink to='/vendor/all-vendors'>All Vendors</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-badge-ad'></i>
                </div>
                <span>Advertise</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/advert/create-advert'>Create Advert</NavLink>
                  <NavLink to='/advert/all-adverts'>All Adverts</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-patch-question'></i>
                </div>
                <span>Faqs</span>
              </div>

              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/faqs/create-faqs'>Create Faqs</NavLink>
                  <NavLink to='/faqs/all-faqa'>All Faqs</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-info-circle'></i>
                </div>
                <span>Help Center</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/student/login'>Make Complain</NavLink>
                  <NavLink to='/complain/view_complain'>View Complain</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-newspaper'></i>
                </div>
                <span>Newsletter</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/student/login'>Make Complain</NavLink>
                  <NavLink to='/complain/view_complain'>View Complain</NavLink>
                </li>
              </ul>
            </li>

            <li>
              <div className='menu-item'>
                <div
                  className={toggle ? 'menu-icon menu-icons' : 'menu-icon'}
                  onClick={handleToggle}
                >
                  <i className='bi bi-gear'></i>
                </div>
                <span>Settings</span>
              </div>
              <ul className={`sub-menu`}>
                <li>
                  <NavLink to='/settings/preference'>Make Complain</NavLink>
                  <NavLink to='/settings/profile'>View Complain</NavLink>
                  <NavLink to='/settings/logout'>Logout</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

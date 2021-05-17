import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    display:block;
    flex-flow: column nowrap;
    z-index:1;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: black;
      text-decoration: none
    }
    a:hover{
        
      text-decoration: underline;
      text-decoration-color: #FFD41C;
      }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a>Як це працює</a></li>
      <li><a>Про нас</a></li>
      <li><a>Послуги</a></li>
      <li><a>Індустріальна експертиза</a></li>
      <li><a>Портфоліо</a></li>
      <li><a>Кар'єра</a></li>
      <li><a>Контакти</a></li>
            <div className="btn1">
          <button>
            Сконтактувати
          </button>
      </div>
    </Ul>

  )
}

export default RightNav

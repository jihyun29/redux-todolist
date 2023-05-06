import React from 'react';

const HeaderStyles = {
  width: '100%',
  background: 'lightyellow',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '20px',
  color: 'black',
  fontWeight: '600',
};
const FooterStyles = {
  width: '100%',
  height: '50px',
  display: 'flex',
  background: 'lightyellow',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
};

const layoutStyles = {
  display: 'flex',
	flexDirection: 'row',
  //컨테이너 내부의 아이템들이 만들어지는 방향
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
}

function Header() {
  return (
    <div style={{ ...HeaderStyles }}>
      <h1>🎀 MY TODO LIST</h1>
    </div>
  );
}

function Footer() {
  return (
    <div style={{ ...FooterStyles }}>
    </div>
  );
}


function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{...layoutStyles}}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
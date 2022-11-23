import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

 
// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12 col-lg-6 footer-widget widget-one">
            <h6 className="widget-title">About Stavros</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu nunc eget quam mollis volutpat. Donec id ex mi. Mauris diam risus, aliquet id congue at, vestibulum nec urna. Praesent faucibus elementum auctor. Nullam eget ipsum pharetra, facilisis nisi eget, molestie nunc. Duis orci quam, maximus molestie elementum ac, porta non mauris. Nunc et arcu ultrices, aliquet lectus ut, porttitor urna. Donec non cursus arcu. Nam egestas fringilla ipsum id malesuada. Aliquam tempus pretium lacus. Curabitur blandit lectus nibh, nec lacinia ipsum maximus vel.</p> 
          </div>
          <div className="col-12 col-md-4 col-lg-2 footer-widget widget-two">
            <h6 className="widget-title">Company</h6>
            <ul className="widget-list">
              <li><Link className="widget-list-link" link="/about/">About us</Link></li>
              <li><Link className="widget-list-link" link="/test-page/">Test PAge</Link></li>
              <li><Link className="widget-list-link" link="/sample-page/">Sample Page</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2 footer-widget widget-three">
            <h6 className="widget-title">Company</h6>
            <ul className="widget-list">
            <li><Link className="widget-list-link" link="/about/">About us</Link></li>
              <li><Link className="widget-list-link" link="/test-page/">Test PAge</Link></li>
              <li><Link className="widget-list-link" link="/sample-page/">Sample Page</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-4 col-lg-2 footer-widget widget-four">
            <h6 className="widget-title">Connect</h6>
            <ul className="widget-list">
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.facebook.com">Facebook</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://twitter.com">Twitter</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com">Instagram</Link></li>
              <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://github.com">Github</Link></li>
            </ul>
          </div>
        </div>
        
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const Container = styled.footer`   
  max-width:1200px;
  margin: 0 auto;
  padding-top:4rem;
  padding-bottom:4rem;
  padding-right: 15px;
  padding-left: 15px;
  color:var(--white);
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }
}
`;

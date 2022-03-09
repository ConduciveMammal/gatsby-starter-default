import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import parse from 'html-react-parser';

import './hero.scss'
import HeroGraphic from './hero-graphic';
import Button from '../../global/buttons/button';

const HeroBanner = (props) => (
  <StaticQuery
  query={graphql`
  query socialLinksQuery {
    site {
      siteMetadata {
        socialLinks {
          name
          link
          svgCode
        }
      }
    }
  }
  `}
  render={data => (
  <div className="hero-section">
    <div className="hero-section__half">
      <HeroGraphic color={"var(--accent)"} />
    </div>
    <div className="hero-section__half hero-section__content-wrapper">
      <div className="hero-section__content">
        <h1 className="hero-section__title">{props.title}</h1>
        <p className="hero-section__subtitle">{props.subtitle}</p>

        <div class="hero-section__contact-bar">
          <Button type="link" link="/contact" classes="button--primary">Contact Us</Button>
          <div class="hero-section__social-links">
          {data.site.siteMetadata.socialLinks.map((node, index) => (
            <a href={node.link} target="_blank" rel="noopener noreferrer">
              {parse(node.svgCode)}
              <span className="visually-hidden">{node.name}</span>
            </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )}
/>

)

export default HeroBanner;

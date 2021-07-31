import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur rerum velit sit laudantium porro ex maiores. Temporibus velit optio aut aperiam! Facilis aperiam vitae dicta repellat iure soluta necessitatibus error nesciunt voluptas incidunt laudantium neque, impedit quo deserunt vel ducimus facere praesentium libero minima tempora illo similique adipisci nostrum reiciendis! Est illum expedita iste praesentium error saepe, quos eius itaque reiciendis minus culpa a iusto fugiat architecto facere ad id modi adipisci ducimus doloremque. Distinctio minima voluptate reprehenderit, omnis voluptas corrupti tempora aut accusamus perspiciatis cum ducimus quae facilis nemo!</p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage

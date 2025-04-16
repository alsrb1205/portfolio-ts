import React from 'react';
import { Logo } from '@interfaces/common';

// interface와 type의 주요 차이점:
// 1. interface는 선언 병합(Declaration Merging)이 가능하지만, type은 불가능합니다.
// 2. interface는 주로 객체 구조를 정의할 때 사용되며, type은 더 유연한 타입 정의가 가능합니다.
// 3. 이 경우에는 두 방식 모두 동일한 결과를 제공합니다.

// interface HomeProps {
//     logo: Logo;
// }
type HomeProps ={
    logo: Logo;
}

const Home2: React.FC<HomeProps> = ({logo}) => {
    return (
        <div>
            <section id="home">
            <img className="home__avatar" src={logo.img} alt="portfolio" />
            <h2 className="home__title">Hello <br/> I'm 
                <strong className="home__title--strong"> Typescript Developer</strong>, {logo.name}</h2>
            <p className="home__description">A software engineer currently residing in Seoul, South Korea</p>
            <a className = "home__contact" href="#contact">Contact Me</a>
        </section>
        </div>
    );
}

export default Home2; 
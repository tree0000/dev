import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import TodaysPlan from './TodayPlan';
import FoodMenu from './components/FoodMenu';
import FirstProps from './components/FirstProps';
import Wrapper from './components/Wrapper';
import MovieComponent from './components/MovieComponent';
import BooleanCompoent from './components/BooleanCompoent';
import IntroductionComponents from'./components/IntroductionComponents';





function App() {
  const movieList = [
    {
    title: "행복의 나라",
    open: "2024.08.14"
    },
    {
    title: "에이리언-로물루스",
    open: "2024.08.14"
    },
    {
    title: "트위스터스",
    open: "2024.08.14"
    }
    ];
  return (
    <>
      <FoodMenu />
      <Wrapper>
        <Header />
        <Body />
        <Footer />
      </Wrapper>
      <TodaysPlan />
      <div>
        <FirstProps name="박우현" color="red"/>
        <FirstProps pizza="피자" price="25,000"/> {/* 피자와 가격 전달 */}
        <FirstProps name="박우현" color="blue"/> {/* 이름과 색상만 전달 */}
      </div>
      {/* <div>
        <MovieComponent title="행복의 나라" open="2024.08.14"/>
        <MovieComponent title="에이리언-로물루스" open="2024.08.14 "/>
        <MovieComponent title="트위스터스" open="2024.08.14 "/>
</div> */}
{
movieList.map(movie =>
<MovieComponent title={movie.title} open={movie.open} />)
}

<BooleanCompoent study/>
<BooleanCompoent />

    <div>
      <IntroductionComponents name="정수아" age={20} address="서울" />
    </div>
    </>
  );
}

export default App;

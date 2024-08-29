import MovieComponent from './components/MovieComponent';
import './App.css';
function App() {
  const movieList = [
    {
      title: "행복의 나라",
      open: "2024.08.14",
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTET6SJFUQlnAX0TW8LiErd0jHTECiFiJltAQyv9EKjYy7eFhFw"
    },
    {
      title: "에이리언-로물루스",
      open: "2024.08.14",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJ1yMNzz-tT7xDcLZ701_3QC9dqymnhBovxwpD5cCaq9cE9TYj"
    },
    {
      title: "트위스터스",
      open: "2024.08.14",
      img: "https://dx35vtwkllhj9.cloudfront.net/universalstudios/twisters/images/regions/us/updates/onesheet.jpg"
    }
  ];

  return (
    <div>
      {movieList.map(movie => (
        <MovieComponent 
          key={movie.title} 
          title={movie.title} 
          open={movie.open} 
          img={movie.img} 
        />
      ))}
    </div>
  );
}
export default App;
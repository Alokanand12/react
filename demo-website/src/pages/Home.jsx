import CategoryCard from "../components/CategoryCard";

const Home = ({ setPage, setCategory }) => {
  const categories = ["all"];

  return (
    <div className="mt-20 p-4">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((cat) => (
          <CategoryCard key={cat} name={cat} setPage={setPage} setCategory={setCategory}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
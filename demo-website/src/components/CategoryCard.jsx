const CategoryCard = ({ name, setPage, setCategory }) => {
  return (
    <div
      onClick={() => {
        setCategory(name);
        setPage("shop");
      }}
      className="bg-gray-800 p-4 text-center cursor-pointer"
    >
      {name}
    </div>
  );
};

export default CategoryCard;
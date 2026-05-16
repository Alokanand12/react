const Stats = () => {
  const data = [
    { label: "Products", value: "20+" },
    { label: "Users", value: "100+" },
    { label: "Categories", value: "4+" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, i) => (
        <div key={i} className="bg-card p-4 text-center rounded">
          <h2 className="text-neon">{item.value}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
import "../styles/Gallery.css";

const galleryData = [
  {
    id: 1,
    title: "Weight Loss Success Story - Sarah",
    image: "https://example.com/sarah-transformation.jpg",
    category: "success-story",
    description: "Lost 30 pounds in 6 months through balanced nutrition",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Healthy Mediterranean Bowl",
    image: "https://example.com/med-bowl.jpg",
    category: "meal",
    description: "Quinoa, grilled vegetables, and lean protein",
    date: "2023-07-01",
  },
  {
    id: 3,
    title: "Morning Yoga Session",
    image: "https://example.com/yoga.jpg",
    category: "fitness",
    description: "15-minute morning routine for energy",
    date: "2023-07-15",
  },
  {
    id: 4,
    title: "Meal Prep Sunday",
    image: "https://example.com/meal-prep.jpg",
    category: "meal",
    description: "Week's worth of healthy lunches prepared",
    date: "2023-08-01",
  },
  {
    id: 5,
    title: "John's Transformation",
    image: "https://example.com/john-progress.jpg",
    category: "success-story",
    description: "Gained muscle and improved energy levels",
    date: "2023-08-15",
  },
];

galleryData.map((item) => console.table(item));

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Success Stories & Healthy Living</h1>
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-item">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} />
            <p>{item.description}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;

import "../styles/Gallery.css";

const galleryData = [
  {
    id: 1,
    title: "Weight Loss Success Story - Sarah",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/image_3e7881c8.jpeg?region=131,0,1338,753&width=1200",
    category: "success-story",
    description: "Lost 30 pounds in 6 months through balanced nutrition",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Healthy Mediterranean Bowl",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_30b9f0a9.jpeg",
    category: "meal",
    description: "Quinoa, grilled vegetables, and lean protein",
    date: "2023-07-01",
  },
  {
    id: 3,
    title: "Morning Yoga Session",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_1f7acc51.jpeg",
    category: "fitness",
    description: "15-minute morning routine for energy",
    date: "2023-07-15",
  },
  {
    id: 4,
    title: "Meal Prep Sunday",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_c2cc4c68.jpeg",
    category: "meal",
    description: "Week's worth of healthy lunches prepared",
    date: "2023-08-01",
  },
  {
    id: 5,
    title: "John's Transformation",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_711f7c9c.jpeg",
    category: "success-story",
    description: "Gained muscle and improved energy levels",
    date: "2023-08-15",
  },
  {
    id: 6,
    title: "Healthy Breakfast Ideas",
    image: "https://lumiere-a.akamaihd.net/v1/images/image_8fb6f58f.png",
    category: "meal",
    description: "Oatmeal with berries and nuts",
    date: "2023-09-01",
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

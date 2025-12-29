export default function Card({ img, title, description, color, bgColor }) {
  return (
    <div className="card">
      <span className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {img}
      </span>
      <h2>{title}</h2>
      <span className="line" style={{ backgroundColor: color }}></span>
      <p>{description}</p>
    </div>
  );
}

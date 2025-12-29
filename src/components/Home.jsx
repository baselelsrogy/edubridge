import { cardData } from '../../data';
import Card from './Card';

export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="home__header">
          <span>Join Us</span>
          <h1>Best Learning Opportunities</h1>
          <p>
            We know how large objects will act, but things in a small scale just don't act that way.
          </p>

          <a href="#" className="btn btn-red">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>

        <div className="card__container">
          {cardData.map((card) => {
            const { id, img, title, description, color, bgColor } = card;
            return (
              <Card
                key={id}
                title={title}
                img={img}
                description={description}
                color={color}
                bgColor={bgColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

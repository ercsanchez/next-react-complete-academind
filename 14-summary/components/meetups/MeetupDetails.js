import cssClasses from './MeetupDetails.module.css';

export default function MeetupDetails({ image, title, address, description }) {
  const { details } = cssClasses;

  return (
    <section className={details}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

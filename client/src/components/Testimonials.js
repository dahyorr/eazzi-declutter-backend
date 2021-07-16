import Carousel from "./Carousel";
import userImg1 from "../static/testimonialCarousel/user-image1.png";

const testimonials = [
  {
    imageURL: userImg1,
    user: "Mrs. Sadikat",
    content:
      '"I got my crib, it looks brand new, Thanks so much for the new touch. You guys have the best deals on EazziDeclutter"',
  },
  {
    imageURL: userImg1,
    user: "Mrs. Sample User",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem laborum quo dolores. Nisi animi esse neque doloremque corporis molestias ex ut temporibus vitae earum distinctio consequatur dolor, ducimus pariatur eum.",
  },
  {
    imageURL: userImg1,
    user: "Mr. Username",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo facere praesentium perferendis, nemo vitae aspernatur.",
  },
];

const Testimonials = () => {
  const renderTestimonial = testimonials.map((testimonial, index) => (
    <div className="content" key={index}>
      <img src={testimonial.imageURL} alt={testimonial.user} />
      <div className="text">
        <p className="text-content">{testimonial.content}</p>
        <p className="user-name">- {testimonial.user}</p>
      </div>
    </div>
  ));
  return (
    <div className="Testimonials container">
      <div className="title">
        <h2 className="text-center">TESTIMONIALS</h2>
      </div>

      <div>
        <div className="testimonial-container">
          <Carousel>{renderTestimonial}</Carousel>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;

import emily from '../images/image-emily.jpg'
import thomas from '../images/image-thomas.jpg'
import jennie from '../images/image-jennie.jpg'

function Testimonals() {
  return (
  <div className="testimonal">
              {/* <!-- CLIENT TESTIMONIALS section --> */}
        <section className="testimonial">
          <h1>CLIENT TESTIMONIALS</h1>
          <div className="row3">
            <div className="testimonial-col">
              <img src={emily} alt="" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure our
                needs were met and deadlines were always hit.
              </p>
              <h2>Emily R.</h2>
              <h3>Marketing Director</h3>
            </div>
            <div className="testimonial-col">
              <img src={thomas} alt="" />
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
              <h2>Thomas S.</h2>
              <h3>Chief Operating Officer</h3>
            </div>
            <div className="testimonial-col">
              <img src={jennie} alt="" />
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <h2>Jennie F.</h2>
              <h3>Business Owner</h3>
            </div>
          </div>
        </section>
  </div>
  );
}

export default Testimonals;

import { useState } from "react";
import { Link } from "react-router-dom";

function Categories() {

  let [bookQuotes, setBookQuotes] = useState([
    '"I shall be miserable if I have not an excellent library." - Jane Austen in Pride and Prejudice',
    '"The books that the world calls immoral are books that show the world its own shame." - Oscar Wilde in The Picture of Dorian Gray',
    '“When I have a little money, I buy books; and if I have any left, I buy food and clothes.” - Erasmus',
    '“That’s the thing about books. They let you travel without moving your feet.” - Jhumpa Lahiri in The Namesake',
    '“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.” - Haruki Murakami in Norwegian Wood',
    '“Books are a uniquely portable magic.” - Stephen King in On Writing',
    '“You don’t have to burn books to destroy a culture. Just get people to stop reading them.” - Ray Bradbury in Fahrenheit 451',
    '“You can never get a cup of tea large enough or a book long enough to suit me.” - C.S. Lewis',
    '“I love the smell of book ink in the morning.” - Umberto Eco',
    '“Books were my pass to personal freedom.” - Oprah Winfrey',
    '“A room without books is like a body without a soul.” – Cicero'
  ]);


  return (
    <section className="catagory_section layout_padding">
      <div className="catagory_container">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              Books Categories
            </h2>
            <p>
              {bookQuotes[Math.floor(Math.random() * 12)]}
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/classic"> Classics </Link>
                  </h5>
                  <p>
                    “When you reread a classic, you do not see more in the book than you did before; you see more in you than there was before.”
                    <br/>― Cliff Fadiman
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/science"> Science </Link>
                  </h5>
                  <p>
                    “The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.”
                    <br/>― Isaac Asimov
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/history"> History </Link>
                  </h5>
                  <p>
                    “We are not makers of history. We are made by history.”
                    <br/>-Martin Luther King Jr.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/biography"> Biography </Link>
                  </h5>
                  <p>
                    “Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show.”
                    <br/>-Charles Dickens
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat5.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/adventure"> Adventure </Link>
                  </h5>
                  <p>
                    “It’s a dangerous business, Frodo, going out your door. You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.”
                    <br/>-J.R.R. Tolkein
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/other"> Other </Link>
                  </h5>
                  <p>
                    “Life is what happens when you’re busy making other plans.” <br/>— John Lennon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
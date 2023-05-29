import React from "react";
import "./About.css";
import image1 from "./images/viewfromatophill.jpeg";
import image2 from "./images/Harrowhighstreet.jpg";
import image3 from "./images/Harrowschool.jpeg";
import image4 from "./images/brockley-market.jpg";
import image5 from "./images/HornimanMuseumandgardens.gif";
import image6 from "./images/telegraph-hill-park-lr-7.jpg";
import image7 from "./images/BeddingtonPark1.jpeg";
import image8 from "./images/Honeywoodmuseum.jpeg";
import image9 from "./images/LavenderFarm.jpeg";

const About = () => {
  return (
    <section className="about-container">
    <div className="content-section">
      
        <h1 className="header">Great London</h1>
        <p>
          When we think of London what comes to our mind is London bridge,
          London eye, various museums, Madame Tussads and so on which are in
          central part of London . But London is not just the central London;
          its suburbs have a lot to offer too. Places like Harrow in the
          North-west corner of London, Sutton to the South and Lewisham in
          South-east are some of London’s hidden gems.
        </p>
        <h2 className="small-header">Harrow</h2>
        <p className="Harrow">
        <img
            className="image"
            src={image1}
            alt="view from the top"
          />
          <img
            className="image"
            src={image2}
            alt="Harrow on hill High street"
          />
          <img
            className="image"
            src={image3}
            alt="The famous residential Harrow public school for boys"
          />
          <br></br>
          <br></br>
          Outside of central London, Harrow has the most number of museums in
          the city. London motorcycle museum, RAF museum and Harrow museum are
          just a few of them. Heath Robinson museum in Harrow displays the works
          of William Heath Robinson, a well known humorist and illustrator, and
          there are rotating exhibits dedicated to other influential artists.
          The Harrow arts centre is a premier centre for culture in Harrow and
          besides being a performance venue, the Grade II listed building is a
          wonder of architecture and worth seeing on its own. Harrow on the hill
          is a historic village located in Harrow and rises 408 feet above sea
          level and is crowned by St Mary’s church from the 11th century. The
          hill with its little shops, tearooms, pubs and quaint shopping streets
          is charming and delightful. It is also home to the esteemed Harrow
          public school which is one of the oldest independent boarding school.
          The school’s buildings are Grade listed and available for the public
          to tour three times a year.
        </p>
        <h2 className="small-header">Lewisham</h2>
        <p className="Lewisham">
          <img
            className="image"
            src={image4}
            alt="Award-winning Brockley market"
          />
          <img
            className="image"
            src={image5}
            alt="Horniman Museum and gardens"
          />
          <img
            className="image"
            src={image6}
            alt="Telegraph hill park"
          />
          <br></br>
          <br></br>
          Lewisham is one of South east London’s unsung boroughs that has plenty
          to impress curious visitors. Brockeley Market is an award-winning
          farmer’s and street food market and now attracts customers from all
          parts of the city. With an array of seasonal street food and locally
          sourced produce from artisan and small producers available, a visit to
          this market is a treat in itself. Horniman museum and gardens located
          in Forest hill Lewisham has wide array of exhibits dedicated to
          anthropology, music and plants. The museum’s giant stuffed walrus is
          star attraction. Visitors can take a stroll across the landscaped
          gardens or embark on a nature walk. The Telegraph hill park 50 meters
          above sea level offers some spectacular views of London's skyline. An
          annual telegraph hill festival with music and comedy performances is
          held each Easter by large number of artists living in the area .
        </p>
        <h2 className="small-header">Sutton</h2>
        <p className="Sutton">
          <img
            className="image"
            src={image7}
            alt="Beddington park in Sutton"
          />
          <img
            className="image"
            src={image8}
            alt="Honeywood museum"
          />
          <img
            className="image"
            src={image9}
            alt="Blooms at lavender field"
          />
          <br></br>
          <br></br>
          Sutton, the southern edge of Greater London, has been inhabited for
          centuries and is one of London’s greenest boroughs. Sutton is bisected
          by the River Wandle and has many parks. Wandle trail is a 12.5 mile
          long trail starting from Croydon to the mouth. Wandle flows through
          seven different parks and wilderness areas in the Borough of Sutton
          alone and Beddington park is one of them. Beddington park is valued as
          one of the most archeologically significant places in London and comes
          under a conservation area. Honeywood museum is the main museum for the
          London borough of Sutton and is located in a sumptuous house at
          Carshalton ponds. The Whitehall in Cheam village is a gorgeous
          weatherboard house that has a history going back to 16th century and
          is now a museum open for free on Thursdays, Saturdays and Sundays. The
          Mayfield Lavender farm is in flower from mid to late June until the
          beginning of September. The Sutton high street, the sixth busiest
          retail zone in London is pedestrianised and runs north to south
          through Sutton proper. This thoroughfare existed even when Sutton was
          just a rural village, and was a stop for caoch traffic on the London
          to Brighton turnpike. Little Holland House in carshalton village is a
          Grade II listed and features handmade furniture and copperwork by
          craftsman and owner, Frank Dickinson. it is a wonderful example of the
          arts and crafts movement.
        </p>
      
    </div>
    <br></br>
    <br></br>
    </section>
  );
}

export default About;
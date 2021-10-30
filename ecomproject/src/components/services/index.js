import React from "react";
import "./style.css";

const Services = () => {
  return (
    <div className="services">
      <h1 className="text-center">Service Section</h1>

      <div className="container">
        <div className="row services flex-wrap justify-content-center">
          <div className="serviceCard">
            <div className="serviceCard-head text-center">
              <h2>Greate Brand Representaion</h2>
            </div>
            <div className="serviceCard-body">
              <p>
                BrandLoom is among best ecommerce website design companies in
                India. We understand that each brand is unique and that an
                ecommerce website design must reflect a brand’s essence.
              </p>
              <br />
              <p>
                We make sure that your brand values are incorporated into your
                website, and through design elements, we establish a unique
                visual identity for your ecommerce website.
              </p>

              <button className="readMore">Read More</button>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCard-head text-center">
              <h2>Attractive Design</h2>
            </div>
            <div className="serviceCard-body">
              <p>
                With BrandLoom, you get visually appealing and clean websites
                that make the browsing experience pleasant. Our designs resonate
                with your customers, and they come back again.
              </p>
              <br />
              <p>
                With top-notch graphics and high-quality elements, our websites
                also ensure that your products look appealing to the customers,
                which helps them make the right purchase decisions.
              </p>

              <button className="readMore">Read More</button>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCard-head text-center">
              <h2>Efficient User Interface</h2>
            </div>
            <div className="serviceCard-body">
              <p>
                It is crucial that your website has the perfect user interface
                for your customers. We make sure that your website is responsive
                and that the user interface is adaptable across a range of
                devices- laptops, phones and tablets.
              </p>
              <br />
              <p>
                Since today more people surf the net via mobiles, we make sure
                that your website is adaptable for different screen sizes and
                resolutions, so that you can increase your reach among the
                target audience and increase conversion rates.
              </p>

              <button className="readMore">Read More</button>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCard-head text-center">
              <h2>Better Brand Visibility</h2>
            </div>
            <div className="serviceCard-body">
              <p>
                We make sure that the coding for your website is efficient and
                the website is so optimized so that it features at the top of
                search engine rankings for keyword searches for relevant
                products and services. Since an ecommerce website hosts multiple
                offerings, it is crucial that your website is optimized to
                feature on the first page of Google search results. Many
                websites may carry same or similar items, but with BrandLoom’s
                efficient ecommerce web development, you can beat out the
                competition with good SEO tactics. We design websites that are
                so structured that they are easily crawled by search engine
                spiders and hence feature prominently in search results.
              </p>

              <button className="readMore">Read More</button>
            </div>
          </div>

          <div className="serviceCard">
            <div className="serviceCard-head text-center">
              <h2>Integrated Sales across all platforms</h2>
            </div>
            <div className="serviceCard-body">
              <p>
                We make sure that your ecommerce operations are well integrated
                and that you can drive sales across all platforms and devices.
              </p>
              <br />
              <p>
                With our responsive design and well-integrated web platforms,
                you can increase your online sales and achieve bottom-line
                growth across all interfaces.
              </p>

              <button className="readMore">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

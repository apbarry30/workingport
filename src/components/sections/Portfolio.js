import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}>
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
              className="img-fluid"
              src="assets/portfolio/meijer.png"
              alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Meijer Speciality Pharmacy</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Meijer</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>5 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>WordPress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://meijerspecialtypharmacy.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/waw-web-gl.png"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>WAW Web GL Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Three.js Build</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>We are Wildlife</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Mapbox</span>
                </li>
              </ul>
            </div>
            <a href="https://wearewildlife.net/discovery-map/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/yourchange.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>YourChange</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>YourChange</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1.5 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF Fields</span>
                </li>
              </ul>
            </div>
            <a href="https://yourchange.app/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/bight.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Bight</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Bight</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>4 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://bightapp.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/asembia.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Asembia</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Asembia</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://asembia.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/urban-solar.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Urban Solar</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Urban Solar</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2.5 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://urbansolar.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}


        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/play2pay.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Play2Pay</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Play2Pay</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://play2pay.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/bensoffer.png"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Dr. Ben</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Dr. Ben Soffer</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://www.drbensoffer.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/hue-it.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Hue IT</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Charles Donahue</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1.5 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://www.hueit.com" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/gulfstream.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Gulfstream Schools</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Gulfstream Schools</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>4 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://gulfstreamschool.org/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/arden.png"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Arden FL</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>Lennar</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>2 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://ardenfl.com/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img
                className="img-fluid"
                src="assets/portfolio/crypto-famous.jpg"
                alt="Image Project"
            />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>AllFamous</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client :
                  </span>
                  <span>AllFamous</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration :
                  </span>
                  <span>1 month</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks :
                  </span>
                  <span>Wordpress ACF fields</span>
                </li>
              </ul>
            </div>
            <a href="https://allfamous.com" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}



        {/*<SwiperSlide className="single-item swiper-slide">*/}
        {/*  /!* ITEM MAIN CONTENT STARTS *!/*/}
        {/*  <div className="main-content">*/}
        {/*    <div className="videocontainer">*/}
        {/*      <iframe*/}
        {/*        className="youtube-video"*/}
        {/*        src="https://www.youtube.com/embed/AqcjdkPMPJA?enablejsapi=1&version=3&playerapiid=ytplayer"*/}
        {/*        allowFullScreen=""*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* ITEM MAIN CONTENT ENDS *!/*/}
        {/*  /!* ITEM DETAILS STARTS *!/*/}
        {/*  <div className="details">*/}
        {/*    <h4>Youtube Project</h4>*/}
        {/*    <div>*/}
        {/*      <ul>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-regular fa-file-lines" /> Project :*/}
        {/*          </span>*/}
        {/*          <span>Short Film</span>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-regular fa-user" /> Client :*/}
        {/*          </span>*/}
        {/*          <span>Videohive</span>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-regular fa-hourglass" /> Duration :*/}
        {/*          </span>*/}
        {/*          <span>8 months</span>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-solid fa-code-branch" /> Frameworks :*/}
        {/*          </span>*/}
        {/*          <span>After Effects</span>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*    <a href="#" target="_blank" className="custom-btn">*/}
        {/*      <span>*/}
        {/*        preview <i className="fa-solid fa-arrow-up-right-from-square" />*/}
        {/*      </span>*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*  /!* ITEM DETAILS ENDS *!/*/}
        {/*</SwiperSlide>*/}
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        {/*<SwiperSlide className="single-item swiper-slide">*/}
        {/*  /!* ITEM MAIN CONTENT STARTS *!/*/}
        {/*  <div className="main-content">*/}
        {/*    <Swiper*/}
        {/*      {...salimovSlider.portfolioItems}*/}
        {/*      className="swiper swiper-portfolio-item"*/}
        {/*    >*/}
        {/*      <SwiperSlide className="swiper-slide">*/}
        {/*        <img src="assets/portfolio/project-2.jpg" title="img" />*/}
        {/*      </SwiperSlide>*/}
        {/*      <SwiperSlide className="swiper-slide">*/}
        {/*        <img src="assets/portfolio/project-3.jpg" title="img" />*/}
        {/*      </SwiperSlide>*/}
        {/*      <SwiperSlide className="swiper-slide">*/}
        {/*        <img src="assets/portfolio/project-1.jpg" title="img" />*/}
        {/*      </SwiperSlide>*/}
        {/*      <div className="swiper-pagination" />*/}
        {/*    </Swiper>*/}
        {/*  </div>*/}
        {/*  /!* ITEM MAIN CONTENT ENDS *!/*/}
        {/*  /!* ITEM DETAILS STARTS *!/*/}
        {/*  <div className="details">*/}
        {/*    <h4>Slider Project</h4>*/}
        {/*    <div>*/}
        {/*      <ul>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-regular fa-file-lines" /> Project :*/}
        {/*          </span>*/}
        {/*          <span>Mobile App</span>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-regular fa-user" /> Client :*/}
        {/*          </span>*/}
        {/*          <span>Codecanyon</span>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-regular fa-hourglass" /> Duration :*/}
        {/*          </span>*/}
        {/*          <span>3 months</span>*/}
        {/*        </li>*/}
        {/*        <li>*/}
        {/*          <span>*/}
        {/*            <i className="fa-solid fa-code-branch" /> Frameworks :*/}
        {/*          </span>*/}
        {/*          <span>React JS</span>*/}
        {/*        </li>*/}
        {/*      </ul>*/}
        {/*    </div>*/}
        {/*    <a href="#" target="_blank" className="custom-btn">*/}
        {/*      <span>*/}
        {/*        preview <i className="fa-solid fa-arrow-up-right-from-square" />*/}
        {/*      </span>*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*  /!* ITEM DETAILS ENDS *!/*/}
        {/*</SwiperSlide>*/}
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        {/*<SwiperSlide className="single-item swiper-slide">*/}
          {/* ITEM MAIN CONTENT STARTS */}
          {/*<div className="main-content">*/}
          {/*  <a*/}
          {/*    href="https://themeforest.net"*/}
          {/*    target="_blank"*/}
          {/*    className="external"*/}
          {/*  >*/}
          {/*    <img*/}
          {/*      className="img-fluid"*/}
          {/*      src="assets/portfolio/project-3.jpg"*/}
          {/*      alt="External Project"*/}
          {/*    />*/}
          {/*  </a>*/}
          {/*</div>*/}
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          {/*<div className="details">*/}
          {/*  <h4>External Link</h4>*/}
          {/*  <div>*/}
          {/*    <ul>*/}
          {/*      <li>*/}
          {/*        <span>*/}
          {/*          <i className="fa-regular fa-file-lines" /> Project :*/}
          {/*        </span>*/}
          {/*        <span>Advertising</span>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <span>*/}
          {/*          <i className="fa-regular fa-user" /> Client :*/}
          {/*        </span>*/}
          {/*        <span>Envato</span>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <span>*/}
          {/*          <i className="fa-regular fa-hourglass" /> Duration :*/}
          {/*        </span>*/}
          {/*        <span>1 month</span>*/}
          {/*      </li>*/}
          {/*      <li>*/}
          {/*        <span>*/}
          {/*          <i className="fa-solid fa-code-branch" /> Frameworks :*/}
          {/*        </span>*/}
          {/*        <span>Adobe Premiere</span>*/}
          {/*      </li>*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*  <a href="#" target="_blank" className="custom-btn">*/}
          {/*    <span>*/}
          {/*      preview <i className="fa-solid fa-arrow-up-right-from-square" />*/}
          {/*    </span>*/}
          {/*  </a>*/}
          {/*</div>*/}
          {/* ITEM DETAILS ENDS */}
        {/*</SwiperSlide>*/}
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;

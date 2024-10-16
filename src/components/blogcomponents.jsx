
import { BrowserRouter,Route,Routes,Router,Link, Outlet } from 'react-router-dom';
import '../../src/blogs.css'

export const Home=()=> {
   
    return (
      <div className="container pt-3" >
        <div className="row">
          <Link to="lorem-ipsum-dolor-sit-amet-consectetur">
            <article className="best-post">
              <div
                className="best-post-image"
                style={{
                  backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                }}
              ></div>
              <div className="best-post-content">
                <div className="best-post-content-cat">videograper</div>
                <div className="best-post-content-title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>
                <div className="best-post-content-sub">
                  Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                  kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
                  oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
                  bloğunu doldurmak için kullanılır.
                </div>
              </div>
            </article>
          </Link>
          <Link to="lorem-ipsum-dolor-sit">
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
          <Link to="lorem-ipsum-dolor-sit">
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7fa56a51087311.5a227b15ad57a.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
          <Link to="lorem-ipsum-dolor-sit">
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7c8a1e90624231.5e997520e9b9b.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </Link>
          <Outlet/>

        </div>

      </div>
    );
  }
/* content {
    font-family: "Maven Pro", sans-serif;
    text-align: left;
    width: 100%;
    display: block;
    margin: 1rem 0 0 0rem;
    line-height: 1.5;
  }
  content h1,h2,h3 {
    font-family: "Inter", sans-serif;
    margin: 0 !important;
    color: #463939;

  }
   */
 const Postid_1 =()=> {
    return (
      <div className="header">
        <Link to="/blogs" class="back">
          Back
        </Link>
        <div class="main1 container" style={{
          color:"black",
          fontSize:"20px",
          textAlign:"left",
          width:"100%",
          display:"block",
          margin:"1rem 0 0 0rem",
          lineHeight:"2"
          
          
          }}>
          <h5>Desing</h5>
          <h1>Lorem ipsum dolor sit amet, consectet</h1>
          <a href="" class="authorlink">
            Ahmet Aksungur
          </a>
          <figure>
            <img src="https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png" />
          </figure>
          <div class="pl-0 col-md-12 pt-2" style={{color:"#463939"}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              egestas tempor euismod. Suspendisse ac ex diam. Maecenas vitae
              volutpat ex. Proin blandit ante at nisi fringilla, et porttitor
              neque fermentum. Mauris posuere sem non faucibus vestibulum.
              Suspendisse id quam massa. Ut sit amet neque nec nibh faucibus
              pellentesque a quis lorem. Sed varius nisi pretium, luctus magna
              vel, molestie nisl. Suspendisse blandit, ipsum in elementum
              commodo, dui sapien blandit arcu, sit amet volutpat sapien quam
              non urna. Morbi dapibus nisl sit amet orci facilisis mollis.
              Mauris fringilla interdum elementum.
            </p>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Pellentesque at mauris lacinia erat viverra porttitor. Cras magna
              metus, euismod at finibus et, egestas ac erat. Mauris in ipsum sed
              turpis varius porttitor ac vitae erat. Nullam eget condimentum
              metus, nec mollis ex. Nam mollis orci sit amet viverra iaculis. Ut
              facilisis, turpis at ornare ullamcorper, urna mi scelerisque arcu,
              eget tincidunt ante felis et metus. Quisque gravida ipsum id ex
              vehicula, feugiat feugiat ligula tempor. Duis non tellus eros.
              Vivamus sollicitudin, mauris ut facilisis mollis, odio augue
              pellentesque tellus, eget facilisis sem purus auctor diam. Ut at
              feugiat nulla. Praesent congue tincidunt dolor a ornare.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>

            <p>
              Aliquam accumsan purus lobortis facilisis ullamcorper. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Nulla pharetra, nisl in placerat ultricies, sapien
              odio placerat leo, vitae pellentesque purus purus eu leo. Proin
              dapibus sapien leo. Duis viverra faucibus sapien, quis interdum
              erat lacinia vitae. Suspendisse non viverra urna. Sed elit erat,
              vulputate id ex eget, faucibus varius urna. Etiam viverra aliquet
              orci, non viverra ipsum pulvinar eget. Pellentesque vitae egestas
              ligula. Pellentesque accumsan interdum felis eu aliquam.
            </p>

            <p>
              Mauris mollis efficitur odio sed congue. In pulvinar fermentum
              malesuada. Integer blandit ipsum in lorem egestas, et fermentum
              nunc porta. Pellentesque pellentesque faucibus ligula sed
              bibendum. Nullam ut felis magna. Ut eget sollicitudin turpis.
              Donec ultrices aliquet ante sed tincidunt. Aliquam purus massa,
              auctor a maximus nec, finibus et nunc. Sed erat mi, sagittis eu
              lectus a, accumsan scelerisque sem.
            </p>

            <p>
              Sed est ex, ultricies sed ornare non, aliquet sed lorem. Sed
              vulputate tortor eget augue scelerisque, ut sagittis enim
              interdum. Donec nisi lectus, lobortis ut justo sit amet,
              pellentesque gravida nibh. Donec eget ante tincidunt, sagittis
              sapien vestibulum, vestibulum metus. Nullam ultrices lectus at
              tincidunt rhoncus. Nullam sed faucibus risus. Praesent id arcu
              dictum, bibendum urna at, egestas neque.
            </p>
          </div>
        </div>
      </div>
    );
  }
 const Postid_2 =()=> {
  
    return (
      <div className="header">
        <Link to="/blogs" class="back">
          Back
        </Link>
        <div class="main1 container">
          <h5>Desing</h5>
          <h1>Life Of Architecture Blog Detail</h1>
          <a href="#" class="authorlink">
            Ahmet Aksungur
          </a>
          <figure>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg" />
          </figure>
          <div class="pl-0 col-md-12 pt-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              egestas tempor euismod. Suspendisse ac ex diam. Maecenas vitae
              volutpat ex. Proin blandit ante at nisi fringilla, et porttitor
              neque fermentum. Mauris posuere sem non faucibus vestibulum.
              Suspendisse id quam massa. Ut sit amet neque nec nibh faucibus
              pellentesque a quis lorem. Sed varius nisi pretium, luctus magna
              vel, molestie nisl. Suspendisse blandit, ipsum in elementum
              commodo, dui sapien blandit arcu, sit amet volutpat sapien quam
              non urna. Morbi dapibus nisl sit amet orci facilisis mollis.
              Mauris fringilla interdum elementum.
            </p>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              Pellentesque at mauris lacinia erat viverra porttitor. Cras magna
              metus, euismod at finibus et, egestas ac erat. Mauris in ipsum sed
              turpis varius porttitor ac vitae erat. Nullam eget condimentum
              metus, nec mollis ex. Nam mollis orci sit amet viverra iaculis. Ut
              facilisis, turpis at ornare ullamcorper, urna mi scelerisque arcu,
              eget tincidunt ante felis et metus. Quisque gravida ipsum id ex
              vehicula, feugiat feugiat ligula tempor. Duis non tellus eros.
              Vivamus sollicitudin, mauris ut facilisis mollis, odio augue
              pellentesque tellus, eget facilisis sem purus auctor diam. Ut at
              feugiat nulla. Praesent congue tincidunt dolor a ornare.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>

            <p>
              Aliquam accumsan purus lobortis facilisis ullamcorper. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia Curae; Nulla pharetra, nisl in placerat ultricies, sapien
              odio placerat leo, vitae pellentesque purus purus eu leo. Proin
              dapibus sapien leo. Duis viverra faucibus sapien, quis interdum
              erat lacinia vitae. Suspendisse non viverra urna. Sed elit erat,
              vulputate id ex eget, faucibus varius urna. Etiam viverra aliquet
              orci, non viverra ipsum pulvinar eget. Pellentesque vitae egestas
              ligula. Pellentesque accumsan interdum felis eu aliquam.
            </p>

            <p>
              Mauris mollis efficitur odio sed congue. In pulvinar fermentum
              malesuada. Integer blandit ipsum in lorem egestas, et fermentum
              nunc porta. Pellentesque pellentesque faucibus ligula sed
              bibendum. Nullam ut felis magna. Ut eget sollicitudin turpis.
              Donec ultrices aliquet ante sed tincidunt. Aliquam purus massa,
              auctor a maximus nec, finibus et nunc. Sed erat mi, sagittis eu
              lectus a, accumsan scelerisque sem.
            </p>

            <p>
              Sed est ex, ultricies sed ornare non, aliquet sed lorem. Sed
              vulputate tortor eget augue scelerisque, ut sagittis enim
              interdum. Donec nisi lectus, lobortis ut justo sit amet,
              pellentesque gravida nibh. Donec eget ante tincidunt, sagittis
              sapien vestibulum, vestibulum metus. Nullam ultrices lectus at
              tincidunt rhoncus. Nullam sed faucibus risus. Praesent id arcu
              dictum, bibendum urna at, egestas neque.
            </p>
          </div>
        </div>
      </div>
    );
  }
  export default Home;
  export {Postid_1,Postid_2}
  import React from 'react'
  
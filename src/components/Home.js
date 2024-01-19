import img from './images/img-1.jpeg'
import Footer from './Footer';
function Home() {
    return (
        <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
  
          <div class="carousel-inner">
  
            <div class="carousel-item active " data-bs-interval="3000">
              
              <img src={img} class="d-block w-100 image-fluid slider-img" alt="..."></img>
              <div class="bg-overlay"></div>
              <div class="carousel-caption text-center">
                <div class="fadeInUp">
                  <span class="strong"
                ><a href="#" class="business" id="business1"
                  >Business</a
                >
              </span>
                </div>
              <h1 class="fadeInUp">Explore The New World of Creativity</h1>
              <div>
                <button type="button" class="btn btn-primary fadeInUp">Explore</button>
                <button type="button" class="btn btn-light fadeInUp">Purchase</button>
              </div>
              </div>
            </div>
  
      
            
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      
      <div>
      <Footer />
      </div>
      </header>

      
    );
  }
  
  export default Home;
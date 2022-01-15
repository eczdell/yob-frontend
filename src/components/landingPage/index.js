
import React from 'react';
import './index.css';

const icons = ['dashboard', 'monitoring'];
const badges = ["Taxi", 'Beta'];

{/* <script>
$(document).ready(function(){
// Highlight bottom nav links
var clickEvent = false;
$("#myCarousel").on("click", ".nav a", function(){
  clickEvent = true;
$(this).parent().siblings().removeClass("active");
$(this).parent().addClass("active");		
}).on("slid.bs.carousel", function(e){
if(!clickEvent){
  itemIndex = $(e.relatedTarget).index();
targetNavItem = $(".nav li[data-slide-to='" + itemIndex + "']");
$(".nav li").not(targetNavItem).removeClass("active");
targetNavItem.addClass("active");
}
clickEvent = false;
});
});
</script> */}

export default () => (
  <div>


    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            {/* <!-- Wrapper for carousel items --> */}
            <div class="carousel-inner">
              <div class="item active">
                <img src="/examples/images/slides/notebook.jpg" alt=""/>
                  <div class="carousel-caption">
                    <h3>Amazing Digital Experience</h3>
                    <p>Pulvinar leo id risus pellentesque vestibulum. Sed diam libero, sodales eget sapien bibendum.</p>
                  </div>
              </div>
              <div class="item">
                <img src="/examples/images/slides/tablet.jpg" alt=""/>
                  <div class="carousel-caption">
                    <h3>Live Monitoring Tools</h3>
                    <p>Nullam hendrerit justo non leo aliquet imperdiet. Etiam sagittis lectus condime dapibus vitae.</p>
                  </div>
              </div>
              <div class="item">
                <img src="/examples/images/slides/workstation.jpg" alt=""/>
                  <div class="carousel-caption">
                    <h3>Attractive Pricing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque tempor quis.</p>
                  </div>
              </div>
              <div class="item">
                <img src="/examples/images/slides/report.jpg" alt=""/>
                  <div class="carousel-caption">
                    <h3>Award Winning Support</h3>
                    <p>Nullam hendrerit justo non leo aliquet imperdiet. Etiam in sagittis lectus ultrices placerat.</p>
                  </div>
              </div>
            </div>
            {/* <!-- End Carousel Inner --> */}
            <ul class="nav nav-pills nav-justified">
              <li data-target="#myCarousel" data-slide-to="0" class="nav-item active"><a href="#"><strong>About</strong>Lorem ipsum dolor sit amet</a></li>
              <li data-target="#myCarousel" data-slide-to="1" class="nav-item"><a href="#"><strong>Features</strong> Nesciunt stumpown odio aliqua</a></li>
              <li data-target="#myCarousel" data-slide-to="2" class="nav-item"><a href="#"><strong>Pricing</strong> Oullam hendrerit justom leow</a></li>
              <li data-target="#myCarousel" data-slide-to="3" class="nav-item"><a href="#"><strong>Support</strong> Proin suscipit non adipiscing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
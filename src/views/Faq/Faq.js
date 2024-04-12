import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Faq.css'

function Faq() {
  return (
    
    <div>
      <Navbar/>
      <div className='faq-container'>
        <div className='faq-items'>
          <p>Shopping Information</p>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Delivery charges for orders from the Online Shop?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">A placerat ac vestibulum integer vehicula suspendisse nostra aptent fermentum tempor a magna erat ligula parturient curae sem conubia vestibulum ac inceptos sodales condimentum cursus nunc mi consectetur condimentum.

Tristique parturient nulla ullamcorper at ullamcorper non orci iaculis neque augue</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How long will delivery take?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Parturient ullamcorper et sagittis faucibus dui eu tortor ac parturient ridiculus vel hac condimentum scelerisque libero class.

Pulvinar in dictumst suspendisse ullamcorper cras cum urna eget nibh facilisi eu a vestibulum morbi porttitor platea metus vestibulum.Ante ullamcorper adipiscing..</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What exactly happens after ordering?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Parturient viverra enim torquent elit sociosqu sociis consectetur pretium suspendisse sem scelerisque risus magna est consectetur ullamcorper nunc.

Porta sapien nulla maecenas quis condimentum curabitur suscipit dolor est phasellus dui sociis fringilla a dignissim quisque ullamcorper nec eu eros.Elit consectetur non parturient tempus adipiscing nullam metus.</div>
      <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Do I receive an invoice for my order?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Et malesuada fermentum fames dapibus ac accumsan a varius nibh suspendisse bibendum a at fames sed nibh ullamcorper himenaeos litora egestas pulvinar at id egestas sapien mattis et eros.Scelerisque urna a leo parturient lacinia a purus hac.

.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #5
      </button>
    </h2>
    </div>
  </div>
</div>

        </div>
        <div className='faq-items'>
          

        </div>

      </div>
     
    </div>
  )
}

export default Faq
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<body>
  <section class="blk-sect">
    <div class="container-width">
      <div class="blk-title">Blocks
      </div>
      <div class="blk-desc">Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style
      </div>
      <div class="price-cards">
        <div class="price-card-cont">
          <div class="price-card pc-enterprise">
            <div class="pc-title">Enterprise
            </div>
            <div class="pc-desc" id="i41xs">Some random list
            </div>
            <div class="pc-feature odd-feat">+ Enterprise feature 1
            </div>
            <div class="pc-feature">+ Enterprise feature 2
            </div>
            <div class="pc-feature odd-feat">+ Enterprise feature 3
            </div>
            <div class="pc-feature" id="iv1uo">+ Enterprise feature 4
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bdg-sect">
    <div class="container-width">
    </div>
  </section>
</body>
  )
}

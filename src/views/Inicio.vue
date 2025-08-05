<template>
  <div>
    <div class="containerCarru">
      <div class="container-carrusel">
        <div>
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="/public/WMNS+AIR+JORDAN+1+MID+SE.avif" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/WMNS+AIR+JORDAN+1+MID.avif" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="/public/copia.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card" style="width: 25rem">
        <img src="/public/nike1.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Camisas nike</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 89900 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 25rem">
        <img src="/public/nike2.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Camisas nike</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 89 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 25rem">
        <img src="/public/nike3.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Camisas nike</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 100 })"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
    <div class="titulo">
      <h1>Apartado de ropa deportiva</h1>
    </div>
    <div class="containerPadre">
      <div class="container1">
        <div class="circuloIMG">
          <img src="/public/logoNike.webp" alt="" />
        </div>
      </div>
      <div class="container2">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/public/entrenamiento.jpeg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/public/entrenamiento2.avif" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/public/entrenamiento1.avif" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="Seccion-Deportiva">
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 200 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 900 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 50 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 77 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 22 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 78 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 900 })"
          >
            Comprar
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card’s
            content.
          </p>
          <a
            href="#"
            class="btn btn-primary"
            @click.prevent="agregarAlCarrito({ nombre: 'Camisas nike', precio: 222 })"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
    <!-- CARRITO FLOTANTE -->
    <div
      class="carrito-flotante"
      :style="{ left: posX + 'px', top: posY + 'px' }"
      @mousedown="startDrag"
      @click.stop="toggleCarrito"
    >
      <h5>🛍️ Carrito ({{ cantidadTotal }})</h5>

      <div v-if="mostrarCarrito">
        <ul>
          <li v-for="(item, index) in carrito" :key="index">
            {{ item.nombre }} - ${{ item.precio }}
          </li>
        </ul>
        <p>
          <strong>Total: ${{ totalCarrito }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      carrito: [],
      mostrarCarrito: false, // si se muestra o no el contenido del carrito
      posX: 100,
      posY: 100,
      dragging: false,
      offsetX: 0,
      offsetY: 0,
    }
  },
  computed: {
    cantidadTotal() {
      return this.carrito.length
    },
    totalCarrito() {
      return this.carrito.reduce((acc, item) => acc + item.precio, 0)
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    agregarAlCarrito(producto) {
      this.carrito.push({ ...producto })
    },
    toggleCarrito() {
      this.mostrarCarrito = !this.mostrarCarrito
    },
    handleClickOutside(e) {
      const carrito = this.$el.querySelector('.carrito-flotante')
      if (carrito && !carrito.contains(e.target)) {
        this.mostrarCarrito = false
      }
    },
    startDrag(e) {
      this.dragging = true
      this.offsetX = e.clientX - this.posX
      this.offsetY = e.clientY - this.posY
      document.addEventListener('mousemove', this.onDrag)
      document.addEventListener('mouseup', this.stopDrag)
    },
    onDrag(e) {
      if (this.dragging) {
        this.posX = e.clientX - this.offsetX
        this.posY = e.clientY - this.offsetY
      }
    },
    stopDrag() {
      this.dragging = false
      document.removeEventListener('mousemove', this.onDrag)
      document.removeEventListener('mouseup', this.stopDrag)
    },
  },
}
</script>

<style>
/* Contenedor general del carrusel */
.containerCarru {
  background: #eaeaea;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilo del carrusel */
.container-carrusel {
  width: 60%;
  max-width: 800px;
  height: 400px;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Imagen del carrusel */
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Contenedor de tarjetas */
.cards {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 40px;
  gap: 20px;
  flex-wrap: wrap;
}

/* Estilo individual de cada tarjeta */
.card {
  transition: transform 0.3s ease;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  padding: 15px;
  position: relative; /* ← para asegurar que no se sobreponga nada mal */
  z-index: 1;
}

/* Efecto hover individual */
.card:hover {
  background-color: rgba(201, 201, 201, 0.788);
  cursor: pointer;
  transform: scale(1.05);
}

/* Imagen dentro de cada tarjeta */
.cards .card-img-top {
  width: 100%;
  height: 150px;
  object-fit: contain;
  background-color: transparent;
}

.titulo {
  text-align: center;
}

hr {
  width: 80%;
  margin: 40px auto 20px;
  border: 1px solid black;
}

/* Contenedor doble lado a lado */
.containerPadre {
  width: 100%;
  height: 500px;
  display: flex;
}

.container1,
.container2 {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-item img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
/* Imagen circular */
.circuloIMG {
  width: 60vw;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circuloIMG img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carrito-flotante {
  position: fixed;
  background: white;
  border: 2px solid #333;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  max-width: 250px;
  max-height: 350px;
  overflow-y: auto;
  cursor: pointer;
  user-select: none;
}

/* Sección deportiva */
.Seccion-Deportiva {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* Responsive: tarjetas en columna en móviles */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .containerPadre {
    flex-direction: column;
    align-items: center;
  }
}
</style>

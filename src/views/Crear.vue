<template>
  <div class="customizer-app">
    <div class="container-fluid">
      <div class="row min-vh-100">
        <!-- Panel de herramientas -->
        <div class="col-12 col-md-6 bg-light p-4 order-2 order-md-1">
          <div class="tools-panel">
            <h3 class="mb-4 text-dark">Personaliza tu producto</h3>
            
            <!-- Selector de producto -->
            <div class="mb-4">
              <h5 class="text-dark">Elige tu producto:</h5>
              <div class="btn-group w-100" role="group">
                <button 
                  type="button" 
                  class="btn"
                  :class="selectedProduct === 'shirt' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="selectedProduct = 'shirt'"
                >
                  👕 Camisa
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="selectedProduct === 'shoe' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="selectedProduct = 'shoe'"
                >
                  👟 Tenis
                </button>
              </div>
            </div>

            <!-- Paleta de colores -->
            <div class="mb-4">
              <h5 class="text-dark">Colores:</h5>
              <div class="colors-grid">
                <div 
                  v-for="color in colors" 
                  :key="color"
                  class="color-circle"
                  :style="{ backgroundColor: color }"
                  @click="selectedColor = color"
                  :class="{ 'selected': selectedColor === color }"
                ></div>
              </div>
              <small class="text-muted d-block mt-2">Color seleccionado: {{ selectedColor }}</small>
            </div>

            <!-- Pegatinas -->
            <div class="mb-4">
              <h5 class="text-dark">Pegatinas:</h5>
              <div class="stickers-grid">
                <button 
                  v-for="sticker in stickers" 
                  :key="sticker.id"
                  class="btn btn-outline-secondary btn-sm sticker-btn"
                  @click="addSticker(sticker)"
                >
                  {{ sticker.emoji }} {{ sticker.name }}
                </button>
              </div>
            </div>

            <!-- Partes editables -->
            <div class="mb-4" v-if="selectedProduct">
              <h5 class="text-dark">Partes a editar:</h5>
              <div class="parts-grid">
                <button 
                  v-for="part in getEditableParts()" 
                  :key="part"
                  class="btn btn-sm part-btn"
                  :class="selectedPart === part ? 'btn-success' : 'btn-outline-success'"
                  @click="selectedPart = part"
                >
                  {{ part }}
                </button>
              </div>
              <small class="text-muted d-block mt-2">Selecciona una parte y luego un color</small>
            </div>

            <!-- Botones de acción -->
            <div class="mb-3">
              <button 
                class="btn btn-warning w-100 mb-2"
                @click="applyColor"
                :disabled="!selectedPart || !selectedColor"
              >
                Aplicar Color a {{ selectedPart || 'Parte' }}
              </button>
              <button class="btn btn-secondary w-100" @click="resetProduct">
                Resetear Producto
              </button>
            </div>
          </div>
        </div>

        <!-- Vista del producto -->
        <div class="col-12 col-md-6 bg-white p-4 d-flex align-items-center justify-content-center order-1 order-md-2">
          <div class="product-display text-center">
            <h4 class="mb-4 text-dark">{{ selectedProduct === 'shirt' ? '👕 Camisa' : '👟 Tenis' }}</h4>
            
            <!-- Camisa SVG -->
            <div v-if="selectedProduct === 'shirt'" class="product-wrapper">
              <svg width="280" height="320" viewBox="0 0 280 320" class="product-svg">
                <!-- Cuerpo de la camisa -->
                <path 
                  d="M40 90 L40 300 L240 300 L240 90 L210 90 L210 70 L190 50 L90 50 L70 70 L70 90 Z" 
                  :fill="productColors.body"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Cuerpo')"
                  class="part-clickable"
                />
                <!-- Mangas -->
                <ellipse 
                  cx="30" cy="120" rx="20" ry="35" 
                  :fill="productColors.sleeves"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Mangas')"
                  class="part-clickable"
                />
                <ellipse 
                  cx="250" cy="120" rx="20" ry="35" 
                  :fill="productColors.sleeves"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Mangas')"
                  class="part-clickable"
                />
                <!-- Cuello -->
                <path 
                  d="M90 50 L90 70 L190 70 L190 50 Q140 30 90 50" 
                  :fill="productColors.collar"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Cuello')"
                  class="part-clickable"
                />
                <!-- Pegatinas -->
                <text 
                  v-for="(sticker, index) in shirtStickers" 
                  :key="index"
                  :x="sticker.x" 
                  :y="sticker.y" 
                  font-size="20"
                  @click="removeSticker('shirt', index)"
                  class="sticker-element"
                >
                  {{ sticker.emoji }}
                </text>
              </svg>
            </div>

            <!-- Tenis SVG -->
            <div v-if="selectedProduct === 'shoe'" class="product-wrapper">
              <svg width="320" height="180" viewBox="0 0 320 180" class="product-svg">
                <!-- Suela -->
                <ellipse 
                  cx="160" cy="150" rx="110" ry="20" 
                  :fill="productColors.sole"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Suela')"
                  class="part-clickable"
                />
                <!-- Cuerpo del zapato -->
                <path 
                  d="M50 150 Q50 100 90 80 L230 80 Q270 100 270 150 Q270 140 230 130 L90 130 Q50 140 50 150" 
                  :fill="productColors.body"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Cuerpo')"
                  class="part-clickable"
                />
                <!-- Lengüeta -->
                <rect 
                  x="125" y="60" width="70" height="35" rx="8"
                  :fill="productColors.tongue"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Lengüeta')"
                  class="part-clickable"
                />
                <!-- Cordones -->
                <line x1="110" y1="100" x2="150" y2="80" stroke="#333" stroke-width="2"/>
                <line x1="170" y1="80" x2="210" y2="100" stroke="#333" stroke-width="2"/>
                <line x1="120" y1="120" x2="160" y2="100" stroke="#333" stroke-width="2"/>
                <line x1="160" y1="100" x2="200" y2="120" stroke="#333" stroke-width="2"/>
                <!-- Puntera -->
                <path 
                  d="M230 80 Q270 100 270 150 Q260 130 230 130 Z" 
                  :fill="productColors.toe"
                  stroke="#333" 
                  stroke-width="2"
                  @click="selectPart('Puntera')"
                  class="part-clickable"
                />
                <!-- Pegatinas -->
                <text 
                  v-for="(sticker, index) in shoeStickers" 
                  :key="index"
                  :x="sticker.x" 
                  :y="sticker.y" 
                  font-size="18"
                  @click="removeSticker('shoe', index)"
                  class="sticker-element"
                >
                  {{ sticker.emoji }}
                </text>
              </svg>
            </div>

            <p class="text-muted mt-3 small">Haz clic en las partes para seleccionarlas</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const selectedProduct = ref('shirt')
const selectedColor = ref('#ff0000')
const selectedPart = ref('')

const colors = [
  '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff',
  '#ffa500', '#800080', '#ffc0cb', '#a52a2a', '#808080', '#000000'
]

const stickers = [
  { id: 1, name: 'Estrella', emoji: '⭐' },
  { id: 2, name: 'Corazón', emoji: '❤️' },
  { id: 3, name: 'Rayo', emoji: '⚡' },
  { id: 4, name: 'Fuego', emoji: '🔥' },
  { id: 5, name: 'Diamante', emoji: '💎' },
  { id: 6, name: 'Corona', emoji: '👑' }
]

const productColors = reactive({
  body: '#ffffff',
  sleeves: '#ffffff',
  collar: '#ffffff',
  sole: '#ffffff',
  tongue: '#ffffff',
  toe: '#ffffff'
})

const shirtStickers = ref([])
const shoeStickers = ref([])

const getEditableParts = () => {
  if (selectedProduct.value === 'shirt') {
    return ['Cuerpo', 'Mangas', 'Cuello']
  } else {
    return ['Cuerpo', 'Suela', 'Lengüeta', 'Puntera']
  }
}

const selectPart = (part) => {
  selectedPart.value = part
}

const applyColor = () => {
  if (selectedPart.value && selectedColor.value) {
    const partMap = {
      'Cuerpo': 'body',
      'Mangas': 'sleeves',
      'Cuello': 'collar',
      'Suela': 'sole',
      'Lengüeta': 'tongue',
      'Puntera': 'toe'
    }
    productColors[partMap[selectedPart.value]] = selectedColor.value
  }
}

const addSticker = (sticker) => {
  const newSticker = {
    ...sticker,
    x: Math.random() * 180 + 80,
    y: Math.random() * 80 + 120
  }
  
  if (selectedProduct.value === 'shirt') {
    shirtStickers.value.push(newSticker)
  } else {
    shoeStickers.value.push(newSticker)
  }
}

const removeSticker = (product, index) => {
  if (product === 'shirt') {
    shirtStickers.value.splice(index, 1)
  } else {
    shoeStickers.value.splice(index, 1)
  }
}

const resetProduct = () => {
  Object.keys(productColors).forEach(key => {
    productColors[key] = '#ffffff'
  })
  shirtStickers.value = []
  shoeStickers.value = []
  selectedPart.value = ''
}
</script>

<style scoped>
.customizer-app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.tools-panel {
  max-width: 100%;
}

.colors-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.color-circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.2s ease;
}

.color-circle:hover {
  transform: scale(1.1);
  border-color: #333;
}

.color-circle.selected {
  border-color: #333;
  box-shadow: 0 0 8px rgba(0,0,0,0.4);
}

.stickers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sticker-btn {
  font-size: 12px;
  padding: 4px 8px;
}

.parts-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.part-btn {
  font-size: 12px;
  padding: 4px 12px;
}

.product-wrapper {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: inline-block;
}

.product-svg {
  max-width: 100%;
  height: auto;
}

.part-clickable {
  cursor: pointer;
  transition: all 0.2s ease;
}

.part-clickable:hover {
  stroke-width: 3;
  filter: brightness(0.9);
}

.sticker-element {
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease;
}

.sticker-element:hover {
  transform: scale(1.2);
}

@media (max-width: 767px) {
  .col-12 {
    min-height: 50vh;
  }
  
  .colors-grid {
    justify-content: center;
  }
  
  .product-wrapper {
    padding: 15px;
  }
}
</style>

<template>
  <div
    class="floating-cart"
    :style="{ top: position.y + 'px', left: position.x + 'px' }"
    @mousedown="startDrag"
  >
    <h5>🛒 Carrito ({{ cart.length }})</h5>
    <ul>
      <li v-for="(item, index) in cart" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  data() {
    return {
      position: { x: 100, y: 100 },
      dragging: false,
      offset: { x: 0, y: 0 }
    };
  },
  methods: {
    startDrag(e) {
      this.dragging = true;
      this.offset.x = e.clientX - this.position.x;
      this.offset.y = e.clientY - this.position.y;
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    },
    onDrag(e) {
      if (this.dragging) {
        this.position.x = e.clientX - this.offset.x;
        this.position.y = e.clientY - this.offset.y;
      }
    },
    stopDrag() {
      this.dragging = false;
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    }
  }
};
</script>

<style scoped>
.floating-cart {
  position: absolute;
  width: 200px;
  background: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  cursor: move;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}
</style>

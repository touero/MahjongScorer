<template>
  <view class="user-image-container">
    <image class="user-image" src="/static/mine.png" mode="aspectFill" />
    <button>Login</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
</script>

<style>
.user-image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  padding: 20px;
  box-sizing: border-box; 
}

.user-image {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}

button {
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  background-color: #45a049;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
}

button:active {
  background-color: #3e8e41;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transform: translateY(2px);
}

</style>

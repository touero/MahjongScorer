<template>
  <view class="table">
    <view class="table-header">
      <view class="table-row">
        <text class="table-cell">User</text>
        <text class="table-cell">Score</text>
        <text class="table-cell">Action</text>
      </view>
    </view>
    <view class="table-body">
      <view class="table-row" v-for="(user, index) in users" :key="index">
        <view class="table-cell">
          <view class="user-image-container">
            <image class="user-image" :src="user.image" mode="aspectFill" />
            <text class="user-name">{{ user.name }}</text>
          </view>
        </view>
        <text class="table-cell">{{ user.score }}</text>
        <view class="table-cell">
          <view class="user-image-container">
            <button>
              <image class="action-icon" src="/static/give.png" mode="aspectFit" />
            </button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const users = ref([
  { name: 'User1', score: 100, image: '/static/usericon1.jpg' },
  { name: 'User2', score: 95, image: '/static/usericon2.jpg' },
  { name: 'User3', score: 90, image: '/static/usericon3.jpg' },
  { name: 'User4', score: 85, image: '/static/usericon4.png' }
])
</script>

<style>
.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.table-header {
  background-color: #f0f0f0;
  text-align: center;
}

.table-row {
  display: flex;
}

.table-cell {
  flex: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
}

.user-image-container {
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-size: 24rpx;
  color: #333;
  margin-top: 8rpx;
}

.action-icon {
  width: 70rpx;
  height: 70rpx;
  padding: 0;
}

button {
  background: none;
  border: none;
  outline: none; 
  padding: 0;
}
</style>

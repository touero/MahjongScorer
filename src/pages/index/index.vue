<template>
  <view class="table">
    <view class="table-header">
      <view class="table-row">
        <text class="table-cell">User</text>
        <text class="table-cell">Score</text>
        <text class="table-cell">Give</text>
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
        <text class="table-cell" style="font-size: 70rpx;" >{{ user.name === currentUser.name ? currentUser.score : user.score }}</text>
        <view class="table-cell">
          <input 
            :disabled="currentUser.name === user.name" 
            v-model="user.giveValue" 
          />
        </view>
        <view class="table-cell">
          <view class="user-image-container">
            <button @click="giveScore(user)">
              <image class="action-icon" src="/static/give.png" mode="aspectFit" />
            </button>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface User {
  name: string;
  score: number;
  image: string;
  giveValue?: string;
}

const users = ref<User[]>([
  { name: 'User1', score: 0, image: '/static/usericon1.jpg' },
  { name: 'User2', score: 0, image: '/static/usericon2.jpg' },
  { name: 'User3', score: 0, image: '/static/usericon3.jpg' },
  { name: 'User4', score: 0, image: '/static/usericon4.png' }
]);

const currentUser = reactive<User>({ 
  name: 'User1', 
  score: 0, 
  image: '/static/usericon1.jpg' 
});

const giveScore = (user: User) => {
  const amount = parseInt(user.giveValue || '0');
  if (!isNaN(amount) && amount > 0) {
    user.score += amount;
    currentUser.score -= amount; // 更新 currentUser 的分数
    user.giveValue = ''; // 清空输入框
  } 
}
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

input {
  width: 60%;
  padding: 10rpx;
  border: 1px solid #ccc;
  border-radius: 10rpx;
  outline: none;
}

input:focus {
  border-color: #007bff; 
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

</style>

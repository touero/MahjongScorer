<template>
  <view class="user-image-container">
    <image class="user-image" :src="userAvatar" mode="aspectFill" />
    <button @click="loginWithWeChat">Login</button>
  </view>
</template>


<script setup lang="ts">
import { ref } from 'vue'

// 设置自己的头像 URL
const defaultAvatar = '/static/mine.png' // 替换为你自己的头像路径
const userAvatar = ref(defaultAvatar) // 初始值设置为自己的头像

// 微信登录并获取头像和昵称
const loginWithWeChat = () => {
  // 调用微信登录
  wx.login({
    success(res) {
      if (res.code) {
        // 使用 wx.getUserProfile 获取用户的头像和昵称
        wx.getUserProfile({
          desc: '用于完善用户资料', // 必填，获取用户信息时的提示
          success(profileRes) {
            const { avatarUrl, nickName } = profileRes.userInfo
            userAvatar.value = avatarUrl // 设置用户头像

            // 提示用户登录成功
            uni.showToast({ title: `欢迎, ${nickName}`, icon: 'none' })
          },
          fail() {
            uni.showToast({ title: '获取用户信息失败', icon: 'none' })
          }
        })
      } else {
        uni.showToast({ title: '微信登录失败', icon: 'none' })
      }
    },
    fail() {
      uni.showToast({ title: '微信登录接口调用失败', icon: 'none' })
    }
  })
}
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

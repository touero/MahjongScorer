import { defineComponent, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('欢迎使用MarjangScorer');

  return {
    greeting,
  };
});

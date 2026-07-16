<template>
  <div class="base-container intro" ref="introRef">
    <div class="squares-wrapper" ref="wrapperRef">
      <div class="square" v-for="n in 4" :key="n"></div>
    </div>
    <div class="text-wrapper" ref="textRef"></div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { gsap } from 'gsap';
  import { useQuasar } from 'quasar';
  import { useRouter } from 'vue-router';

  const $q = useQuasar();
  const router = useRouter();

  const introRef = ref<HTMLElement | null>(null);
  const wrapperRef = ref<HTMLElement | null>(null);
  const textRef = ref<HTMLElement | null>(null);

  const codeColors = ['#ff006e', '#3a86ff', '#ffed66', '#16db65', '#d09259'];

  let ctx: gsap.Context;

  onMounted(() => {
    if (!introRef.value || !wrapperRef.value || !textRef.value) return;

    const phrase = 'Код существует';
    const charsHTML = phrase
      .split('')
      .map((char) => (char === ' ' ? `<span>&nbsp;</span>` : `<span class="char">${char}</span>`))
      .join('');

    textRef.value.innerHTML = charsHTML;

    ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          router.push('/game');
        },
      });

      // Шаг 1: Появление контуров квадратов
      tl.from('.square', {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Шаг 2: Рандомная смена цветов
      tl.to('.square', {
        backgroundColor: (index, target) => {
          const availableColors = codeColors.filter((c) => c !== target._lastColor);
          const newColor = gsap.utils.random(availableColors);
          target._rndColor = newColor;
          target._lastColor = newColor;
          return newColor;
        },
        borderColor: (index, target) => target._rndColor,
        duration: 0.4,
        repeat: 2,
        repeatRefresh: true,
        stagger: 0.2,
      });

      // Шаг 3: Заливка янтарным цветом и адаптация фона
      tl.to('.square', {
        backgroundColor: '#fdbc2f',
        duration: 1,
        ease: 'power2.inOut',
      });

      if (!$q.dark.isActive) {
        tl.to(
          introRef.value,
          {
            '--lw-intro-bg-color': '#444',
            duration: 1.5,
            ease: 'power2.inOut',
          },
          '<',
        );
      }

      tl.to(
        '.square',
        {
          borderColor: '#fdbc2f',
          duration: 0.7,
          ease: 'power2.inOut',
        },
        '<0.3',
      );

      // Шаг 4: Пульсирующее янтарное сияние
      tl.to('.square', {
        '--glow-blur': () => `${gsap.utils.random(15, 40)}px`,
        '--glow-spread': () => '4px',
        duration: 0.4,
        repeat: 1,
        repeatRefresh: true,
        ease: 'sine.inOut',
      });

      // Шаг 5: Магнитное слияние квадратов в центр и рост
      tl.add('merge');

      const squares = gsap.utils.toArray('.square') as HTMLElement[];
      const sq0 = squares[0];
      const sq1 = squares[1];
      const sq2 = squares[2];
      const sq3 = squares[3];

      const getXOffset = (el: HTMLElement) => {
        const wrapper = wrapperRef.value;
        if (!wrapper) return 0;
        const wRect = wrapper.getBoundingClientRect();
        const eRect = el.getBoundingClientRect();
        return wRect.left + wRect.width / 2 - (eRect.left + eRect.width / 2);
      };

      tl.set(sq1!, { zIndex: 10 }, 'merge');

      tl.to(
        squares,
        {
          '--glow-blur': () => `${gsap.utils.random(20, 60)}px`,
          '--glow-spread': () => `${gsap.utils.random(4, 15)}px`,
          duration: 0.5,
          repeat: 10,
          repeatRefresh: true,
          ease: 'sine.inOut',
        },
        'merge',
      );

      tl.to(
        [sq1!, sq2!],
        {
          x: (i, el) => getXOffset(el as HTMLElement),
          duration: 0.8,
          ease: 'power2.inOut',
        },
        'merge',
      );

      tl.to(
        [sq0!, sq3!],
        {
          x: (i, el) => getXOffset(el as HTMLElement),
          duration: 1.5,
          ease: 'power2.inOut',
        },
        'merge',
      );

      tl.set(sq2!, { opacity: 0 }, 'merge+=0.8');

      tl.to(
        sq1!,
        {
          scale: 2.5,
          duration: 1.2,
          ease: 'power2.out',
        },
        'merge+=0.8',
      );

      tl.to(
        [sq0!, sq3!],
        {
          opacity: 0,
          duration: 0.3,
          ease: 'none',
        },
        'merge+=1.1',
      );

      // Шаг 6: Превращение в круг с вращением
      tl.to(
        sq1!,
        {
          '--glow-blur': () => `${gsap.utils.random(30, 80)}px`,
          '--glow-spread': () => `${gsap.utils.random(5, 20)}px`,
          duration: 0.5,
          repeat: 2,
          repeatRefresh: true,
          ease: 'sine.inOut',
        },
        '>',
      );

      tl.to(
        sq1!,
        {
          borderRadius: '40%',
          duration: 1.5,
          ease: 'power3.in',
        },
        '<',
      );

      tl.to(
        sq1!,
        {
          rotation: 720,
          duration: 2.1,
          ease: 'power3.in',
        },
        '<',
      );

      // Шаг 7: Световая вспышка (Разрыв центрифуги)
      tl.to(
        sq1!,
        {
          scale: 40,
          backgroundColor: '#fff4cc',
          '--glow-blur': '500px',
          '--glow-spread': '100px',
          duration: 0.6,
          ease: 'power4.in',
        },
        '>-0.8',
      );

      tl.to(
        sq1!,
        {
          opacity: 0,
          duration: 0.2,
        },
        '<0.4',
      );

      if (!$q.dark.isActive && introRef.value) {
        tl.to(
          introRef.value,
          {
            '--lw-intro-bg-color': '#fff',
            duration: 0.2,
            ease: 'none',
          },
          '<',
        );
      }
      // Шаг 8: Появление текста с первичным глитчем
      tl.set(textRef.value, { autoAlpha: 1 }, '<0.2');

      tl.to(
        '.char',
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '<',
      );

      tl.to(
        '.char',
        {
          x: () => gsap.utils.random(-10, 10),
          skewX: () => gsap.utils.random(-20, 20),
          opacity: () => gsap.utils.random(0.4, 1),
          duration: 0.05,
          repeat: 1,
          yoyo: true,
          ease: 'none',
        },
        '>-0.2',
      );

      tl.set('.char', { x: 0, skewX: 0, opacity: 1 });

      // Шаг 9: Финальный глитч и осыпание текста
      tl.add('preFade', '+=1.0');

      tl.to(
        '.char',
        {
          x: () => gsap.utils.random(-12, 12),
          skewX: () => gsap.utils.random(-25, 25),
          scale: () => gsap.utils.random(0.9, 1.1),
          duration: 0.05,
          repeat: 1,
          yoyo: true,
          ease: 'none',
        },
        'preFade',
      );

      tl.set('.char', { x: 0, skewX: 0, scale: 1 });

      tl.to(
        '.char',
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: {
            each: 0.08,
            from: 'random',
          },
          ease: 'power2.in',
        },
        '>0.5',
      );
    }, introRef.value);
  });

  onUnmounted(() => {
    ctx.revert();
  });
</script>

<style scoped lang="scss">
  @use './intro-page.scss' as *;
</style>

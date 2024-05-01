<template>
  <div>
    <hero-section />
    <AboutSection />
    <projects-section />
    <services-section />
    <why-us-section />
    <testimonials-section />
    <last-articles />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "~/pages/index/local-components/HeroSection.vue";
import ServicesSection from "~/pages/index/local-components/ServicesSection.vue";
import AboutSection from "~/pages/index/local-components/AboutSection.vue";
import WhyUsSection from "~/pages/index/local-components/WhyUsSection.vue";
import TestimonialsSection from "~/pages/index/local-components/TestimonialsSection.vue";
import ProjectsSection from "~/pages/index/local-components/ProjectsSection.vue";

if (process.client) {

  const { $gsap, $ScrollTrigger } = useNuxtApp()
  const panels = document.querySelectorAll("[data-bg-color]");
  const body = document.querySelector("body")!

  $gsap.utils.toArray(panels).forEach(function (element) {
    const color = element.getAttribute('data-bg-color')
    // $ScrollTrigger.create({
    //   markers: true,
    //   trigger: element,
    //   start: '+=100',
    //   end: 'bottom' + 300,
    //   onEnter: () => $gsap.to(body, { backgroundColor: color }),
    //   onLeave: () => $gsap.to(body, { backgroundColor: color }),
    //   onLeaveBack: () => $gsap.to(body, { backgroundColor: color }),
    //   onEnterBack: () => $gsap.to(body, { backgroundColor: color })
    // })
  })
}
</script>


<style lang="scss" scoped>
</style>
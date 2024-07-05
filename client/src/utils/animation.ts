import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface AnimationProps {
  [key: string]: any;
}

interface ScrollProps {
  [key: string]: any;
}

export const animateWithGsap = (target: string | Element | null, animationProps: AnimationProps, scrollProps: ScrollProps) => {
  if (!target) return;
  
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    }
  });
};

export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: React.MutableRefObject<THREE.Group>,
  rotationState: number,
  firstTarget: string,
  secondTarget: string,
  animationProps: AnimationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  );
};

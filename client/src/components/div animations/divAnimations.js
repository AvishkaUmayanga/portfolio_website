import { animate } from "framer-motion"

export const bottomToTopAnimation = {
    initial:{
      opacity: 0,
      y: 100
    },
    animate:{ 
      opacity: 1,
      y: 0,
      transition: {duration: 0.5}
    }
}
export const leftToRightAnimation = {
  initial:{
    opacity: 0,
    x: -200
  },
  animate:{ 
    opacity: 1,
    x: 0,
    transition: {duration: 1}
  }
}

export const fadeInAll = {
  initial:{
    opacity: 0,
    scale: 0.5,
  },
  animate: (index) =>({
    opacity: 1,
    scale:1,
    transition:{
      delay: 0.15*index
    }
  })
}

export const fadeInAnimation = {
  initial:{
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale:1,
    transition: {duration: 1}
  }
}

export const fadeAnimation = {
  initial:{
    opacity: 1,
    scale: 1,
  },
  animate:{
    opacity:0.7,
    transition: {duration: 8}
  }
}

export const oddEvenBasedAnim = {
  initial:(index) =>({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
  }),
  animate:{
    opacity: 1,
    x: 0,
    transition: {duration:0.8}
  }
}
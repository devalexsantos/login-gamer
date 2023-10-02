'use client'
import { useKeenSlider } from 'keen-slider/react'
import { Weather } from '@/types/Product'
import Product from '@/components/Product'
import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'

interface SliderProductsProps {
  products: Weather
}

export default function SliderProducts({ products }: SliderProductsProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    breakpoints: {
      '(max-width: 1375px)': {
        slides: { perView: 3, spacing: 5 },
      },
      '(max-width: 685px)': {
        slides: { perView: 1, spacing: 0 },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
  }) {
    const disabeld = props.disabled ? ' arrow--disabled' : ''
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${
          props.left ? 'arrow--left' : 'arrow--right'
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    )
  }

  return (
    <div className="w-[350px] sm:w-auto">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider max-w-4xl">
          {products.Products.map((product, index) => (
            <div
              className={`keen-slider__slide number-slide${index}`}
              key={index}
            >
              <Product product={product.Product} />
            </div>
          ))}
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </div>
  )
}

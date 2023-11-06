import { useEffect, useState } from 'react';
import config from '../config/default.json';

const testimonials = config.testimonials;

const Testimonials = () => {
    const [showTestimonial, setShowTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Interval is up, do something!")
            if (showTestimonial == testimonials.length - 1) setShowTestimonial(0)
            else setShowTestimonial(showTestimonial + 1)
        }, 6000)

        return () => clearInterval(timer)
    })

    return (
        <>
            {testimonials.map((t, i) => (
                <div key={`testimonial-${i}`} className={`absolute flex flex-col gap-3 top-[-90px] transition duration-500 ${i == showTestimonial ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
                    <div className="text-2xl xl:text-3xl">{t.review}</div>
                    <div className="text-lg xl:text-xl">-{t.author}</div>
                </div>
            ))}
        </>
    )
}

export default Testimonials

import CommentCard from './CommentCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    comment:
      'ये कोई instant magic नहीं है, लेकिन कुछ हफ्तों में stamina और control में फर्क साफ़ महसूस हुआ।',
    name: 'संदीप कुमार',
    details: 'उम्र 41 वर्ष • लखनऊ',
  },
  {
    id: 2,
    comment:
      'काम और personal life दोनों में थकान रहती थी। अब energy level balanced लगता है और confidence बढ़ा है।',
    name: 'राजेश मेहता',
    details: 'उम्र 45 वर्ष • अहमदाबाद',
  },
  {
    id: 3,
    comment:
      'मैं premium male wellness product ढूंढ रहा था। यह tonic strength और stamina को naturally support करता है।',
    name: 'विक्रम सिंह',
    details: 'उम्र 36 वर्ष • चंडीगढ़',
  },
  {
    id: 4,
    comment:
      'Age के साथ जो कमजोरी महसूस हो रही थी, उसमें धीरे-धीरे सुधार दिखा। Overall performance बेहतर लग रही है।',
    name: 'मनोज पटेल',
    details: 'उम्र 50 वर्ष • सूरत',
  },
  {
    id: 5,
    comment:
      'पहले जल्दी थकान महसूस होती थी। इसे लेने के बाद एनर्जी और स्टैमिना में अच्छा सुधार लगा। अब ज़्यादा confident महसूस करता हूँ।',
    name: 'रोहित शर्मा',
    details: 'उम्र 32 वर्ष • दिल्ली',
  },
  {
    id: 6,
    comment:
      'Regular use से बॉडी में ताकत और जोश बेहतर लगा। Performance को लेकर जो hesitation था, वो काफी कम हुआ।',
    name: 'अमित वर्मा',
    details: 'उम्र 38 वर्ष • जयपुर',
  },
];

function CommentCardContainer() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-8 text-center text-4xl font-medium xl:text-5xl">
        Testimonials
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        spaceBetween={24}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <CommentCard
              comment={item.comment}
              name={item.name}
              details={item.details}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CommentCardContainer;

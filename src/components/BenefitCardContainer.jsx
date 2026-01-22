import BenefitCard from './BenefitCard';
import {
  BoltIcon,
  PercentBadgeIcon,
  HeartIcon,
  UserIcon,
  Battery100Icon,
} from '@heroicons/react/24/solid';

const benefits = [
  {
    icons: [BoltIcon, PercentBadgeIcon],
    text: 'एनर्जी और स्टैमिना बूस्ट',
  },
  {
    icons: [HeartIcon, PercentBadgeIcon],
    text: 'बेहतर बेड परफॉर्मेंस सपोर्ट',
  },
  {
    icons: [UserIcon, PercentBadgeIcon],
    text: 'मर्दाना ताकत और जोश',
  },
  {
    icons: [Battery100Icon, PercentBadgeIcon],
    text: 'थकान कम, एक्टिव ज्यादा',
  },
];

function BenefitCardContainer() {
  return (
    <section className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      {benefits.map((item, index) => (
        <BenefitCard key={index} icons={item.icons} text={item.text} />
      ))}
    </section>
  );
}

export default BenefitCardContainer;

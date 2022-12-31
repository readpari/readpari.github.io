import c21 from './c21.jpg';
import algor from './algor.jpg';
import chinese from './chinese.jpg';
import gypnos from './gypnos.jpg';
import HP from './HP.jpg';
import kant from './kant.jpg';
import kung from './kung.jpg';
import landau from './landau.jpg';
import think from './think.jpg';

interface BookCoverProps {
  image: string;
  header: string;
}

export const booksArray: BookCoverProps[] = [
  { image: gypnos, header: 'Gypnose for beginners' },
  { image: kant, header: 'Ceitique pure reason' },
  { image: landau, header: 'Quantum mechanics' },
  { image: kung, header: 'Gung fu tutorial' },

  // { image: c21, header: 'C++ in 21 days' },
  // { image: algor, header: 'Alghoritms design' },
  // { image: chinese, header: 'Chinese tutorial' },
  // { image: HP, header: 'harry potter and methods of rationality' },
  // { image: think, header: 'Kahneman' },
];

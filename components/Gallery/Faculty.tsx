import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { facultyData } from '../../components/Data/GalleryData';

const Faculty = () => {

  return (
    <div className={styles.faculty__gallery}>
      <h1>Faculty of Management Sciences</h1>
      <p>“Everything has beauty, but not everyone sees it.” - Confucius</p>
      <div className={styles.gallery__ctn}>
        {facultyData.map((item, index) => {
          return (
            <div className={styles.gallery__img} key={index}>
              <Image src={item.src} alt="images" height={500} width={400} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faculty;

import React from 'react';
import "swiper/css/pagination";
import "swiper/css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import styles from './ps.module.css'
const ProductSlider = ({ data }) => {
    return (
        <div className={styles.main}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                slidesPerView={"auto"}
                spaceBetween={24}

                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={styles.product_swipper}
                style={{ overflow: "visible" }}
            >
                {data &&
                    data.map((item) => (
                        <SwiperSlide key={item.id} className={styles.slider}>
                            <Image className={styles.image} src={item} alt='j' width={100} height={100} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default ProductSlider;

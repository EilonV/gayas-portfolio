import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import iphone from '../assets/images/iphone border.png'

export const ProjectDetails = (project) => {
    return <div className="gallery-modal flex active">
        <div className="project-desc">
            <h3>{project.project.title}</h3>
            <p>{project.project.desc}</p>
        </div>
        {!project.project.isApp && <Swiper pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            {project.project.imgs && !project.project.isApp && project.project.imgs.map((img) =>
                <SwiperSlide> <img src={img} alt="" /></SwiperSlide>)}
            {/* {project.project.isApp && project.project.imgs.map((img) =>
                <SwiperSlide> <img src={img} alt="" /></SwiperSlide>)} */}
        </Swiper>}
        {project.project.isApp &&
            <div className='swiper flex align-center justify-center'>
                <div className='iphone-wrapper'>
                    {/* <img className='iphone' src={iphone} alt="" /> */}
                    <Swiper pagination={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >
                        {project.project.imgs.map((img) =>
                            <SwiperSlide> <img src={img} alt="" />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>
        }
    </div >
}
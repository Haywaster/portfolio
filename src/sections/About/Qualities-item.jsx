import { Icon } from '@iconify/react';

const QualitiesItem = ({ picture, header, descr, num }) => {
    return (
        <div className="flex bullet-wrap ">
            <div data-aos="flip-right" data-aos-delay={num * 100} data-aos-anchor-placement="top-center" className='hex-wrap waypoint animated flip-in-x'>
                <div className="hexagon">
                    <Icon className={`mdi mdi-${picture}`} icon={`mdi:${picture}`} />
                </div>
            </div>
            <div data-aos="fade" data-aos-delay={num * 100} data-aos-anchor-placement="top-center" className="waypoint animated fade-in">
                <div className="label bold">{header}</div>
                <div>{descr}</div>
            </div>
        </div>
    );
};

export default QualitiesItem
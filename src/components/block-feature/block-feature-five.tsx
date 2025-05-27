import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import service_data from '@/data/service-data';
import arrow from '@/assets/images/icon/icon_09.svg';
import icon from '@/assets/images/icon/icon_27.svg';
import shape from '@/assets/images/shape/shape_06.svg';
import PricingArea from '../pricing/pricing-area';
const BlockFeatureFive = () => {
  const service_items = service_data.filter(s => s.page === 'home')
  return (
  	<div className="block-feature-five light-bg position-relative mt-80 md-mt-50 pt-120 lg-pt-80 pb-150 lg-pb-80">
		<PricingArea/>
			<Image src={shape} alt="shape" className="lazy-img shapes shape_01"/>
		</div>
  );
};

export default BlockFeatureFive;
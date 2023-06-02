import React, { useState } from 'react'

const Accordian = (props) => {
	const[isActive, setActive] = useState(false);
	var accInfoOpen = isActive ? 'accOpen' : 'accClose';
	return (
		<>
			<div className="accordian_blcok wow animate__animated animate__fadeInUp">
				<div onClick={() => setActive(!isActive)} className="acc_header">
					<h3>{props.AccHeading}</h3>
					<span className="arrow">{!isActive ? '+' : '-'}</span>
				</div>
				{<div className="acc_info" id={accInfoOpen}>
					<p>{props.accInfo}</p>
				</div>}
			</div>
		</>
	)
}

export default Accordian

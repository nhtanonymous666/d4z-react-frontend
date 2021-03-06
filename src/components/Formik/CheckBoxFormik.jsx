import React from 'react';
import { useField } from 'formik';

const CheckBoxFormik = ({ errors, label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<input {...field} {...props} type="checkbox" className="custom-control-input" />
			<label className="custom-control-label" htmlFor={props.id || props.name}>
				{label}
			</label>
			{meta.touched && meta.error && <div className="invalid-feedback d-block">{meta.error}</div>}
			{errors && <div className="invalid-feedback">{errors}</div>}
		</>
	);
};

export default CheckBoxFormik;

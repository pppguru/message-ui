import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import Loader from '../common/Loader'
import Dropzone from 'react-dropzone'
import NumberInput from 'react-number-input'

const FORM_NAME = 'products'

export const fields = [
	'name',
	'description',
	'price',
	'images'
]

const validate = (values) => {
	let errors = {}

	if (!values.name) {
		errors.name = 'Required'
	}

	if (!values.description) {
		errors.description = 'Required'
	}

	return errors
}

class ProductForm extends Component {
	constructor(props) {
		super(props)

		this.clearFiles = this.clearFiles.bind(this)

		this.state = {
			files: [],
			editedImg: false
		}
	}

	onDrop(files) {
    this.setState({
      files: files
    });
		this.props.putImage(files[0])
  }

  clearFiles() {
		this.setState({ files: [] })

		this.props.putImage(null)
  }

	render() {
		const {
			fields: {
				image,
				name,
				description,
				price,
				images
			},
			handleSubmit,
			hideForm,
			isSubmitting,
			isEditing,
		} = this.props

		const previewImg = images.value && images.value[0] && images.value[0].small
		
		if (previewImg && !this.state.editedImg) {
			this.state.files = [{preview: previewImg}]
			this.state.editedImg = true;
		}
		return (
			<form className="form form--fullscreen form--product" onSubmit={handleSubmit}>
				<button type="button" className="form__close" onClick={() => { hideForm(FORM_NAME) }}>&times;</button>

				<div className="form__header">
					<h3 className="form__title">{(isEditing) ? 'Edit' : 'Add'} Product</h3>
				</div>

				<div className="form__content form__content--column" style={{ maxWidth: 750 }}>
					<div className="cols">
						<div className="col--left">

							{this.state.files.length > 0 ? <div className="form-product__image" onClick={this.clearFiles}>
								<div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
								</div> :
								<div className="dropzone" style={{ marginTop: 25 }}>
									<Dropzone 
										onDrop={file => this.onDrop(file)}
										accept="image/jpg">
										<div className="dropzone__body"><i className="mu mu-camera"></i></div>
									</Dropzone>
								</div>
							}
						</div>
						<div className="col--right">
					</div>
						<div className="form__fields">
							<div className="form__row">
								<div className={(name.touched && name.error) ? 'form__group form__group--error' : 'form__group'}>
									<label htmlFor="input-name">Name</label>
									
									<input type="text" className="input input--text" placeholder="Name" {...name} />
								</div>
							</div>
							<div className="form__row">
								<div className={(description.touched && description.error) ? 'form__group form__group--error' : 'form__group'}>
									<label htmlFor="input-name">Description</label>
									
									<input type="text" className="input input--text" placeholder="Description" {...description} />
								</div>
							</div>
							<div className="form__row">
								<div className="form__group form__group--half">
									<label htmlFor="input-name">Price</label>
									
									<NumberInput
											className="input input--text"
									    id="price"
									    type="tel"
									    placeholder="Price"
									    format="0.00"
									    {...price} />
								</div>
							</div>
						</div>
					</div>

					<div className="form__footer">
						<button type="submit" className="btn btn--alpha form__submit">{(isSubmitting) ? <Loader type={'button'} /> : 'Submit'}</button>
					</div>
				</div>
			</form>
		)
	}
}

export default reduxForm({
	form: 'ProductForm',
	fields,
	validate
})(ProductForm)

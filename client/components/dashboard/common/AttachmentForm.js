import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import Loader from './Loader'

const FORM_NAME = 'attachment'

export default class AttachmentForm extends Component {
	constructor(props) {
		super(props)

		this.clearFiles = this.clearFiles.bind(this)

		this.state = {
			files: []
		}
	}

	onDrop(files) {
		this.setState({ files: files })

		this.props.putImage(files[0])
	}

	clearFiles() {
		this.setState({ files: [] })
	}

	render() {
		const {
			handleSubmit,
			isSubmitting,
			hideForm
		} = this.props

		const submitButton =
			(this.state.files[0])
			? <button type="submit" style={{ width: 100 }} className="btn btn--md btn--alpha">{(isSubmitting) ? <Loader type={'button'} /> : 'Send'}</button>
			: <button type="button" style={{ width: 100 }} className="btn btn--md btn--alpha btn--disabled">{(isSubmitting) ? <Loader type={'button'} /> : 'Send'}</button>

		return (
			<form onSubmit={handleSubmit} className="modal">
				<div className="modal__header">
					<h3 className="modal__title">Attachment</h3>
					<button type="button" className="modal__close" onClick={() => { hideForm(FORM_NAME) }}>&times;</button>
				</div>
				<div className="modal__body">
					<div className="attachment">
						{this.state.files.length > 0 
							? <div className="dropzone__image" onClick={this.clearFiles}>
									<div>{this.state.files.map((file, index) => <img key={index} src={file.preview} /> )}</div>
								</div>
							: <div className="dropzone">
									<Dropzone 
										onDrop={file => this.onDrop(file)}
										accept="image/jpeg">
										<div className="dropzone__body"><i className="mu mu-camera"></i></div>
									</Dropzone>
								</div>
						}
					</div>
				</div>
				<div className="modal__footer">
					{submitButton}
				</div>
			</form>
		)
	}
}
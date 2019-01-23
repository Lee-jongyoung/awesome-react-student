import React, {Component} from 'react'

class Writing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isWritingTitleClicked: false,
			userInputTitle: "title",
			userInputContent: "content"
    }
  }

  handleSubmit = (e) => {
    console.log('submitted')
		this.props.save(this.state)
		this.setState({
			userInputTitle: "",
			userInputContent: "",
		})
    e.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
			[event.target.name]: event.target.value
    })
  }

  handleFocus = (e) => {
    this.setState({
      isWritingTitleClicked: true
    })

  }

  render() {
		const writingTitle = (
			<div className="input-field">
				<input
					type='text'
          name='userInputTitle'
					value={this.state.userInputTitle}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
				/>
			</div>
		)

		const writingContent = (
          <div className="input-field">
            <input
							type='text'
							name='userInputContent'
              value={this.state.userInputContent}
              onChange={this.handleChange}
            />
          </div>
    )
    
    const isWritingTitleClicked = this.state.isWritingTitleClicked

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {writingTitle}
          {isWritingTitleClicked ? writingContent: ''}
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    )
  }
}
export default Writing
import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={event => this.props.handleFirstNameChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            onChange={event => this.props.handleLastNameChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    )
  }

  

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, LastName:
  //   this.state.lastName }
  //   // this.sendFormDataSomewhere(formData)
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }

  // // () {
  // //   return (
  // //     <form onSubmit={event => this.handleSubmit(event)}>
  // //       <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
  // //       <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
  // //     </form>
  // //   )
  // // }

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={event => this.handleSubmit(event)}>
  //         <input
  //           type="text"
  //           onChange={event => this.handleFirstNameChange(event)}
  //           value={this.state.firstName}
  //         />
  //         <input
  //           type="text"
  //           onChange={event => this.handleLastNameChange(event)}
  //           value={this.state.lastName}
  //         />
  //         <input type="submit"/>
  //       </form>
  //       {this.listOfSubmissions()}
  //     </div>
  //   )
  // }
}

export default Form;
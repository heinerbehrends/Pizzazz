import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendNameAction } from '../actions/actionCreators';
import {
  FormContainer, Form, FormGroup, HiddenLabel, ButtonForm, TextInput,
} from './styled/ScreenNameStyled';

export class ScreenName extends Component {
  constructor(props) {
    super(props);
    this.state = { screenName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.sendScreenName = this.sendScreenName.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ screenName: value });
  }

  sendScreenName(event) {
    event.preventDefault();
    const { sendName } = this.props;
    const { screenName } = this.state;
    if (!screenName) {
      return;
    }
    sendName(screenName);
  }

  render() {
    const { screenName } = this.props;
    return screenName.length ? null : (
      <FormContainer>
        <Form
          id="screenName"
          name="screenName"
          autoComplete="off"
          onSubmit={this.sendScreenName}
        >
          <HiddenLabel htmlFor="enter-screen-name">Enter screen name</HiddenLabel>
          <FormGroup>
            <TextInput
              placeholder="Enter screen name to start"
              onChange={this.handleChange}
              type="text"
              id="enter-screen-name"
              name="screenName"
              autoFocus
            />
            <ButtonForm type="submit" value="Go" />
          </FormGroup>
        </Form>
      </FormContainer>
    );
  }
}

ScreenName.propTypes = {
  sendName: PropTypes.func.isRequired,
  screenName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  screenName: state.screenName,
});

const mapDispatchToProps = dispatch => ({
  sendName: name => dispatch(sendNameAction(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenName);

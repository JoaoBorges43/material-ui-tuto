import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store.js';

export default class extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles(){
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercise[muscles] = exercise[muscles]
        ? [exercise[muscles], exercise]
        : [exercise];

      return exercises;
    }, {})
    );
  }

  render() {
    const { exercises } = this.getExercisesByMuscles();
    return <Fragment>
      <Header/>

      <Exercises
        exercise = {exercises}/>

      <Footer
       muscles = {muscles}/>
    </Fragment>
  }
}

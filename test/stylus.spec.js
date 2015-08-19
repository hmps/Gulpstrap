/* global describe, it */
/* eslint-disable no-unused-expressions */
import {expect} from 'chai';
import gulp from 'gulp';
import stylusTask from '../dist/tasks/stylus';

describe('Stylus task', () => {

    it('should throw an error if no src is provided', () => {
        function errWrapper(opts) {
            return stylusTask.setupTask({dest: '.'});
        }

        expect(errWrapper).to.throw(Error);
    });


    it('should throw an error if no dest is provided', () => {
        function errWrapper() {
            return stylusTask.setupTask({src: '.'});
        }

        expect(errWrapper).to.throw(Error);
    });


    it('should create a stylus task', () => {
        stylusTask.setupTask({src: 'src/*.stylus', dest: '.'});
        expect(gulp._registry._tasks.stylus).to.exist;
    });

});
